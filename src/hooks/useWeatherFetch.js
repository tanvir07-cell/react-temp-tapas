import { useEffect, useState } from "react";
import { useLocation } from "../context/LocationProvider";

export default function useWeatherFetch(){
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });

    const [error,setError] = useState(null)

    const {location} = useLocation()

    async function fetchWeatherData(lat,lon){
        try{
            setLoading({
                ...loading,
                state:true,
                message:"Loading...⏳⌛️"
            })
            const data = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)).json()

            if(!data){
                throw new Error("Invalid Api:))")
            }
            else{
                const updatedData = {
                    ...weatherData,
                    location: data?.name,
                    climate: data?.weather[0]?.main,
                    temperature: data?.main?.temp,
                    maxTemperature: data?.main?.temp_max,
                    minTemperature: data?.main?.temp_min,
                    humidity: data?.main?.humidity,
                    cloudPercentage: data?.clouds?.all,
                    wind: data?.wind?.speed,
                    time: data?.dt,
                    longitude: lon,
                    latitude: lat,
                }

                setWeatherData(updatedData)
            }

        }
        catch(err){
            setError(err)


        }

        finally{
            setLoading({
                ...loading,
                state:false,
                message:""
            })

        }
    } 

    // this effect run after first mount..
    useEffect(()=>{
      
        setLoading({
            ...loading,
            state:true,
            message:"Finding Location..."

        })

        if(location.latitude && location.longitude){
            fetchWeatherData(location.latitude,location.longitude)
        }

        else{



        navigator.geolocation.getCurrentPosition(function (position) {
            fetchWeatherData(
                position.coords.latitude,
                position.coords.longitude
            );
        });
    }
    },[location.latitude,location.longitude])



    return {
        loading,
        weatherData,
        error

    }

    
}
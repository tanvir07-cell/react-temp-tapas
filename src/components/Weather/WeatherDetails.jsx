import React from 'react'
import MAX from "../../assets/icons/temp-max.svg"
import MIN from "../../assets/icons/temp-min.svg"
import HUMIDITY from "../../assets/icons/humidity.svg"
import CLOUD from "../../assets/icons/cloud.svg"
import WIND from "../../assets/icons/wind.svg"
import { useWeatherData } from '../../context/WeatherDataProvider'





const WeatherDetails = () => {
    const {weatherData} = useWeatherData()
    const {maxTemperature,minTemperature,humidity,cloudPercentage
,wind}= weatherData
  return (
    <div>
    <p className="text-sm lg:text-lg font-bold uppercase mb-8">thunderstorm with light drizzle</p>
    <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp max</span>
            <div className="inline-flex space-x-4">
                <p>{maxTemperature}°</p>
                <img src={MAX} alt="temp-max" />
            </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp min</span>
            <div className="inline-flex space-x-4">
                <p>{minTemperature}°</p>
                <img src={MIN} alt="temp-min" />
            </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Humadity</span>
            <div className="inline-flex space-x-4">
                <p>{humidity}%</p>
                <img src={HUMIDITY} alt="humidity" />
            </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Cloudy</span>
            <div className="inline-flex space-x-4">
                <p>{cloudPercentage
}%</p>
                <img src={CLOUD} alt="cloudy" />
            </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Wind</span>
            <div className="inline-flex space-x-4">
                <p>{wind}km/h</p>
                <img src={WIND} alt="wind" />
            </div>
        </li>
    </ul>
</div>
  )
}

export default WeatherDetails
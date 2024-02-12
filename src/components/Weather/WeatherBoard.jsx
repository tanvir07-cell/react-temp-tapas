import React from 'react'
import AddToFavouriteWeather from './AddToFavouriteWeather'
import WeatherSummary from './WeatherSummary'
import WeatherDetails from './WeatherDetails'
import useWeatherFetch from '../../hooks/useWeatherFetch'
import { useWeatherData } from '../../context/WeatherDataProvider'

const WeatherBoard = () => {

    const {loading,weatherData,error} = useWeatherData();
    console.log(loading,weatherData,error)
  return (
    <div className="container mx-auto">
				<div
					className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
					<div className="grid md:grid-cols-2 gap-10 md:gap-6">
                        {loading.state?
                       <h1>{loading.message}</h1>
                       :
                       <>
                       	<AddToFavouriteWeather/>
						<WeatherSummary/>
						<WeatherDetails/>
                       </>    
                    }

					</div>
				</div>
				
			</div>
  )
}

export default WeatherBoard
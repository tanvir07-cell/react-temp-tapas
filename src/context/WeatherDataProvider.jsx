import React, { createContext, useContext } from 'react'
import useWeatherFetch from '../hooks/useWeatherFetch';

const WeatherContext = createContext();

const WeatherDataProvider = ({children}) => {
    const {loading,weatherData,error} = useWeatherFetch()

    const value = {loading,weatherData,error}

  return (
    <WeatherContext.Provider value = {value}>

        {
          children
        }



    </WeatherContext.Provider>
  )
}

export const useWeatherData = ()=> useContext(WeatherContext)

export default WeatherDataProvider
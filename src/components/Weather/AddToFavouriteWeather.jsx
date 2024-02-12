import React, { useEffect, useState } from 'react'

import HEART from "../../assets/heart.svg"
import REDHEART from "../../assets/heart-red.svg"
import { useFavourites } from '../../context/FavouriteProvider'

import { useWeatherData } from '../../context/WeatherDataProvider'

const AddToFavouriteWeather = () => {
  
  const [isFavourite, setIsFavourite] = useState(false)

  const {weatherData} = useWeatherData()
  
  const {latitude,longitude,location} = weatherData


  const {favourites,addFavorite,removeFavoriteLocation} = useFavourites()

  const handleFavorite = () => {

    const isFav = favourites.find(fav=>fav.city===location);

    if(!isFav){
      addFavorite(latitude,longitude,location)
      setIsFavourite(true)
    }

    else{
      removeFavoriteLocation(location)
      setIsFavourite(false)
    }

    
  }

  useEffect(()=>{
    const isFav = favourites.find(fav=>fav.city===location);
    if(isFav){
      setIsFavourite(true)
    }
    else{
      setIsFavourite(false)
    }
  
  },[favourites,location])
  

  return (
    <div className="md:col-span-2">
    <div className="flex items-center justify-end space-x-6">
        <button 
        onClick={handleFavorite}
        
        className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
            <span>Add to Favourite</span>
            <img src={isFavourite?REDHEART:HEART} alt="" />
        </button>
        
    </div>
</div>
  )
}

export default AddToFavouriteWeather
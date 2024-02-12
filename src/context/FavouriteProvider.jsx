import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const FavouriteContext = createContext()

export default function FavouriteProvider({children}){

    const [favourites,setFavourites] = useLocalStorage('favourites',[])

    const addFavorite = (lat,lan,city) => {
        setFavourites([...favourites,{lat,lan,city}])

    }

    const removeFavoriteLocation = (location)=>{
        setFavourites(favourites.filter(fav=>fav.city !== location))
    
    }

  return (
    <FavouriteContext.Provider value = {{favourites,addFavorite,removeFavoriteLocation}}>
      {children}
    </FavouriteContext.Provider>
  )
}

export const useFavourites = () => useContext(FavouriteContext)


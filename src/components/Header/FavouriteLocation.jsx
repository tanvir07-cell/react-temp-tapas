import React, { useState } from 'react'
import HEART from "../../assets/heart.svg"
import { useFavourites } from '../../context/FavouriteProvider'
import { useLocation } from '../../context/LocationProvider'

const FavouriteLocation = () => {
  const [isFavourite, setIsFavourite] = useState(false)
  const {favourites,addFavorite,removeFavoriteLocation} = useFavourites()

  const {location,setLocation} = useLocation() 

  return (
    <>
      <button onClick={()=>setIsFavourite(!isFavourite)}>
    	<div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
					<img src={HEART} alt="" />
					<span>Favourite Locations</span>
				</div>
        </button>
    {isFavourite &&
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
    <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
    <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
      {
        favourites.length === 0 ? <li className="text-center">No Favourite Locations</li>
        :favourites.map((fav)=>(

          <li key={fav.city} className="hover:bg-gray-200">
            <button onClick = {
              ()=> setLocation({...fav,location:fav.city,latitude:fav.lat,longitude:fav.lan})
            }>
            {fav.city}

            </button>
            
            </li>
        ))
      }
       
    </ul>
   </div>
}
   </>
  )
}

export default FavouriteLocation
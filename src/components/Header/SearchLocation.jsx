import React, { useState } from 'react'
import SEARCH from "../../assets/search.svg"
import { useLocation } from '../../context/LocationProvider'
import { getLocationByName } from '../../utils/index.mjs'
import useDebounce from '../../hooks/useDebounce'
import { useWeatherData } from '../../context/WeatherDataProvider'
import { useFavourites } from '../../context/FavouriteProvider'



const SearchLocation = () => {
	const [input, setInput] = useState('')
	const {location,setLocation} = useLocation()


	

	const handleSubmit = (e) => {
		
		e.preventDefault()
	

	}
	const debouncedChange = useDebounce(()=>{
			const locationData = getLocationByName(input.toString().toLowerCase())
			console.log(input)
		
		setLocation(locationData)
	})

  return (
    <form action="#" onSubmit={handleSubmit}>
					<div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
						<input 
						 onChange={(e)=>{
							debouncedChange()
							setInput(e.target.value)
						}}
						className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
							type="search" placeholder="Search Location" required />
						<button type="submit">
							<img src={SEARCH}/>
						</button>
					</div>
	</form>
  )
}

export default SearchLocation
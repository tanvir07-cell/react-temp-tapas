import React, { createContext, useContext, useState } from 'react'

const LocationContext = createContext()

const LocationProvider = ({children}) => {
    const [location,setLocation] = useState({latitude:0,longitude:0,location:""})




  return (
    <LocationContext.Provider value = {{location,setLocation}}>
        {children}
      
    </LocationContext.Provider>
  )
}

export const useLocation = ()=> useContext(LocationContext)

export default LocationProvider

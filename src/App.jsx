
import Page from './Page'
import FavouriteProvider from './context/FavouriteProvider'
import LocationProvider from './context/LocationProvider'
import WeatherDataProvider from './context/WeatherDataProvider'

function App() {

  return (
    <LocationProvider>
<WeatherDataProvider>
  <FavouriteProvider>
    <Page/>
 
 </FavouriteProvider>

</WeatherDataProvider>
</LocationProvider>
  )
}

export default App

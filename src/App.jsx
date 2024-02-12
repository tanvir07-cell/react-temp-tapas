
import Header from './components/Header/Header'
import WeatherBoard from './components/Weather/WeatherBoard'
import WeatherDataProvider from './context/WeatherDataProvider'

function App() {

  return (
<WeatherDataProvider>
 <Header/>
 <main>
   <section className="mt-52">
     <WeatherBoard/>
   </section>
 </main>
</WeatherDataProvider>
  )
}

export default App

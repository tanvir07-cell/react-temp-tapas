import React from 'react'

import Header from './components/Header/Header'
import WeatherBoard from './components/Weather/WeatherBoard'

const Page = () => {
  return (
    <>
    <Header/>
<main>
   <section className="mt-52">
     <WeatherBoard/>
   </section>
 </main>
      
    </>
  )
}

export default Page

import React from 'react'
import Header from './componets/Header'
import Hero from './componets/Hero'
import Features from './componets/Features'
import Pricing from './componets/Pricing'

function App() {
  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Features />
      <Pricing/>
    </main>
  )
}

export default App
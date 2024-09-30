import React from 'react'
import Header from './componets/Header'
import Hero from './componets/Hero'
import Features from './componets/Features'
import Pricing from './componets/Pricing'
import Faq from './componets/Faq'

function App() {
  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Features />
      <Pricing/>
      <Faq/>
    </main>
  )
}

export default App
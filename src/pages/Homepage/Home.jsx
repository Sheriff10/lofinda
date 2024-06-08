import React from 'react'
import Header from '../../ui/Header'
import Intro from './components/Intro'
import Stats from './components/Stats'
import BestSelling from './components/BestSelling'
import Abt from './components/Abt'
import Footer from '../../ui/Footer'
import Waitlist from './components/Waitlist'

export default function Home() {
  return (
    <div className="wrap">
        <Header />
        <Waitlist />
        <Intro />
        <Stats />
        <BestSelling />
        <Abt />
        <Footer />
    </div>
  )
}

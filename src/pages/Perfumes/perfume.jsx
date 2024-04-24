import React from 'react'
import PerfumeIntro from './components/PerfumeIntro'
import Header from '../../ui/Header'
import Footer from '../../ui/Footer'
import PerfumeSwiper from './components/PerfumeSwiper'

export default function Perfume() {
  return (
    <div className="wrap">
        <Header black={false} />
        <PerfumeSwiper />
        {/* <PerfumeIntro /> */}
        <Footer />
    </div>
  )
}

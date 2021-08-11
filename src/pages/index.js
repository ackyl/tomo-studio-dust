import * as React from "react"
import FloatingLogo from '../template/FloatingLogo'
import Header from "../template/Header"
import HomeCarousel from "../layout/HomeCarousel"

// Markup
const IndexPage = () => {
  return (
    <main>
      <HomeCarousel/>
      <Header/>
      <FloatingLogo/>
    </main>
  )
}

export default IndexPage

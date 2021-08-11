import * as React from "react"
import FloatingLogo from '../template/FloatingLogo'
import Header from "../template/Header"
import HomeCarousel from "../layout/HomeCarousel"
import LatestProduct from "../layout/LatestProduct"
import LookbookPreview from "../layout/LookbookPreview"

// Markup
const IndexPage = () => {
  return (
    <main>
      <HomeCarousel />
      <LatestProduct />
      <LookbookPreview />
      <Header />
      <FloatingLogo />
    </main>
  )
}

export default IndexPage

import * as React from "react"
import { ParallaxProvider } from 'react-scroll-parallax';
import "./src/global-style.css"

export const wrapRootElement = ({ element }) => {
  return (
    <ParallaxProvider>
      {element}
    </ParallaxProvider>
  )
}

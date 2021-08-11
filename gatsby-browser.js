import * as React from "react"
import "./src/global-style.css"
import { ParallaxProvider } from 'react-scroll-parallax';

export const wrapRootElement = ({ element }) => {
  return (
    <ParallaxProvider>
      {element}
    </ParallaxProvider>
  )
}

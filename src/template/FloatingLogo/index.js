import * as React from "react"
import styled from 'styled-components';
import DustLogo from "../../images/dust-logo.png"

// Styles
const FloatingLogoImg = styled.img`
  width: 340px;
  position: fixed;
  bottom: 24px;
  left: 32px;

  @media only screen and (max-width: 600px) {
    width: 240px;
    bottom: auto;
    top: 8px;
    left: 8px;
  }
`

// Markup
const FloatingLogo = () => {
  return (
    <FloatingLogoImg src={DustLogo} alt="Dust Logo"/>
  )
}

export default FloatingLogo

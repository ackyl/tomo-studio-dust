import * as React from "react"
import styled from 'styled-components';
import DustLogo from "../../images/dust-logo.png"

const FloatingLogoImg = styled.img`
  width: 340px;
  position: fixed;
  bottom: 24px;
  left: 32px;
`

const FloatingLogo = () => {
  return (
    <FloatingLogoImg src={DustLogo} alt="Dust Logo"/>
  )
}

export default FloatingLogo

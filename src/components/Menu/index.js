import * as React from "react"
import styled from 'styled-components';

// Styles
const MenuWrapper = styled.div`
  position: relative;

  :hover {
    cursor: pointer;
  }
`

const MenuText = styled.p`
  font-size: 16px;
  margin: 0 16px;
`

const MenuSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  margin-top: -8px;

  :hover ellipse {
    stroke-dashoffset: 0;
  }
`

const MenuEllipse = styled.ellipse`
  fill: none;
  stroke-width: 2px;
  stroke: #F87E59;
  stroke-dasharray: 300 300;
  stroke-dashoffset: 300;
  transition: stroke-dashoffset 1000ms linear;
`

// Markup
const Menu = ({ menu }) => {
  return(
    <MenuWrapper>
      <MenuText> {menu} </MenuText>
      <MenuSVG>
        <MenuEllipse cx="50%" cy="50%" rx="4" ry="16" />
      </MenuSVG>
    </MenuWrapper>
  )
}

export default Menu

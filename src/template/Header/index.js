import * as React from "react"
import './header.css'
import UserIcon from "../../images/user-icon.png"
import CartIcon from "../../images/cart-icon.png"

// Styles
const menuWrapperStyle = {
  "position": "fixed",
  "top": "32px",
  "left": "40px",
}

const menuStyle = {
  "display": "flex",
  "flex-directon": "row",
  "margin": "0px -16px"
}

const menuTextStyle = {
  "font-size": "16px",
  "margin": "0px 16px"
}

const cartWrapperStyle = {
  "position": "fixed",
  "top": "32px",
  "right": "40px"
}

const cartStyle = {
  "display": "flex",
  "flex-direction": "row",
  "margin": "0px -16px"
}

const cartIconStyle = {
  "width": "40px",
  "height": "40px",
  "margin": "0 16px"
}

// Data
const menus = [
  {
    menu: "Woman",
    url: ""
  },
  {
    menu: "Man",
    url: ""
  },
  {
    menu: "Editorial",
    url: ""
  },
  {
    menu: "Search",
    url: ""
  }
]

// Markup
const Header = () => {
  return(
    <div>
      <div style={menuWrapperStyle}>
        <div style={menuStyle}>
          {menus.map(menu => (
            <div class="svgWrapper">
              <p style={menuTextStyle}>
                {menu.menu}
              </p>
              <svg class="svg">
                <ellipse class="ellipse" cx="50%" cy="50%" rx="4" ry="16"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div style={cartWrapperStyle}>
        <div style={cartStyle}>
          <img src={UserIcon} style={cartIconStyle}></img>
          <img src={CartIcon} style={cartIconStyle}></img>
        </div>
      </div>
    </div>
  )
}

export default Header

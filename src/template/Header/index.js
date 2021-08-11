import * as React from "react"
import styled from 'styled-components';
import Menu from "../../components/Menu"
import UserIcon from "../../images/user-icon.png"
import CartIcon from "../../images/cart-icon.png"
import MoreIcon from "../../images/more-icon.png"

// Styles
const MenuWrapper = styled.div`
  position: fixed;
  top: 32px;
  left: 40px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px -16px;
`

const CartWrapper = styled.div`
  position: fixed;
  top: 32px;
  right: 40px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const MobileCartWrapper = styled.div`
  position: fixed;
  top: 8px;
  right: 8px;
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

const CartRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px -16px;

  @media only screen and (max-width: 600px) {
    margin: 0px -4px;
  }
`

const CartImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 16px;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
    margin: 0 4px;
  }
`

// Data
const menus = [
  {
    menu: "Woman"
  },
  {
    menu: "Man"
  },
  {
    menu: "Editorial"
  },
  {
    menu: "Search"
  }
]

// Markup
const Header = () => {
  return(
    <div>
      <MenuWrapper>
        <MenuRow>
          {menus.map((menu, index) => (
            <Menu 
              key={index}
              menu={menu.menu}
            />
          ))}
        </MenuRow>
      </MenuWrapper>
      <CartWrapper>
        <CartRow>
          <CartImg src={UserIcon} />
          <CartImg src={CartIcon} />
        </CartRow>
      </CartWrapper>
      <MobileCartWrapper>
        <CartRow>
          <CartImg src={CartIcon} />
          <CartImg src={MoreIcon} />
        </CartRow>
      </MobileCartWrapper>
    </div>
  )
}

export default Header

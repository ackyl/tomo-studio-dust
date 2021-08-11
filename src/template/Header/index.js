import * as React from "react"
import styled from 'styled-components';
import Menu from "../../components/Menu"
import UserIcon from "../../images/user-icon.png"
import CartIcon from "../../images/cart-icon.png"

// Styles
const MenuWrapper = styled.div`
  position: fixed;
  top: 32px;
  left: 40px;
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
`

const CartRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px -16px;
`

const CartImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 16px;
  cursor: pointer;
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
    </div>
  )
}

export default Header

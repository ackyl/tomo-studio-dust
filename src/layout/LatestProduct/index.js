import * as React from "react"
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import Product1 from "../../images/product-1.png"
import Product2 from "../../images/product-2.png"
import Product3 from "../../images/product-3.png"

// Styles
const LatestProductWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const LatestProductTitle = styled.h1`
  position: absolute;
  font-size: 60px;
  top: 36px;
  font-weight: 400px;
  left: 50%;
  transform: translateX(-50%);
`

const ParallaxWrapper = styled(Parallax)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 -16px;
`

const ProductRow = styled.div`
  width: 320px;
  height: 400px;
  margin: 0 16px;
`

const ProductImg = styled.img`
  width: 100%;
  object-fit: cover;
`

// Markup
const LatestProduct = () => {
  return (
    <LatestProductWrapper>
      <LatestProductTitle>
        Our Latest Product
      </LatestProductTitle>
      <ParallaxWrapper y={[150, -50]}>
        <ProductWrapper>
          <ProductRow>
            <ProductImg src={Product1} />
          </ProductRow>
          <ProductRow>
            <ProductImg src={Product2} />
          </ProductRow>
          <ProductRow>
            <ProductImg src={Product3} />
          </ProductRow>
        </ProductWrapper>
      </ParallaxWrapper>
    </LatestProductWrapper>
  )
}

export default LatestProduct

import * as React from "react"
import styled from 'styled-components';
import { Link } from "gatsby"
import Lookbook1 from "../../images/lookbook-preview-1.png"
import Lookbook2 from "../../images/lookbook-preview-2.png"

// Styles
const LookbookPreviewWrapper = styled.div `
  width: 100%;
  background-color: #DEDEDE;
  padding: 32px 0;

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`

const LookbookCard = styled.div.attrs(props => ({
  url: props.url
}))`
  height: 500px;
  position: relative;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 32px;

  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`

const LookbookText = styled.h1.attrs(props => ({
  color: props.color
})) `
  font-size: 52px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.color};
`

const LookbookLink = styled(Link).attrs(props => ({
  color: props.color
}))`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: ${props => props.color};
  text-decoration: underline;
`

// Markup
const LookbookPreview = () => {
  return (
    <LookbookPreviewWrapper>
      <LookbookCard url={Lookbook2}>
        <LookbookText color="white">
          Denim Comfort
        </LookbookText>
        <LookbookLink to="/" color="white">
          View Lookbook
        </LookbookLink>
      </LookbookCard>
      <LookbookCard url={Lookbook1}>
        <LookbookText>
          Creamy Spring
        </LookbookText>
        <LookbookLink to="/">
          View Lookbook
        </LookbookLink>
      </LookbookCard>
    </LookbookPreviewWrapper>
  )
}

export default LookbookPreview

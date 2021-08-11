import * as React from "react"
import DustLogo from "../../images/dust-logo.png"

const styles = {
  width: "340px",
  position: "fixed",
  bottom: 24,
  left: 32
}

const FloatingLogo = () => {
  return (
    <img src={DustLogo} alt="Dust Logo" style={styles}></img>
  )
}

export default FloatingLogo

import React from "react"
// import logo from "../assets/logo-2.jpg"
import styled from "styled-components"
import { CgMenuLeftAlt } from "react-icons/cg"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center wrapper">
        <div className="nav-header">
          <div className="logo-container">
            <StaticImage
              src="../assets/logo.png"
              alt="Salavat Logo"
              className="logo"
              layout="fixed"
              height={50}
            />
            <span>Москва</span>
          </div>
          <button className="toggle-btn">
            <CgMenuLeftAlt />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  margin-top: 1rem;
  height: 4rem;
  /* display: grid;
  place-items: center; */
  /*background-color: black; /* border: 1px solid black; */
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-container {
    text-align: center;
  }
  span {
    color: #dadcdb;
    font-size: 0.6rem;
  }
  .toggle-btn {
    display: grid;
    font-size: 1.6rem;
    background: transparent;
    border: transparent;
    color: white;
  }
  .logo {
    height: 3rem;
  }
`

export default Navbar

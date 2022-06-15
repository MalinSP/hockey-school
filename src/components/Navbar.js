import React from "react"
import logo from "../assets/logo.png"
import styled from "styled-components"
import { CgMenuLeftAlt } from "react-icons/cg"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center wrapper">
        <div className="nav-header">
          <img src={logo} alt="Salavat Logo" className="logo" />
          <button className="toggle-btn">
            <CgMenuLeftAlt />
          </button>
        </div>
        <div className="nav-links"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 4rem;
  display: grid;
  place-items: center;

  /*background-color: black; /* border: 1px solid black; */
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    display: grid;
    font-size: 1.6rem;
    background: transparent;
    border: transparent;
    color: white;
  }
  .logo {
    height: 3.6rem;
  }
`

export default Navbar

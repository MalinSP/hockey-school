import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <Wrapper>
      <header className="hero">
        <StaticImage
          src="../assets/hero5.jpeg"
          layout="fullWidth"
          alt="children"
          placeholder="tracedSVG"
          className="hero-img"
        />
        <div className="hero-text wrapper">
          <h1>Хоккейная детская школа</h1>
          <form className="form">
            <h2>Записаться на первую бесплатную тренировку</h2>
            <p>Оставьте контакты и мы свяжемся с Вами в течение часа </p>
            <input
              className="input"
              type="number"
              name="phone"
              placeholder="+7 (_ _ _) _ _ _ _ _ _ _"
            />
            <button type="submit" className="submit-btn">
              Записаться
            </button>
          </form>
        </div>
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .hero {
    height: calc(100vh - 4rem);
    max-height: 700px;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    top: 0;
    width: 100%;
    z-index: -100;
  }
  .hero:after {
    position: absolute;
    content: "";
    background-color: black;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  .hero-img {
    height: 100%;
  }
  .hero-text {
    position: absolute;
    bottom: 3rem;
    z-index: 100;
    color: white;
    display: grid;
    place-items: center;
    gap: 2rem;
  }
  h1 {
    font-size: 3rem;
    color: white;
    text-align: center;
    opacity: 0.7;
  }
  .form {
    background-color: black;
    width: 80vw;
    max-width: 620px;
    padding: 2rem 2rem;
    border-radius: 0.25rem;
    display: grid;
    place-items: center;
    gap: 1rem;
    opacity: 0.8;
  }
  p {
    font-size: 0.8rem;
    color: gray;
  }
  input {
    padding: 0.5rem;
  }
  .submit-btn {
    background-color: green;
    padding: 0.35rem 2rem;
    border: transparent;
    border-radius: 0.25rem;
    color: white;
    cursor: pointer;
  }
`

export default Hero

import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <Wrapper>
      <header className="hero">
        <StaticImage
          src="../assets/image-hero.jpeg"
          layout="fullWidth"
          alt="children"
          placeholder="tracedSVG"
          className="hero-img"
        />
      </header>
      <div className="hero-text wrapper">
        <div className="text">
          <h1>
            Хоккейная <span>академия</span> <br />
            для детей от 5 лет
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo
            necessitatibus culpa minus ex, magni vel dignissimos hic labore
            facilis maiores iure nisi odio in quas neque deserunt accusantium
            consequuntur.
          </p>
          <button className="btn btn-hero">Записаться на тренировку</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .hero {
    /* height: calc(100vh - 4rem); */

    position: absolute;
    /* max-width: 1200px; */
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
    height: 100vh;
    opacity: 0.5;
  }
  .hero-img {
    height: 100vh;
  }
  .hero-text {
    height: calc(100vh - 5rem);
    /* position: absolute; */
    bottom: 3rem;
    z-index: 100;
    color: white;
    display: grid;
    place-items: center;
    justify-items: start;
    gap: 1rem;
  }
  .text {
    width: 50%;
  }
  h1 {
    margin-bottom: 1.2rem;
    font-size: 3rem;
    color: white;
    /* text-align: center; */
    opacity: 0.9;
    letter-spacing: 0.15rem;
    line-height: 0.85;
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
    font-size: 1.2rem;
    color: white;
    margin-bottom: 1.5rem;
    letter-spacing: 0.15rem;
    line-height: 1.15;
    opacity: 0.9;
  }
  .btn-hero {
    background: #977f4b;
    font-size: 1.2rem;
    color: #efe2c4;
    letter-spacing: 0.05rem;
  }
  span {
    color: #66c08b;
  }
  @media screen and (max-width: 768px) {
    .text {
      width: 100%;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.8rem;
    }
    .btn-hero {
      font-size: 1rem;
    }
  }
`

export default Hero

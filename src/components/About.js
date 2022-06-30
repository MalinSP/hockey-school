import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const About = () => {
  return (
    <>
      <StyledBackground>
        <StaticImage
          src="../assets/about-image.webp"
          layout="fullWidth"
          alt="about background"
          className="about-image"
        />
      </StyledBackground>
      <Wrapper className="wrapper">
        <div className="about">
          <div className="content">
            <h1>О нас</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem vel pariatur sit accusantium, ad possimus temporibus ab
              libero blanditiis at incidunt et. Ratione eos ducimus asperiores
              omnis earum, nobis voluptate illum esse ipsam minima deserunt
              debitis magnam. Ullam dolorum cupiditate dolore sapiente officia
              ipsam doloribus quos assumenda eveniet, quo obcaecati temporibus
              corporis, deleniti odio molestiae dolores tempora. Eius nostrum,
              maxime
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .content {
    grid-column: 2;
  }
  h1 {
    font-size: 120px;
    margin-bottom: 1rem;
    font-weight: 600;
    opacity: 0.7;
    color: #0e1331;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.25;
    letter-spacing: 0.05rem;
    opacity: 0.8;
    color: white;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
  p {
    font-size: 0.8rem;
  }
`

const StyledBackground = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  :after {
    position: absolute;
    content: "";
    background-color: black;
    top: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.5;
  }
  .about-image {
    width: 100%;
    height: 100%;
  }
`
export default About

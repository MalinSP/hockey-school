import React from "react"
import styled from "styled-components"
import { StaticImage, getImage, getSrc, GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import team from "../utils/team.js"
const query = graphql`
  {
    allContentfulHockeySchool(sort: { fields: title, order: ASC }) {
      nodes {
        id
        name
        title
        feature {
          content
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, height: 450)
        }
      }
    }
  }
`

const Team = () => {
  const data = useStaticQuery(query)
  const team = data.allContentfulHockeySchool.nodes
  console.log(team)
  return (
    <>
      <StyledBackground>
        <StaticImage
          src="../assets/team-image.jpg"
          layout="fullWidth"
          alt="about background"
          className="about-image"
        />
      </StyledBackground>
      <Wrapper className="wrapper">
        <div className="content-container">
          <div className="header">
            <h1>Тренерский состав</h1>
          </div>
          <div className="coach-container">
            {team.map(person => {
              const { id, name, title, feature, image } = person
              const { content } = feature
              const pathToImage = getImage(image)
              return (
                <article key={id} className="team-person">
                  <GatsbyImage
                    image={pathToImage}
                    alt={name}
                    className="picture-person"
                  />
                  <div className="title">
                    <h4>{name}</h4>
                    <p>{title}</p>
                  </div>

                  <div className="info">
                    {content.map((item, index) => {
                      return (
                        <div className="feature" key={index}>
                          {item}
                        </div>
                      )
                    })}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  .header {
    font-size: 64px;
    text-align: center;
    margin-bottom: 2rem;
    color: #d7b66b;
    letter-spacing: 0.05rem;
    line-height: 1.05;
  }
  .coach-container {
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.2rem;
  }
  .team-person {
    background: #12183e;
    border-radius: 0.25rem;

    /* overflow: hidden; */
    perspective: 1px;
    /* height: 350px; */
  }

  .picture-person {
    display: block;
    object-fit: cover;
    height: 20rem;
    border-radius: 0.25rem;
  }
  .title {
    background-color: #12183e;
    color: #f3e9d3;
    padding: 1rem 1rem 0.5rem 1rem;
    display: grid;
    gap: 0.3rem;
    /* opacity: 0.5; */
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  .info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.4rem;

    padding: 1rem;
  }
  .feature {
    background: #e7d3a6;
    color: #816d40;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    .coach-container {
      width: 90vw;
      overflow-x: scroll;
      white-space: nowrap;
    }
    .team-person {
      width: 90vw;
    }
    .picture-person {
      height: 450px;
    }
  }
  @media screen and (max-width: 425px) {
    .team-person {
      width: 80vw;
    }
    .picture-person {
      height: 15rem;
    }
    .feature {
      font-size: 0.8rem;
    }
  }
`
const StyledBackground = styled.section`
  position: absolute;
  width: 100vw;
  /* min-height: 100vh */
  height: 100vh;
  z-index: -1;
  :after {
    position: absolute;
    content: "";
    background-color: black;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  .about-image {
    width: 100%;
    height: 100%;
  }
`

export default Team

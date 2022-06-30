import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Schedule = () => {
  return (
    <>
      <StyledBackground>
        <StaticImage
          src="../assets/clock-bg.jpeg"
          layout="fullWidth"
          alt="about background"
          className="about-image"
        />
      </StyledBackground>
      <Wrapper>
        <div className="wrapper">
          <h2>Расписание занятий</h2>
          <div className="timetable-container">
            <article className="date" style={{ backgroundColor: "#002d12" }}>
              <div className="day">
                <h4>Понедельник</h4>
              </div>
              <div className="time">09.30 - 11.00</div>
              <div className="place">Ледовая арена</div>
            </article>
            <article className="date" style={{ backgroundColor: "#413720" }}>
              <div className="day">
                <h4>Вторник</h4>
              </div>
              <div className="time">09.30 - 11.00</div>
              <div className="place">Ледовая арена</div>
            </article>
            <article className="date" style={{ backgroundColor: "#0b0e25" }}>
              <div className="day">
                <h4>Среда</h4>
              </div>
              <div className="time">09.30 - 11.00</div>
              <div className="place">Ледовая арена</div>
            </article>
            <article className="date" style={{ backgroundColor: "#002d12" }}>
              <div className="day">
                <h4>Четверг</h4>
              </div>
              <div className="time">09.30 - 11.00</div>
              <div className="place">Ледовая арена</div>
            </article>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: grid;
  place-items: center;
  color: white;

  h2 {
    font-size: 82px;
    text-align: center;
    margin-bottom: 2rem;
    color: white;
    opacity: 0.8;
  }
  .timetable-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  .date {
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-width: 600px;
    width: 600px;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "day ."
      ". time"
      ". place";
    padding: 2rem;
    border-radius: 0.5rem;
    gap: 0.2rem;
  }
  h4 {
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    color: white;
    opacity: 0.7;
  }

  .day {
    grid-area: day;
  }
  .place {
    grid-area: place;
    color: white;
    opacity: 0.7;
  }
  .time {
    grid-area: time;
    color: white;
    opacity: 0.7;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    .date {
      max-width: 90vw;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 375px) {
    .date {
      padding: 1rem;
    }
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
export default Schedule

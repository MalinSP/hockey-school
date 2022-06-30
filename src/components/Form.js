import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/plain.css"

const Form = () => {
  return (
    <>
      <StyledBackground>
        <StaticImage
          src="../assets/form-image.jpeg"
          layout="fullWidth"
          alt="about background"
          className="about-image"
        />
      </StyledBackground>
      <Wrapper className="wrapper">
        <div className="title">
          <h2>
            Запись на <br />
            тренировку
          </h2>
        </div>
        <form className="form">
          <input
            className="form-col"
            type="text"
            name="name"
            id="name"
            placeholder="Имя и фамилия ребенка"
          />

          <input
            type="text"
            name="date"
            id="date"
            className="form-col"
            placeholder="Дата рождения ребенка"
          />

          <input
            type="text"
            name="name"
            id="name"
            className="form-col"
            placeholder="Ваше имя"
          />

          <PhoneInput
            className="form-col"
            placeholder="+7(457) 903-93-93"
            inputClass="input-phone"
            inputStyle={{
              backgroundColor: "white",
              width: "100%",
              paddingTop: "0.5rem",
              color: "black",
              height: "auto",
            }}
            country={"ru"}
            onlyCountries={["ru"]}
            disableDropdown
          />
          <textarea
            // value={values.message}
            name="message"
            rows="5"
            placeholder="Ваш комментарий"
            className="form-col"
            // onChange={handleChange}
          ></textarea>
          <button className="submit-btn btn" type="button">
            Направить запрос
          </button>
        </form>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  /* display: grid;
  place-items: center; */
  .title {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
  .form {
    position: absolute;
    right: 0;
    /* background: black; */
    max-width: 450px;
    width: 450px;
    display: grid;
    place-items: center;
    gap: 1rem;
    bottom: 15rem;
  }
  input {
    width: 100%;
    padding: 1rem 1rem;
  }
  textarea {
    width: 100%;
    padding: 1rem 1rem;
  }

  h2 {
    font-size: 4rem;
    color: white;
    opacity: 0.8;
  }
  .input-phone {
    background-color: transparent;
  }
  .submit-btn {
    background: #977f4b;
    font-size: 1.2rem;
    color: #efe2c4;
    letter-spacing: 0.05rem;
  }
  @media screen and (max-width: 768px) {
    .title {
      top: 4rem;
    }
    h2 {
      font-size: 2rem;
      letter-spacing: 0.05rem;
      line-height: 1.05;
    }
    .form {
      bottom: 8rem;
    }
    .submit-btn {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 425px) {
    .form {
      width: 90vw;
      max-width: 300px;
      bottom: 2rem;
      left: 3.2rem;
    }
    input {
      padding: 0.5rem 0.5rem;
    }
    h2 {
      font-size: 1.6rem;
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
export default Form

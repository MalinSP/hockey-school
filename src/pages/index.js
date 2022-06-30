import React from "react"
import "../css/reset.css"
import "../css/main.css"
import { Navbar, Hero, About, Team, Schedule, Form } from "../components"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Schedule />
      <Form />
    </>
  )
}

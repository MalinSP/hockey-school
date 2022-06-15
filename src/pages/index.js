import React from "react"
import "../css/reset.css"
import "../css/main.css"
import { Navbar, Hero, About } from "../components"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

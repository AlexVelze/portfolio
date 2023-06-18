import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Alex Velze</h1>
            <h3>Front End Developer</h3>
            <ul>
              <li>Web Developer</li>
              <li>Programmer</li>
              <li>Software Engineer</li>
            </ul>
            <div className="action">
              {/* <Button
                link="https://github.com/AlexVelze/portfolio/raw/master/src/data/file/MyResume.pdf"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              /> */}
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }

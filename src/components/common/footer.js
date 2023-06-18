import React from "react"
import { FaAngleUp, FaStar, FaCodeBranch } from "react-icons/fa"

import { Container } from "./container"
import { languages } from "../../data"

import "./footer.css"

export const Footer = () => {
  const handleScroll = e => {
    e.preventDefault()
    window.scroll({ top: 0, left: 0, behavior: "smooth" })
  }
  return (
    <footer className="footer-area">
      <Container padding="50px 25px">
        <div className="footer">
          <div className="language"></div>
          <div className="copyright">
            <ul className="github">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/AlexVelze/portfolio"
                >
                  <p>
                    <FaStar /> Star
                  </p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/AlexVelze/portfolio"
                >
                  <p>
                    <FaCodeBranch /> Fork
                  </p>
                </a>
              </li>
            </ul>
            <p>
              By Me{" "}
              <span onClick={handleScroll}>
                <FaAngleUp />
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

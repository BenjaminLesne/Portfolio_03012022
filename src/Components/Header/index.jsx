import LanguageSelector from "../LanguageSelector"
import { v4 as uuidv4 } from "uuid"
import { enableScroll, disableScroll } from "./functions"
import { useState } from "react"

import "./header.css"

const Header = ({ language, textContent, setLanguage }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function handleOpenNavigation(e) {
    console.log("e", e)
    disableScroll()
    setIsNavOpen(true)
  }

  function handleCloseNavigation() {
    enableScroll()
    setIsNavOpen(false)
  }
  return (
    <header className="Header" data-testid="header">
      <LanguageSelector setLanguage={setLanguage} />
      <button
        className="Navigation-open-button"
        onClick={() => handleOpenNavigation()}
      >
        <span className="Navigation-open-button__slice"></span>
      </button>

      <nav className="Header__navigation-menu" data-open={isNavOpen.toString()}>
        <button
          className="Header__navigation-close-button"
          onClick={() => handleCloseNavigation()}
        ></button>
        <ul className="Header__list-of-anchors">
          {textContent.map((item, index) => {
            return (
              <li key={uuidv4()}>
                <a
                  className="Header__anchor"
                  href={item.href[language] ? item.href[language] : item.href}
                  onClick={() => handleCloseNavigation()}
                >
                  {item.linkText[language]
                    ? item.linkText[language]
                    : item.linkText}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header

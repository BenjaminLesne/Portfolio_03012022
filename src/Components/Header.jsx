import LanguageSelector from "./LanguageSelector";
import { v4 as uuidv4 } from "uuid";

import "../styles/header.css";

const Header = ({ language, textContent, setLanguage }) => {
  return (
    <header className="Header">
      <LanguageSelector setLanguage={setLanguage} />
      <nav className="Header__navigation-menu">
        <ul className="Header__list-of-anchors">
          {textContent.headerNavItems[language].map((item, index) => (
            <li key={uuidv4()}>
              <a
                className="Header__anchor"
                href={
                  "#" +
                  textContent.headerNavItems["EN"][index].replace(" ", "-")
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

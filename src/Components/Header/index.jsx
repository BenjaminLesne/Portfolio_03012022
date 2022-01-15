import LanguageSelector from "../LanguageSelector";
import { v4 as uuidv4 } from "uuid";

import "./header.css";

const Header = ({ language, textContent, setLanguage }) => {
  return (
    <header className="Header" data-testid="header">
      <LanguageSelector setLanguage={setLanguage} />
      <nav className="Header__navigation-menu">
        <ul className="Header__list-of-anchors">
          {textContent[language].map((item, index) => (
            <li key={uuidv4()}>
              <a
                className="Header__anchor"
                href={"#" + textContent["EN"][index].replace(" ", "-")}
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

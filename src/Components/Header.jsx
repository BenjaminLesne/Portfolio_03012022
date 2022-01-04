import LanguageSelector from "./LanguageSelector";

import "../styles/header.css";

const Header = ({ language, textContent, setLanguage }) => {
  return (
    <header>
      <LanguageSelector setLanguage={setLanguage} />
      <nav>
        <ul>
          {textContent[language].headerNavItems.map((item) => (
            <li>
              <a className="Header__anchor" href={"#" + item.replace(" ", "-")}>
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

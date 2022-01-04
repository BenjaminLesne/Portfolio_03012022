import UkFlag from "../assets/UkFlag.svg";
import FrenchFlag from "../assets/FrenchFlag.svg";

import "../styles/LanguageSelector.css";

const LanguageSelector = ({ language, textContent, setLanguage }) => {
  const handleLanguageChange = (e) => {
    const languageSelector = document.querySelector(".LanguageSelector");

    if (languageSelector.classList.contains("active")) {
      languageSelector.classList.remove("active");
      setLanguage("EN");
    } else {
      languageSelector.classList.add("active");
      setLanguage("FR");
    }
  };
  return (
    <div data-testid="LanguageSelector" className="LanguageSelector">
      <img src={UkFlag} alt="UK flag / Drapeau anglais" />
      <div className="LanguageSelector__button" onClick={handleLanguageChange}>
        <div id="inner-circle"></div>
      </div>
      <img src={FrenchFlag} alt="French flag / Drapeau français" />
    </div>
  );
};

export default LanguageSelector;

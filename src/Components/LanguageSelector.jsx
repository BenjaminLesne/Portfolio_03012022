import UkFlag from "../assets/UkFlag.svg";
import FrenchFlag from "../assets/FrenchFlag.svg";

import "../styles/LanguageSelector.css";

const LanguageSelector = ({ language, textContent, setLanguage }) => {
  function handleLanguageChange(language) {
    const languageSelectorButton = document.querySelector(
      ".LanguageSelector__button"
    );

    switch (language) {
      case "english":
        if (languageSelectorButton.classList.contains("active")) {
          languageSelectorButton.classList.remove("active");
          setLanguage("EN");
        }
        break;

      case "french":
        if (!languageSelectorButton.classList.contains("active")) {
          languageSelectorButton.classList.add("active");
          setLanguage("FR");
        }
        break;

      default:
        if (languageSelectorButton.classList.contains("active")) {
          languageSelectorButton.classList.remove("active");
          setLanguage("EN");
        } else {
          languageSelectorButton.classList.add("active");
          setLanguage("FR");
        }
        break;
    }
  }

  return (
    <div className="LanguageSelector">
      <img
        className="LanguageSelector__flags"
        src={UkFlag}
        alt="UK flag / Drapeau anglais"
        onClick={() => handleLanguageChange("english")}
        data-testid="LanguageSelectorButton--english"
      />
      <div
        data-testid="LanguageSelectorButton"
        className="LanguageSelector__button"
        onClick={handleLanguageChange}
      >
        <div id="inner-circle" className="LanguageSelector__inner-circle"></div>
      </div>
      <img
        className="LanguageSelector__flags"
        src={FrenchFlag}
        alt="French flag / Drapeau français"
        onClick={() => handleLanguageChange("french")}
        data-testid="LanguageSelectorButton--french"
      />
    </div>
  );
};

export default LanguageSelector;

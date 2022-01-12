import UkFlag from "../assets/logos/languages/UkFlag.svg";
import FrenchFlag from "../assets/logos/languages/FrenchFlag.svg";

import "../styles/LanguageSelector.css";

const LanguageSelector = ({ language, textContent, setLanguage }) => {
  function handleLanguageChange(language) {
    const languageSelectorButton = document.querySelector(
      ".LanguageSelector__button"
    );

    switch (language) {
      case "french":
        if (languageSelectorButton.classList.contains("active")) {
          languageSelectorButton.classList.remove("active");
          setLanguage("FR");
        }
        break;

      case "english":
        if (!languageSelectorButton.classList.contains("active")) {
          languageSelectorButton.classList.add("active");
          setLanguage("EN");
        }
        break;

      default:
        if (languageSelectorButton.classList.contains("active")) {
          languageSelectorButton.classList.remove("active");
          setLanguage("FR");
        } else {
          languageSelectorButton.classList.add("active");
          setLanguage("EN");
        }
        break;
    }
  }

  return (
    <div className="LanguageSelector">
      <img
        className="LanguageSelector__flags"
        src={FrenchFlag}
        alt="French flag / Drapeau français"
        onClick={() => handleLanguageChange("french")}
        data-testid="LanguageSelectorButton--french"
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
        src={UkFlag}
        alt="UK flag / Drapeau anglais"
        onClick={() => handleLanguageChange("english")}
        data-testid="LanguageSelectorButton--english"
      />
    </div>
  );
};

export default LanguageSelector;

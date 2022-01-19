import "./Footer.css";

import UpArrow from "../../assets/logos/others/up-arrow.jsx";
import EmailButton from "../EmailButton";
// import  UpArrow from"../../assets/logos/backToTop/double-up-arrows.svg"

const Footer = ({ textContent, language }) => {
  function goBackToTop() {
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer className="Footer">
      <address id="contact" className="Footer__contact">
        <EmailButton
          languageSelected={language}
          data={textContent.contact}
          hreflang={language.toLowerCase()}
        />
        <span>benjamin.lesne@outlook.fr</span>
      </address>
      <button className="Footer__back-to-top" onClick={() => goBackToTop()}>
        <UpArrow className="Footer__up-arrow" />
        <span>{textContent.backToTop[language]}</span>
      </button>

      <small className="Footer__copyrights">
        ©{textContent.copyrights.yearAndAuthor}
        <span className="Footer__all-rights-reserved">
          {" " + textContent.copyrights.allRightsReserved[language]}
        </span>
      </small>
    </footer>
  );
};
export default Footer;

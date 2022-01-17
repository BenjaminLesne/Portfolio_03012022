import "./Footer.css";

import UpArrow from "../../assets/logos/backToTop/up-arrow.jsx";
// import  UpArrow from"../../assets/logos/backToTop/double-up-arrows.svg"

const Footer = ({ textContent, language }) => {
  function goBackToTop() {
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer className="Footer">
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

import "./Footer.css";

import UpArrow from "../../assets/logos/others/up-arrow.jsx";
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

      <ul id="contact">
        <li>benjamin.lesne@outlook.fr</li>
      </ul>
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

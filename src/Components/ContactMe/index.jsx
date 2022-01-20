import "./index.css";
import EmailButton from "../EmailButton";
import PhoneIcon from "../../assets/logos/others/PhoneIcon";

const ContactMe = ({ textContent, language }) => {
  return (
    <section className="ContactMe" id="contact-me">
      <div className="ContactMe__content">
        <h2 className="ContactMe__heading section-heading">
          {textContent.heading[language]}
        </h2>
        <address className="ContactMe__information">
          <ul className="ContactMe__items">
            <li className="ContactMe__item">
              <EmailButton
                languageSelected={language}
                data={textContent.emailButton}
                hreflang={language.toLowerCase()}
                className="ContactMe"
              />
              <span className="ContactMe__value">{textContent.email}</span>
            </li>
            <li className="ContactMe__item">
              <PhoneIcon className="ContactMe__icon" />
              <a
                href={textContent.linkToCV[language]}
                className="ContactMe__value"
              >
                {textContent.number[language]}
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
};

export default ContactMe;

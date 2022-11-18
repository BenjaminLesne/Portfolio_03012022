import "./index.css";
import EmailButton from "../EmailButton";
import PhoneIcon from "../../assets/logos/others/PhoneIcon";
import GithubIcon from "../../assets/logos/social-media/GithubIcon";
import LinkedInIcon from "../../assets/logos/social-media/LinkedInIcon";

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
              <a
                href={textContent.linkToCV[language]}
                className="ContactMe__value"
              >
                <PhoneIcon className="ContactMe__icon" />

                {textContent.number[language]}
              </a>
            </li>
            <li className="ContactMe__item">
              <a href={textContent.github.link} className="ContactMe__value">
                <GithubIcon className="ContactMe__icon" />

                {textContent.github.message[language]}
              </a>
            </li>
            <li className="ContactMe__item">
              <a
                href={textContent.linkedIn.link[language]}
                className="ContactMe__value"
              >
                <LinkedInIcon className="ContactMe__icon" />

                {textContent.linkedIn.message[language]}
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
};

export default ContactMe;

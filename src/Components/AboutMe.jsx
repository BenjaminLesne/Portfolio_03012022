import "../styles/AboutMe.css";

import picture250W from "../assets/pictures/me-250w.png";
import picture500W from "../assets/pictures/me-500w.png";
import picture700W from "../assets/pictures/me-700w.png";
import defaultPicture from "../assets/pictures/me-900w.png";

const AboutMe = ({ language, textContent }) => {
  function uppercaseFirstLetterAfterDot(string) {
    const newString = string.replace(
      /(^|\. *)([a-z])/gi,
      function (match, separator, char) {
        return separator + char.toUpperCase();
      }
    );

    return newString;
  }

  function convertLinkInStringToHTML(string) {
    // const regexGetStringInsideParentheses = /\(([^)]+)\)/;
    // const regexGetStringInsideBrackets = /\[(.*?)\]/;

    const newString = string.replace(
      /\[(.*?)\]\(([^)]+)\)/g,
      function (match, linkText, url) {
        return `<a href=${url}>${linkText}</a>`;
      }
    );

    return newString;
  }

  function formatString(string) {
    const stringStep1 = uppercaseFirstLetterAfterDot(string);
    const newString = convertLinkInStringToHTML(stringStep1);

    return newString;
  }

  return (
    <section className="AboutMe defaultSection">
      <div className="AboutMe__text-wrapper">
        <h2 className="AboutMe__heading">
          {textContent[language].aboutMe.heading}
        </h2>

        <p className="AboutMe__story">
          <span
            dangerouslySetInnerHTML={{
              __html: formatString(textContent[language].aboutMe.story),
            }}
          ></span>
          <br />
          <br />
          <i
            className="AboutMe__callToAction"
            dangerouslySetInnerHTML={{
              __html: convertLinkInStringToHTML(
                textContent[language].aboutMe.callToAction
              ),
            }}
          ></i>
        </p>
      </div>
      <div className="AboutMe__image-wrapper">
        <img
          className="AboutMe__picture"
          srcSet={`${picture250W} 250w, .${picture500W} 500w, ${picture700W} 700w,${defaultPicture} 900w,`}
          sizes="(max-width: 250px) 250px, (max-width: 500px) 500px,(max-width: 700px) 700px,
            900px"
          src={defaultPicture}
          alt="EN:website Author Benjamin Lesne / FR:créateur du site Benjamin Lesne"
        />
      </div>
    </section>
  );
};

export default AboutMe;

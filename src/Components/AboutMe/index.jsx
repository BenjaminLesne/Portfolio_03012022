import "./AboutMe.css";

import picture250W from "../../assets/pictures/me-250w.png";
import picture500W from "../../assets/pictures/me-500w.png";
import picture700W from "../../assets/pictures/me-700w.png";
import defaultPicture from "../../assets/pictures/me-900w.png";

import convertLinkInStringToHTML from "../../utils/functions/convertLinkInStringToHTML";
import uppercaseFirstLetterAfterDot from "../../utils/functions/uppercaseFirstLetterAfterDot";

const AboutMe = ({ language, textContent }) => {
  function formatString(string) {
    const stringStep1 = uppercaseFirstLetterAfterDot(string);
    const newString = convertLinkInStringToHTML(stringStep1);

    return newString;
  }

  return (
    <section className="AboutMe">
      <div className="AboutMe__text-wrapper">
        <h2 className="AboutMe__heading section-heading">
          {textContent[language].heading}
        </h2>

        <p className="AboutMe__story">
          <span
            dangerouslySetInnerHTML={{
              __html: formatString(textContent[language].story),
            }}
          ></span>
        </p>
        <i
          className="AboutMe__callToAction"
          dangerouslySetInnerHTML={{
            __html: convertLinkInStringToHTML(
              textContent[language].callToAction
            ),
          }}
        ></i>
      </div>
      <img
        className="AboutMe__picture"
        srcSet={`${picture250W} 250w, ${picture500W} 500w, ${picture700W} 700w,${defaultPicture} 900w,`}
        sizes="(max-width: 250px) 250px, (max-width: 500px) 500px,(max-width: 700px) 700px,
            900px"
        src={defaultPicture}
        alt={
          language === "EN"
            ? "website Author Benjamin Lesne"
            : "créateur du site Benjamin Lesne"
        }
      />
    </section>
  );
};

export default AboutMe;

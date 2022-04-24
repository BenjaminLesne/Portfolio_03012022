import "./AboutMe.css";
import picture500W from "../../assets/pictures/me-500w.png";
import profilePicture273W from "../../assets/pictures/me-profile-picture.png";


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
        srcSet={`${profilePicture273W} 273w, ${picture500W} 500w`}
        sizes="(max-width: 830px) 273px, 500px"
        src={picture500W}
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

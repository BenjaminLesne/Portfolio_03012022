import "../styles/AboutMe.css";

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

  return (
    <section className="AboutMe defaultSection">
      <h1 className="AboutMe__heading">
        {textContent[language].aboutMe.heading}
      </h1>
      <p className="AboutMe__story">
        {uppercaseFirstLetterAfterDot(textContent[language].aboutMe.story)}
        <br />
        <br />
        <i className="AboutMe__callToAction">
          {textContent[language].aboutMe.callToAction}
        </i>
      </p>
      <img
        srcset="me-250w.png 250w, me-500w.png 500w, me-700w.png 700w, me-900w.png 900w,"
        sizes="(max-width: 250px) 250px, (max-width: 500px) 500px,(max-width: 700px) 700px,
            900px"
        src="../assets/me-900w.png"
        alt="EN:website Author Benjamin Lesne / FR:créateur du site Benjamin Lesne"
      />
    </section>
  );
};

export default AboutMe;

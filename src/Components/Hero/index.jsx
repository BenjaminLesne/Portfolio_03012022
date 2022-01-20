import "./Hero.css";

const Hero = ({ language, textContent }) => {
  return (
    <div className="Hero defaultSection">
      <p className="Hero__text-wrapper">
        <span className="Hero__text Hero__text--big">
          {textContent[language].secondTextPart}
        </span>
        <span
          className="Hero__text Hero__text--medium"
          lang={language.toLowerCase()}
        >
          {textContent[language].thirdTextPart}
        </span>
      </p>
    </div>
  );
};

export default Hero;

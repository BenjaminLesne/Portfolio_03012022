import "../styles/Hero.css";

const Hero = ({ language, textContent }) => {
  return (
    <div className="Hero defaultSection">
      <p className="Hero__text-wrapper">
        <span className="Hero__text Hero__text--small">
          {textContent.hero[language].firstTextPart}
        </span>
        <span className="Hero__text Hero__text--big">
          {textContent.hero[language].secondTextPart}
        </span>
        <span className="Hero__text Hero__text--medium">
          {textContent.hero[language].thirdTextPart}
        </span>
      </p>
    </div>
  );
};

export default Hero;

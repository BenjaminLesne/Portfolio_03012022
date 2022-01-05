import "../styles/Hero.css";

const Hero = ({ language, textContent }) => {
  return (
    <div className="Hero">
      <p className="Hero__text-wrapper">
        <span className="Hero__text Hero__text--small">
          {textContent[language].hero.firstTextPart}
        </span>
        <span className="Hero__text Hero__text--big">
          {textContent[language].hero.secondTextPart}
        </span>
        <span className="Hero__text Hero__text--medium">
          {textContent[language].hero.thirdTextPart}
        </span>
      </p>
    </div>
  );
};

export default Hero;

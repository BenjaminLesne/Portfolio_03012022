import "./Project.css";
import test from "../../assets/pictures/me-250w.png";

const Project = ({
  name,
  description,
  sourceCodeUrl,
  websiteUrl,
  image = test,
  alt,
  colorMask,
  language,
}) => {
  return (
    <article className="Project">
      <figure className="Project__content-wrapper">
        <img className="Project__image" src={image} alt={alt} />
        <div
          className="Project__overlay"
          style={{ backgroundColor: colorMask }}
        ></div>
        <figcaption className="Project__information">
          <h3 className="Project__name">{name}</h3>
          <p className="Project__description">{description}</p>
          <div className="Project__links">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="Project__link"
            >
              {language === "EN" ? "website" : "site web"}
            </a>
            <a
              href={sourceCodeUrl}
              target="_blank"
              rel="noreferrer"
              className="Project__link"
            >
              code
            </a>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default Project;

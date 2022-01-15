import "./Project.css";

import Heart from "../../assets/logos/heart";

const Project = ({
  name,
  description,
  favorite,
  sourceCodeUrl,
  websiteUrl,
  language,
}) => {
  return (
    <article className="Project">
      {favorite ? (
        <div className="Project__icon-favorite-wrapper">
          <Heart className="Project__icon-favorite" />
        </div>
      ) : null}
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
    </article>
  );
};

export default Project;

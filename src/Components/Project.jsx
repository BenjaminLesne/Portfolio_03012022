import "../styles/Project.css";

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
      {favorite ? <div className="Project__icon-favorite">FAVORITE</div> : null}
      <h3 className="Project__name">{name}</h3>
      <p className="Project__description">{description}</p>
      <a href={sourceCodeUrl} className="Project__githubLink">
        {language === "EN" ? "source code" : "code source"}
      </a>
      <a href={websiteUrl} className="Project__websiteLink">
        {language === "EN" ? "website" : "site web"}
      </a>
    </article>
  );
};

export default Project;

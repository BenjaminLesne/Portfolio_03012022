import { v4 as uuidv4 } from "uuid";
import EmailIcon from "../assets/logos/social-media/AtIcon";
import GithubIcon from "../assets/logos/social-media/GithubIcon";
import LinkedInIcon from "../assets/logos/social-media/LinkedInIcon";

import "../styles/SocialMedia.css";

const SocialMedia = ({ language }) => {
  const data = [
    {
      href: "mailto:benjamin.lesne@outlook.fr",
      icon: <EmailIcon className="SocialMedia__icon" color="#25364a" />,
      alt: "EN:at icon / FR:icone d'un darobase",
    },
    {
      href: "https://github.com/BenjaminLesne",
      icon: <GithubIcon className="SocialMedia__icon" color="#25364a" />,
      alt: "EN:Github Icon / FR:icone de Github",
    },
    {
      href: {
        EN: "https://www.linkedin.com/in/benjamin-lesne/?locale=en_US",
        FR: "https://www.linkedin.com/in/benjamin-lesne/",
      },
      icon: <LinkedInIcon className="SocialMedia__icon" color="#25364a" />,
      alt: "EN:LinkedIn icon / FR:icone Linkedin",
    },
  ];

  return (
    <aside className="SocialMedia" data-testid="SocialMedia">
      <nav className="SocialMedia__links-wrapper">
        {data.map((linkData) => {
          const hrefValue = linkData.href[language]
            ? linkData.href[language]
            : linkData.href;

          return (
            <a className="SocialMedia__link" href={hrefValue} key={uuidv4()}>
              {linkData.icon}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default SocialMedia;

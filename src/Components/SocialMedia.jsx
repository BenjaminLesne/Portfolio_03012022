import { v4 as uuidv4 } from "uuid";
import EmailIcon from "../assets/logos/social-media/AtIcon";
import GithubIcon from "../assets/logos/social-media/GithubIcon";
import LinkedInIcon from "../assets/logos/social-media/LinkedInIcon";

import "../styles/SocialMedia.css";

const SocialMedia = () => {
  const data = [
    {
      href: "mailto:benjamin.lesne@outlook.fr",
      icon: <EmailIcon className="SocialMedia__icon" />,
      alt: "EN:at icon / FR:icone d'un darobase",
    },
    {
      href: "mailto:benjamin.lesne@outlook.fr",
      icon: <GithubIcon className="SocialMedia__icon" />,
      alt: "EN:Github Icon / FR:icone de Github",
    },
    {
      href: "mailto:benjamin.lesne@outlook.fr",
      icon: <LinkedInIcon className="SocialMedia__icon" />,
      alt: "EN:LinkedIn icon / FR:icone Linkedin",
    },
  ];

  return (
    <aside className="SocialMedia" data-testid="SocialMedia">
      <nav className="SocialMedia__links-wrapper">
        {data.map((linkData) => (
          <a className="SocialMedia__link" href={linkData.href} key={uuidv4()}>
            {linkData.icon}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default SocialMedia;

import { v4 as uuidv4 } from "uuid";
import EmailIcon from "../../assets/logos/social-media/AtIcon";
import GithubIcon from "../../assets/logos/social-media/GithubIcon";
import LinkedInIcon from "../../assets/logos/social-media/LinkedInIcon";

import "./SocialMedia.css";

import { useState } from "react";

const SocialMedia = ({ language }) => {
  const data = [
    {
      type: "email",
      email: "benjamin.lesne@outlook.fr",
      href: "#",
      icon: <EmailIcon className="SocialMedia__icon" color="#25364a" />,
      alt: "EN:at icon / FR:icone d'un darobase",
    },
    {
      type: "website",

      href: "https://github.com/BenjaminLesne",
      icon: <GithubIcon className="SocialMedia__icon" color="#25364a" />,
      alt: "EN:Github Icon / FR:icone de Github",
    },
    {
      type: "website",

      href: {
        EN: "https://www.linkedin.com/in/benjamin-lesne/?locale=en_US",
        FR: "https://www.linkedin.com/in/benjamin-lesne/",
      },
      icon: <LinkedInIcon className="SocialMedia__icon" color="#25364a" />,
      alt: "EN:LinkedIn icon / FR:icone Linkedin",
    },
  ];

  const [visibility, setVisibility] = useState("hidden");

  async function handleCopyToClipBoard(string) {
    //add to clipboard
    navigator.clipboard.writeText(string);

    //handle success icon animation
    setVisibility("hidden");
    // setVisibility("visible");
    // const emailBeforeElement = document.querySelector(
    //   ".SocialMedia__link--email::before"
    // );
    // console.log(emailBeforeElement);
    // emailBeforeElement.visibility = "hidden"; //make animation resets on click
    // emailBeforeElement.visibility = "visible";

    // setTimeout(() => {
    //   //2000 because the animation duration is 2s. Check css of ::before targeted above if you need to check the value.
    //   setVisibility("hidden");
    // }, 2000);
  }

  return (
    <aside className="SocialMedia" data-testid="SocialMedia">
      <nav className="SocialMedia__links-wrapper">
        {data.map((linkData) => {
          const hrefValue = linkData.href[language]
            ? linkData.href[language]
            : linkData.href;

          const customProps =
            linkData.type === "email"
              ? {
                  onClick: () => handleCopyToClipBoard(linkData.email),
                  "data-info":
                    language === "EN" ? "click to copy" : "cliquez pour copier",
                  "data-before-visibility": visibility,
                }
              : "";

          return (
            <a
              className={`SocialMedia__link ${
                linkData.type === "email" ? "SocialMedia__link--email" : ""
              }`}
              href={hrefValue}
              key={uuidv4()}
              {...customProps}
            >
              {linkData.icon}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default SocialMedia;

//technologies related logos
import reactLogo from "../assets/logos/skills/React.svg";
import javaScriptLogo from "../assets/logos/skills/JS.svg";
import reduxLogo from "../assets/logos/skills/redux.svg";
import jestLogo from "../assets/logos/skills/Jest.svg";
import gitLogo from "../assets/logos/skills/Git.svg";
import sassLogo from "../assets/logos/skills/Sass.svg";
import css3Logo from "../assets/logos/skills/CSS3.svg";
import html5Logo from "../assets/logos/skills/HTML5.svg";
import JSdocLogo from "../assets/logos/skills/JSdoc.svg";
import jiraLogo from "../assets/logos/skills/Jira.svg";
import svelteLogo from "../assets/logos/skills/Svelte.svg";
import linuxLogo from "../assets/logos/skills/Linux.svg";
import reactNativeLogo from "../assets/logos/skills/ReactNative.svg";
import agileLogo from "../assets/logos/skills/Agile.svg";

import typeScritLogo from "../assets/logos/skills/TypeScript.svg";

//languages spoken related
import UkFlag from "../assets/logos/languages/UkFlag.svg";
import FrenchFlag from "../assets/logos/languages/FrenchFlag.svg";
import SpanishFlag from "../assets/logos/languages/SpanishFlag.svg";

//social medias logos
import EmailIcon from "../assets/logos/social-media/AtIcon";
import GithubIcon from "../assets/logos/social-media/GithubIcon";
import LinkedInIcon from "../assets/logos/social-media/LinkedInIcon";

//contact logo
import PhoneIcon from "../assets/logos/others/PhoneIcon";

//projects screenshots
import LesPetitsPlats from "../assets/website-screenshots/LesPetitsPlats.png";
import HRnet from "../assets/website-screenshots/HRnet.png";
import Kasa from "../assets/website-screenshots/Kasa.png";
import ohmyfood from "../assets/website-screenshots/ohmyfood.png";

//my CVs
import frenchCV from "../assets/CV/CV_Benjamin-Lesne_FR.pdf";
import englishCV from "../assets/CV/CV_Benjamin-Lesne_EN.pdf";

const webPageTextContent = {
  socialMedia: [
    {
      type: "email",
      email: "benjamin.lesne@outlook.fr",
      name: "my-email",
      icon: <EmailIcon className="SocialMedia__icon" color="#25364a" />,
      dataInfo: {
        EN: "click to copy my email",
        FR: "cliquer copie mon email",
      },
    },
    {
      type: "website",

      href: "https://github.com/BenjaminLesne",
      icon: <GithubIcon className="SocialMedia__icon" color="#25364a" />,
    },
    {
      type: "website",

      href: {
        EN: "https://www.linkedin.com/in/benjamin-lesne/?locale=en_US",
        FR: "https://www.linkedin.com/in/benjamin-lesne/",
      },
      icon: <LinkedInIcon className="SocialMedia__icon" color="#25364a" />,
    },
  ],
  headerNavItems: [
    {
      type: "anchor",
      linkText: { EN: "skills", FR: "compétences" },
      href: "#skills",
    },
    {
      type: "anchor",
      linkText: { EN: "my projects", FR: "mes projets" },
      href: "#my-projects",
    },
    {
      type: "anchor",
      linkText: { EN: "contact me", FR: "me contacter" },
      href: "#contact-me",
    },
    { type: "pdf", linkText: "cv", href: { EN: englishCV, FR: frenchCV } },
  ],

  hero: {
    EN: {
      firstTextPart: "hi, my name is",
      secondTextPart: "benjamin lesné",
      thirdTextPart: "front-end developer",
    },
    FR: {
      firstTextPart: "bonjour, je suis",
      secondTextPart: "benjamin lesné",
      thirdTextPart: "développeur front-end",
    },
  },
  aboutMe: {
    EN: {
      heading: "my story",
      story:
        "After high school, I tried different fields and it took me a while to figure out which career would best fit me... Until I discovered my passion for coding! Now, after my first professional experience, I am looking forward for more adventures!",
      callToAction: "[check out my projects below](#my-projects)!",
    },

    FR: {
      heading: "qui suis-je",
      story:
        "Après le lycée, j'ai essayé différents domaines et il m'a fallu du temps pour trouver la carrière qui me correspondait le mieux... Jusqu'à ce que je découvre ma passion pour le code ! Maintenant, après ma première expérience professionnelle, je suis impatient de vivre d'autres aventures !",
      callToAction: "[découvrez mes projets ici](#my-projects) !",
    },
  },

  skills: {
    heading: {
      EN: "skills",
      FR: "compétences",
    },
    subSections: [
      {
        heading: {
          EN: "using now",
          FR: "j'utilise",
        },
        content: [
          {
            logo: reactLogo,
            name: "react",
          },
          {
            logo: reactNativeLogo,
            name: "react native",
          },
          {
            logo: reduxLogo,
            name: "redux",
          },
          {
            logo: jestLogo,
            name: "jest",
          },
          {
            logo: jiraLogo,
            name: "Jira",
          },
          {
            logo: agileLogo,
            name: "Agile",
          },
          {
            logo: linuxLogo,
            name: "Linux",
          },
          {
            logo: typeScritLogo,
            name: "typescript",
          },
          {
            logo: gitLogo,
            name: "git",
          },
          {
            logo: javaScriptLogo,
            name: "javascript",
          },
          {
            logo: css3Logo,
            name: "css3",
          },
          {
            logo: html5Logo,
            name: "html5",
          },
        ],
      },
      {
        heading: {
          EN: "learning",
          FR: "j'apprends",
        },
        content: [
          {
            logo: svelteLogo,
            name: "Svelte",
          },
        ],
      },
      {
        heading: {
          EN: "what I speak",
          FR: "je parle",
        },
        content: [
          {
            logo: FrenchFlag,
            name: {
              EN: "french native",
              FR: "français natif",
            },
          },
          {
            logo: UkFlag,
            name: {
              EN: "english fluent",
              FR: "anglais C1",
            },
          },
          {
            logo: SpanishFlag,
            name: {
              EN: "spanish A2",
              FR: "espagnol A2",
            },
          },
        ],
      },
    ],
    skillsNotDisplayed: [
      {
        logo: JSdocLogo,
        name: "jsdoc",
      },
      {
        logo: sassLogo,
        name: "sass",
      },
    ],
  },
  myProjects: {
    heading: { EN: "my projects", FR: "mes projets" },
    filters: [
      { EN: "all", FR: "tous" },
      "react",
      "javascript",
      "redux",
      "sass",
    ],
    projects: [
      {
        rate: 4,
        name: "HRnet",
        websiteUrl:
          "https://benjaminlesne.github.io/BenjaminLesne_14_07122021/",
        sourceCodeUrl:
          "https://github.com/BenjaminLesne/BenjaminLesne_14_07122021",
        description: {
          FR: "Refonte d'une application, gérant le registre des employés, en React (originellement en Jquery) - Projet OpenClassrooms.",
          EN: "Redesign of an application, managing the employee register, in React (originally in Jquery) - OpenClassrooms' Project.",
        },
        tags: ["react", "redux"],
        colorMask: "75, 131, 130",
        image: HRnet,
        alt: {
          EN: "HRnet website screenshot",
          FR: "HRnet capture d'écran du site web",
        },
      },
      {
        rate: 10,
        name: "ohmyfood",
        websiteUrl: "https://benjaminlesne.github.io/benjaminLesne_3_03102021/",
        sourceCodeUrl:
          "https://github.com/BenjaminLesne/benjaminLesne_3_03102021/",
        description: {
          FR: "Site mobile-first qui répertorie les menus de restaurants gastronomiques - Projet OpenClassrooms.",
          EN: "Mobile-first site that lists the menus of gourmet restaurants - OpenClassrooms' Project.",
        },
        tags: ["sass", "javascript"],
        colorMask: "157, 83, 83",
        image: ohmyfood,
        alt: {
          EN: "ohmyfood website screenshot",
          FR: "ohmyfood capture d'écran du site web",
        },
      },
      {
        rate: 5,
        name: "Kasa",
        websiteUrl:
          "https://benjaminlesne.github.io/BenjaminLesne_11_23112021/",
        sourceCodeUrl:
          "https://github.com/BenjaminLesne/BenjaminLesne_11_23112021",
        description: {
          FR: "Kasa est une application C2C pour la location d'appartements - Projet OpenClassrooms.",
          EN: "Kasa is a C2C application for renting apartments - OpenClassrooms' Project.",
        },
        tags: ["react"],
        colorMask: "187, 135, 96",
        image: Kasa,
        alt: {
          EN: "Kasa website screenshot",
          FR: "Kasa capture d'écran du site web",
        },
      },
      {
        rate: 3,
        name: "Les Petits Plats",
        websiteUrl: "https://benjaminlesne.github.io/BenjaminLesne_7_31102021/",
        sourceCodeUrl:
          "https://github.com/BenjaminLesne/BenjaminLesne_7_31102021",
        description: {
          FR: "Moteur de recherche de recettes basé sur les ingrédients et les ustensiles que vous avez sous la main - Projet OpenClassrooms.",
          EN: "Recipe search engine based on the ingredients and utensils you have on hand - OpenClassrooms' Project.",
        },
        tags: ["sass", "javascript"],
        colorMask: "50, 82, 136",
        image: LesPetitsPlats,
        alt: {
          EN: "Les Petits Plats website screenshot",
          FR: "Les Petits Plats capture d'écran du site web",
        },
      },
    ],
  },
  contactMe: {
    heading: { EN: "contact me", FR: "me contacter" },
    email: "benjamin.lesne@outlook.fr",
    emailButton: {
      name: "email",
      email: "benjamin.lesne@outlook.fr",
      icon: <EmailIcon className="ContactMe__icon" color="#25364a" />,
    },
    phoneButton: <PhoneIcon className="ContactMe__icon" color="#25364a" />,
    number: {
      EN: "get my number in my CV here",
      FR: "obtenez mon numéro dans mon CV ici ",
    },
    linkToCV: { EN: englishCV, FR: frenchCV },
  },
  footer: {
    backToTop: { EN: "back to top", FR: "retour en haut de page" },
    contact: {
      type: "email",
      email: "benjamin.lesne@outlook.fr",
      name: "my-email",
      icon: <EmailIcon className="SocialMedia__icon" color="#25364a" />,
      alt: "EN:at icon / FR:icone d'un darobase",
    },
    copyrights: {
      yearAndAuthor: "2022 Benjamin Lesné",
      allRightsReserved: {
        EN: "all rights reserved",
        FR: "Tous droits réservés",
      },
    },
  },
};

export default webPageTextContent;

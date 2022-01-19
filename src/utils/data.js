//skills logos
//technologies related
import reactLogo from "../assets/logos/skills/React.svg";
import javaScriptLogo from "../assets/logos/skills/JS.svg";
import reduxLogo from "../assets/logos/skills/redux.svg";
import jestLogo from "../assets/logos/skills/Jest.svg";
import gitLogo from "../assets/logos/skills/Git.svg";
import sassLogo from "../assets/logos/skills/Sass.svg";
import css3Logo from "../assets/logos/skills/CSS3.svg";
import html5Logo from "../assets/logos/skills/HTML5.svg";
import JSdocLogo from "../assets/logos/skills/JSdoc.svg";

import typeScritLogo from "../assets/logos/skills/TypeScript.svg";

//languages spoken related
import UkFlag from "../assets/logos/languages/UkFlag.svg";
import FrenchFlag from "../assets/logos/languages/FrenchFlag.svg";
import SpanishFlag from "../assets/logos/languages/SpanishFlag.svg";

//social medias logos
import EmailIcon from "../assets/logos/social-media/AtIcon";
import GithubIcon from "../assets/logos/social-media/GithubIcon";
import LinkedInIcon from "../assets/logos/social-media/LinkedInIcon";

//projects screenshots
import LesPetitsPlats from "../assets/website-screenshots/LesPetitsPlats.png";
import HRnet from "../assets/website-screenshots/HRnet.png";
import Kasa from "../assets/website-screenshots/Kasa.png";
import ohmyfood from "../assets/website-screenshots/ohmyfood.png";

//my CV
import frenchCV from "../assets/CV/CV_Benjamin-Lesne_FR.pdf";
import englishCV from "../assets/CV/CV_Benjamin-Lesne_EN.pdf";

const webPageTextContent = {
  socialMedia: [
    {
      type: "email",
      email: "benjamin.lesne@outlook.fr",
      name: "my-email",
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
        "After high school, I tried different fields and it took me a while to figure out which career would best fit me. until I discovered my passion for coding. now, after the [OpenClassrooms Front-End course](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react), I am ready to kick off my career.",
      callToAction: "[check out my projects below](#my-projects)!",
    },

    FR: {
      heading: "qui suis-je",
      story:
        "Après le lycée, j'ai essayé différents domaines et il m'a fallu du temps pour trouver la carrière qui me correspondait le mieux. Jusqu'à ce que je découvre ma passion pour le code. Maintenant, après la [formation Front-End d'Openclassrooms](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react), je suis prêt à commencer ma carrière.",
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
            logo: javaScriptLogo,
            name: "javascript",
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
            logo: JSdocLogo,
            name: "jsdoc",
          },
          {
            logo: gitLogo,
            name: "git",
          },
          {
            logo: sassLogo,
            name: "sass",
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
            logo: typeScritLogo,
            name: "typescript",
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
              FR: "anglais C2",
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
        rate: 10,
        name: "HRnet",
        websiteUrl:
          "https://benjaminlesne.github.io/BenjaminLesne_14_07122021/",
        sourceCodeUrl:
          "https://github.com/BenjaminLesne/BenjaminLesne_14_07122021",
        description: {
          FR: "Refonte d'une application, gérant le registre des employés, en React (originellement en Jquery).",
          EN: "Redesign of an application, managing the employee register, in React (originally in Jquery).",
        },
        tags: ["react", "redux"],
        // colorMask: "#4b8382",
        colorMask: "75, 131, 130",
        image: HRnet,
        alt: {
          EN: "HRnet website screenshot",
          FR: "HRnet capture d'écran du site web",
        },
      },
      {
        rate: 5,
        name: "ohmyfood",
        websiteUrl: "https://benjaminlesne.github.io/benjaminLesne_3_03102021/",
        sourceCodeUrl:
          "https://github.com/BenjaminLesne/benjaminLesne_3_03102021/",
        description: {
          FR: "Site mobile-first qui répertorie les menus de restaurants gastronomiques.",
          EN: "Mobile-first site that lists the menus of gourmet restaurants.",
        },
        tags: ["sass", "javascript"],
        // colorMask: "#b84e3d",
        colorMask: "184, 78, 61",
        image: ohmyfood,
        alt: {
          EN: "ohmyfood website screenshot",
          FR: "ohmyfood capture d'écran du site web",
        },
      },
      {
        rate: 4,
        name: "Kasa",
        websiteUrl:
          "https://benjaminlesne.github.io/BenjaminLesne_11_23112021/",
        sourceCodeUrl:
          "https://github.com/BenjaminLesne/BenjaminLesne_11_23112021",
        description: {
          FR: "Kasa est une application C2C pour la location d'appartements. ",
          EN: "Kasa is a C2C application for renting apartments. ",
        },
        tags: ["react"],
        // colorMask: "#F58840",
        colorMask: "245, 136, 64",
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
          FR: "Les Petits Plats est un moteur de recherche de recettes basé sur les ingrédients et les ustensiles que vous avez sous la main.",
          EN: "Les Petits Plats is a recipe search engine based on the ingredients and utensils you have on hand. ",
        },
        tags: ["sass", "javascript"],
        // colorMask: "#7952B3",
        colorMask: "121, 82, 179",
        image: LesPetitsPlats,
        alt: {
          EN: "Les Petits Plats website screenshot",
          FR: "Les Petits Plats capture d'écran du site web",
        },
      },
    ],
  },
  footer: {
    backToTop: { EN: "back to top", FR: "retour en haut de page" },
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

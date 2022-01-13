//technologies
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

//languages spoken
import UkFlag from "../assets/logos/languages/UkFlag.svg";
import FrenchFlag from "../assets/logos/languages/FrenchFlag.svg";
import SpanishFlag from "../assets/logos/languages/SpanishFlag.svg";

const webPageTextContent = {
  headerNavItems: {
    EN: ["about me", "skills", "my projects", "cv"],
    FR: ["qui suis-je", "compétences", "mes projets", "cv"],
  },
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
            logo: UkFlag,
            name: {
              EN: "english fluent",
              FR: "anglais parlé couramment",
            },
          },
          {
            logo: SpanishFlag,
            name: {
              EN: "spanish intermediate",
              FR: "espagnol intermédiaire",
            },
          },
          {
            logo: FrenchFlag,
            name: {
              EN: "french native",
              FR: "français natif",
            },
          },
        ],
      },
    ],
  },

  // FR: {
  //   headerNavItems: ["qui suis-je", "compétences", "mes projets", "cv"],
  //   hero: {
  //     firstTextPart: "bonjour, je suis",
  //     secondTextPart: "benjamin lesné",
  //     thirdTextPart: "développeur front-end",
  //   },
  //   aboutMe: {
  //     heading: "qui suis-je",
  //     story:
  //       "Après le lycée, j'ai essayé différents domaines et il m'a fallu du temps pour trouver la carrière qui me correspondait le mieux. Jusqu'à ce que je découvre ma passion pour le code. Maintenant, après la [formation Front-End d'Openclassrooms](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react), je suis prêt à commencer ma carrière.",
  //     callToAction: "[découvrez mes projets ici](#my-projects) !",
  //   },
  //   skills: {
  //     heading: "compétences",
  //     subSections: [
  //       {
  //         heading: "j'utilise",
  //         content: [
  //           {
  //             logo: reactLogo,
  //             name: "react",
  //           },
  //           {
  //             logo: javaScriptLogo,
  //             name: "javascript",
  //           },
  //           {
  //             logo: reduxLogo,
  //             name: "redux",
  //           },
  //           {
  //             logo: jestLogo,
  //             name: "jest",
  //           },
  //           {
  //             logo: gitLogo,
  //             name: "git",
  //           },
  //           {
  //             logo: sassLogo,
  //             name: "sass",
  //           },
  //           {
  //             logo: css3Logo,
  //             name: "css3",
  //           },
  //           {
  //             logo: html5Logo,
  //             name: "html5",
  //           },
  //         ],
  //       },
  //       {
  //         heading: "j'apprends",
  //         content: [
  //           {
  //             logo: reactLogo,
  //             name: "react",
  //           },
  //           {
  //             logo: reactLogo,
  //             name: "react",
  //           },
  //           {
  //             logo: reactLogo,
  //             name: "react",
  //           },
  //         ],
  //       },
  //       {
  //         heading: "je parle",
  //         content: [
  //           {
  //             logo: reactLogo,
  //             name: "react",
  //           },
  //           {
  //             logo: reactLogo,
  //             name: "react",
  //           },
  //           {
  //             logo: reactLogo,
  //             name: "react",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
};

// FR:["j'utilise", "j'apprends", "je parle"],
// EN:["using now", "learning", "what I speak"]

export default webPageTextContent;

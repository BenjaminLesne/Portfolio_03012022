import reactLogo from "../assets/reactLogo.png";

const webPageTextContent = {
  EN: {
    headerNavItems: ["about me", "skills", "my projects", "cv"],
    hero: {
      firstTextPart: "hi, my name is",
      secondTextPart: "benjamin lesné",
      thirdTextPart: "front-end developer",
    },
    aboutMe: {
      heading: "my story",
      story:
        "After high school, I tried different fields and it took me a while to figure out which career would best fit me. until I discovered my passion for coding. now, after the [OpenClassrooms Front-End course](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react), I am ready to kick off my career.",
      callToAction: "[check out my projects below](#my-projects)!",
    },
    skills: {
      heading: "skills",
      subSections: [
        {
          heading: "using now",
          content: [
            {
              logo: reactLogo,
              name: "react",
            },
          ],
        },
        {
          heading: "learning",
          content: [
            {
              logo: reactLogo,
              name: "react",
            },
          ],
        },
        {
          heading: "what I speak",
          content: [
            {
              logo: reactLogo,
              name: "react",
            },
          ],
        },
      ],
    },
  },
  FR: {
    headerNavItems: ["qui suis-je", "compétences", "mes projets", "cv"],
    hero: {
      firstTextPart: "bonjour, je suis",
      secondTextPart: "benjamin lesné",
      thirdTextPart: "développeur front-end",
    },
    aboutMe: {
      heading: "qui suis-je",
      story:
        "Après le lycée, j'ai essayé différents domaines et il m'a fallu du temps pour trouver la carrière qui me correspondait le mieux. Jusqu'à ce que je découvre ma passion pour le code. Maintenant, après la [formation Front-End d'Openclassrooms](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react), je suis prêt à commencer ma carrière.",
      callToAction: "[découvrez mes projets ici](#my-projects) !",
    },
    skills: {
      heading: "compétences",
      subSections: [
        {
          heading: "j'utilise",
          content: [
            {
              logo: reactLogo,
              name: "react",
            },
            {
              logo: reactLogo,
              name: "react",
            },
            {
              logo: reactLogo,
              name: "react",
            },
          ],
        },
        {
          heading: "j'apprends",
          content: [
            {
              logo: reactLogo,
              name: "react",
            },
            {
              logo: reactLogo,
              name: "react",
            },
            {
              logo: reactLogo,
              name: "react",
            },
          ],
        },
        {
          heading: "je parle",
          content: [
            {
              logo: reactLogo,
              name: "react",
            },
            {
              logo: reactLogo,
              name: "react",
            },
            {
              logo: reactLogo,
              name: "react",
            },
          ],
        },
      ],
    },
  },
};

// FR:["j'utilise", "j'apprends", "je parle"],
// EN:["using now", "learning", "what I speak"]

export default webPageTextContent;

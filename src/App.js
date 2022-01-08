import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SocialMedia from "./Components/SocialMedia";
import AboutMe from "./Components/AboutMe";

import { useState } from "react";
import "./App.css";

function App() {
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
          "After high school, I tried different fields and it took me a while to figure out which career would best fit me. until I discovered my passion for coding. now, after the OpenClassrooms Front-End course, I am ready to kick off my career.",
        callToAction: "check out my projects below!",
      },
    },
    FR: {
      headerNavItems: ["qui suis-je", "compétences", "mes projets", "cv"],
      hero: {
        firstTextPart: "bonjour, je suis",
        secondTextPart: "benjamin lesné",
        thirdTextPart: "développeur front-end",
        callToAction: "découvrez mes projets en-dessous !",
      },
      aboutMe: {
        heading: "qui suis-je",
        story:
          "Après le lycée, j'ai essayé différents domaines et il m'a fallu du temps pour trouver la carrière qui me correspondait le mieux. Jusqu'à ce que je découvre ma passion pour le code. Maintenant, après la formation Front-End d'Openclassrooms, je suis prêt à commencer ma carrière.",
      },
    },
  };

  const [language, setLanguage] = useState("EN");

  const customProps = {
    language: language,
    textContent: webPageTextContent,
  };

  return (
    <>
      <SocialMedia />
      <Header {...customProps} setLanguage={setLanguage} />
      <Hero {...customProps} />
      <AboutMe {...customProps} />
    </>
  );
}

export default App;

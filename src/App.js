import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SocialMedia from "./Components/SocialMedia";

import { useState } from "react";
import "./App.css";

function App() {
  const webPageTextContent = {
    EN: {
      headerNavItems: ["about me", "skills", "my projects", "cv"],
      hero: {
        firstTextPart: "hi, my name is",
        secondTextPart: "benjamin lesné",
        thirdTextPart: "frontend developer",
      },
    },
    FR: {
      headerNavItems: ["qui suis-je", "compétences", "mes projets", "cv"],
      hero: {
        firstTextPart: "bonjour, je suis",
        secondTextPart: "benjamin lesné",
        thirdTextPart: "développeur frontend",
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
    </>
  );
}

export default App;

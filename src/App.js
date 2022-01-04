import Header from "./Components/Header";
import Hero from "./Components/Hero";

import { useState } from "react";
import "./App.css";

function App() {
  const webPageTextContent = {
    EN: {
      headerNavItems: ["about me", "skills", "my projects", "resume"],
      hero: {
        smallText: "Hi, my name is",
        bigText: "Benjamin Lesné",
        mediumText: "Frontend developer",
      },
    },
    FR: {
      headerNavItems: ["qui suis-je", "compétences", "mes projets", "cv"],
      hero: {
        smallText: "bonjour, je suis",
        bigText: "Benjamin Lesné",
        mediumText: "Développeur frontend",
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
      <Header {...customProps} setLanguage={setLanguage} />
      <Hero {...customProps} />
    </>
  );
}

export default App;

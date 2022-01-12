import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SocialMedia from "./Components/SocialMedia";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";

import webPageTextContent from "./utils/data";

import { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("FR");

  const customProps = {
    language: language,
    textContent: webPageTextContent,
  };

  return (
    <>
      <SocialMedia />
      <Header {...customProps} setLanguage={setLanguage} />
      <main>
        <Hero {...customProps} />
        <AboutMe {...customProps} />
        <Skills {...customProps} />
      </main>
    </>
  );
}

export default App;

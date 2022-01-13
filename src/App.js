import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SocialMedia from "./Components/SocialMedia";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import MyProjectsSection from "./Components/MyProjectsSection";

import webPageTextContent from "./utils/data";

import { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("FR");

  return (
    <>
      <SocialMedia language={language} />
      <Header
        textContent={webPageTextContent.headerNavItems}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Hero textContent={webPageTextContent.hero} language={language} />
        <AboutMe
          textContent={webPageTextContent.aboutMeSection}
          language={language}
        />
        <Skills
          textContent={webPageTextContent.skillsSection}
          language={language}
        />
        <MyProjectsSection
          textContent={webPageTextContent.myProjectsSection}
          language={language}
        />
      </main>
    </>
  );
}

export default App;

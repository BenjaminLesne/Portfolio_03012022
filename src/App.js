import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SocialMedia from "./Components/SocialMedia";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import MyProjects from "./Components/MyProjects";
import Footer from "./Components/Footer";

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
        <AboutMe textContent={webPageTextContent.aboutMe} language={language} />
        <Skills textContent={webPageTextContent.skills} language={language} />
        <MyProjects
          textContent={webPageTextContent.myProjects}
          language={language}
        />
      </main>
      <Footer textContent={webPageTextContent.footer} language={language} />
    </>
  );
}

export default App;

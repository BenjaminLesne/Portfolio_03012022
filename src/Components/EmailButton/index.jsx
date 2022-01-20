import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";
import "./";

const EmailButton = ({ languageSelected, data, hreflang, className }) => {
  const [visibility, setVisibility] = useState("hidden");

  const dataInfoValue =
    languageSelected === "EN" ? "click to copy" : "cliquez pour copier";

  async function handleCopyToClipBoard(string) {
    //add to clipboard
    navigator.clipboard.writeText(string);

    //handle success icon animation
    setVisibility("hidden");
    setTimeout(() => {
      setVisibility("visible");
    }, 0);
  }

  return (
    <CSSTransition
      in={visibility === "visible"}
      classNames="success-copy"
      timeout={2000}
    >
      <button
        className={`${className}__link ${className}__link--email`}
        hrefLang={hreflang}
        onClick={() => handleCopyToClipBoard(data.email)}
        data-info={dataInfoValue}
        name={data.name}
      >
        {data.icon}
      </button>
    </CSSTransition>
  );
};

export default EmailButton;

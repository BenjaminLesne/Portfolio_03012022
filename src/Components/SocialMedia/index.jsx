import { v4 as uuidv4 } from "uuid";

import "./SocialMedia.css";
import EmailButton from "../EmailButton";
import AsideRegularLink from "../AsideRegularLink";
import React from "react";

const SocialMedia = ({ language, data }) => {
  return (
    <aside className="SocialMedia" data-testid="SocialMedia">
      <nav className="SocialMedia__links-wrapper">
        {data.map((linkData) => {
          const hreflangValue = language.toLowerCase();

          if (linkData.type === "email") {
            return (
              <React.Fragment key={uuidv4()}>
                <EmailButton
                  languageSelected={language}
                  data={linkData}
                  hreflang={hreflangValue}
                  className="SocialMedia"
                />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={uuidv4()}>
                <AsideRegularLink
                  languageSelected={language}
                  data={linkData}
                  hreflang={hreflangValue}
                />
              </React.Fragment>
            );
          }
        })}
      </nav>
    </aside>
  );
};

export default SocialMedia;

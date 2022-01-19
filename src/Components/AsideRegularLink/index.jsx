const AsideRegularLink = ({ languageSelected, data, hreflang }) => {
  const hrefValue = data.href[languageSelected]
    ? data.href[languageSelected]
    : data.href;

  return (
    <a className="SocialMedia__link" href={hrefValue} hrefLang={hreflang}>
      {data.icon}
    </a>
  );
};

export default AsideRegularLink;

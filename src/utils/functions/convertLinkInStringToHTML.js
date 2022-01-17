function convertLinkInStringToHTML(string) {
  const newString = string.replace(
    /\[(.*?)\]\(([^)]+)\)/g,
    function (match, linkText, url) {
      return `<a href=${url}>${linkText}</a>`;
    }
  );

  return newString;
}

export default convertLinkInStringToHTML;

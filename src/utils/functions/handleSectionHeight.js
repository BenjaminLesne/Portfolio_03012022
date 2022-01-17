function handleSectionHeight(
  element,
  projectsSectionHeight,
  setProjectsSectionHeight
) {
  const newHeight = element.scrollHeight;
  const currentHeight = projectsSectionHeight.current;

  setProjectsSectionHeight({ previous: currentHeight, current: newHeight });
}

export default handleSectionHeight;

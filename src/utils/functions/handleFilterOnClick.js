import filterManager from "./filterManager";

function handleFilterOnClick(
  e,
  allProjectsSorted,
  setProjects,
  filterState,
  setFilterState,
  setAnimationVariables,
  animationVariables
) {
  const projectsSection = document.getElementById("my-projects");
  const newPreviousHeight = projectsSection.scrollHeight;

  filterManager(
    e,
    allProjectsSorted,
    setProjects,
    filterState,
    setFilterState
  ).then(() => {
    projectsSection.style.height = "auto";

    const newCurrentHeight = projectsSection.scrollHeight;

    //i don't know why, if previous = current, the height is set to auto inline.
    //somehow this condition prevent it
    if (newPreviousHeight !== newCurrentHeight) {
      //necessary to trigger the animation on shouldAnimate: true
      setAnimationVariables({
        ...animationVariables,
        shouldAnimate: false,
      });

      // trigger animation
      setAnimationVariables({
        ...animationVariables,
        previousHeight: newPreviousHeight,
        currentHeight: newCurrentHeight,
        shouldAnimate: true,
      });
    }
  });
}

export default handleFilterOnClick;

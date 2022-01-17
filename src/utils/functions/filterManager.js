import filterProjects from "./filterProjects";

async function filterManager(
  e,
  projectsArray,
  setProjects,
  filterState,
  setFilterState
) {
  try {
    const query = e.target.innerText.toLowerCase();

    if (query === "tous" || query === "all") {
      setProjects(projectsArray);
    } else {
      setProjects(filterProjects(projectsArray, query));
    }

    const previousFilter = filterState.activeFilter;
    setFilterState({
      previousFilter: previousFilter,
      activeFilter: parseInt(e.target.dataset.index),
    });
  } catch (error) {
    console.log(error);
  }
}

export default filterManager;

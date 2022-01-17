function filterProjects(array, query) {
  const newArray = array.filter((project) => project.tags.includes(query));

  return newArray;
}

export default filterProjects;

export default () => {
  return {
    user: null,
    username: null,
    loading: false,
    loadingMsg: "",
    labelFilter: "all",
    colorFilter: "",
    tagFilter: "",
    sortBy: "createdAt",
    mode: "grid",
    sortDirection: "asc",
    showFilterBar: false,
    searchTerm: "",
    noteColors: [
      "none",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "purple",
      "gray",
      "teal",
    ],
    notes: [],
  };
};

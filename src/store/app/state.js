export default () => {
  return {
    user: null,
    username: null,
    loading: false,
    loadingMsg: "",
    notes: [],
    labelFilter: "all",
    colorFilter: "",
    searchTerm: "",
    noteColors: [
      "none",
      "red",
      "orange",
      "yellow",
      "green",
      "light-green",
      "blue",
      "indigo",
      "purple",
      "brown",
      "grey",
      "blue-grey",
    ],
  };
};

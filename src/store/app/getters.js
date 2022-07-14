import orderby from "lodash-es";

export function tags(state) {
  let active = state.notes.filter((note) => !note.trash);
  let tags = [];
  active.forEach(function (note) {
    if (note.tags) {
      for (var i = 0; i < note.tags.length; i++) {
        if (tags.indexOf(note.tags[i]) === -1) {
          tags.push(note.tags[i]);
        }
      }
    }
  });
  return tags;
}

export function name(state) {
  return state.user.profile?.name || "";
}

export function avatar(state) {
  return state.user.profile.hasOwnProperty('image') && state.user.profile.image.length>0?state.user.profile.image[0].contentUrl :"/images/avataaars.svg";
}

export function colors(state) {
  let active = state.notes.filter((note) => !note.trash);
  let colors = [];
  active.forEach((note) => {
    if (note.color) {
      colors.push(note.color);
    }
  });

  return [...new Set(colors)];
}

export function filterNotes(state) {
  // We have several pre-defined filters, 'All',
  // 'trash', and 'Favorites', as well as color-coded
  // notes.  If "noteFilter" is not one of these
  // then it must be a user generated label.
  // So we have a couple of search conditions:
  // a) a pre-defined filter
  // b) a user generated label
  // c) a search term (text)
  if (state.searchTerm === null) {
    state.searchTerm = "";
  }
  let re = new RegExp(state.searchTerm, "i");
  // pre-defined filters
  if (state.labelFilter === "all") {
    return state.notes.filter(
      (note) => !note.trash && (re.test(note.text) || re.test(note.title))
    );
  } else if (state.labelFilter === "archive") {
    const filteredNotes = state.notes.filter(
      (note) => note.trash && (re.test(note.text) || re.test(note.title))
    );
    return sortFilter(filteredNotes);
  } else if (state.labelFilter === "favorite") {
    const filteredNotes = state.notes.filter(
      (note) =>
        note.fave && !note.trash && (re.test(note.text) || re.test(note.title))
    );
    return sortFilter(filteredNotes);
  } else if (state.labelFilter.startsWith("color:")) {
    let colorFilter = state.labelFilter.split(":")[1];
    const filteredNotes = state.notes.filter(
      (note) =>
        note.color === colorFilter &&
        (re.test(note.text) || re.test(note.title)) &&
        !note.trash
    );
    return sortFilter(filteredNotes);
  } else {
    // user generated label
    const filteredNotes = state.notes.filter(
      (note) =>
        note.tags.includes(state.labelFilter) &&
        (re.test(note.text) || re.test(note.title)) &&
        !note.trash
    );

    return sortFilter(filteredNotes);
  }
}

export function getNoteById(state, id) {
  return state.notes.find((note) => note.id === id);
}

function sortFilter(state, notes) {
  console.log("sortFilter: ", notes);
  if (state.sortBy === "title") {
    return orderby(notes, ["title"], [state.sortDirection]);
  } else if (state.sortBy === "createdAt") {
    return orderby(notes, ["created"], [state.sortDirection]);
  } else if (state.sortBy === "updatedAt") {
    return orderby(notes, ["modified"], [state.sortDirection]);
  } else {
    return state.notes;
  }
}

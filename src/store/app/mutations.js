export function someMutation(/* state */) {}

export function setUser(state, payload) {
  state.user = payload;
}

export function setUsername(state, payload) {
  state.username = payload;
}

export function setLoading(state, payload) {
  state.loading = payload.status;
  state.loadingMsg = payload.msg;
}

export function setNotes(state, payload) {
  console.log(`payload size: ${payload.length}`);
  payload.forEach((note) => {
    console.log(`adding note: ${note.id} @ ${Date.now()}`);
    if (!state.notes.find((n) => n.id === note.id)) {
      state.notes.push(note);
    }
    console.log(`notes size: ${state.notes.length}`);
  });
}

export function setLabelFilter(state, payload) {
  state.labelFilter = payload;
}

export function setColorFilter(state, payload) {
  state.colorFilter = payload;
}

export function updateNote(state, payload) {
  console.log("updateNote: ", payload);
  let idx = state.notes.findIndex((note) => note.id === payload.id);
  if ((idx) => 0) {
    let currentNote = Object.assign({}, state.notes[idx], payload.updates);
    state.notes.splice(idx, 1, currentNote);
  } else {
    console.log("Note not found");
  }
}

export function addNote(state, note) {
  state.notes.push(note);
}

export function setSearchTerm(state, st) {
  state.searchTerm = st;
}

export function setSortBy(state, payload) {
  state.sortBy = payload;
}

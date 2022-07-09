import { Person } from "@stacks/profile";
import { storage, userSession } from "boot/stacks";
import Note from "src/models/Note";
export function someAction(/* context */) {}

export async function setUser(context, userSession) {
  let userData = userSession.loadUserData();
  let person = new Person(userData.profile);
  console.log("person: ", person);
  let res = await fetch(
    `https://stacks-node-api.mainnet.stacks.co/v1/addresses/stacks/${userData.profile.stxAddress.mainnet}`
  );
  const bnsName = await res.json();
  const username = userData.username || bnsName.names[0];
  context.commit("setUser", userData);
  context.commit("setUsername", username);

  context.dispatch("fetchData");
}

export function setLoading(context, payload) {
  context.commit("setLoading", payload);
}

export async function fetchData(context) {
  await storage.getFile("riotnotes.json").then((data) => {
    console.log("fetched: ", data);
    let notes = null;
    try {
      notes = JSON.parse(data);
      // console.log("notes: ", notes);
      // notes = notes.map((note) => {
      //   let color = note.color;
      //   color = color.split(" ")[0];
      //   color = color.split("-")[0];
      //   if (color === "" || color === "white") color = null;
      //   return Object.assign({}, note, { color: color });
      // });
    } catch {
      notes = [];
    }
    console.log("notes: ", notes);

    context.commit("setNotes", notes);
  });
}

export function signOut(context) {
  context.commit("setUser", null);
  context.commit("setNotes", []);
  userSession.signUserOut("/");
}

export function setLabelFilter(context, filter) {
  context.commit("setLabelFilter", filter);
}

export function setColorFilter(context, filter) {
  context.commit("setColorFilter", filter);
}

export async function updateNote(context, update) {
  context.commit("updateNote", update);
  return await storage.putFile(
    "riotnotes.json",
    JSON.stringify(context.state.notes)
  );
}

export async function addNote(context) {
  const note = new Note();
  context.commit("addNote", note);
  await saveFile(JSON.stringify(context.state.notes));
  return note;
}

const saveFile = async (data) => {
  await storage.putFile(`riotnotes.json`, data);
};

const getFile = async (id) => {
  const data = await storage.getFile(`NoteRiot/notes/{$id}.json`);
  return JSON.parse(data);
};

const getAllFiles = async () => {
  const data = await storage.listFiles("NoteRiot/notes");
  console.log("files: ", data);
};

export function setSearchTerm(context, searchTerm) {
  context.commit("setSearchTerm", searchTerm);
}

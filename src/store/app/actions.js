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
      notes.forEach((note) => {
        let color = note.color;
        let colorVal = 0;
        if (color.includes("red")) colorVal = 1;
        else if (color.includes("orange")) colorVal = 2;
        else if (color.includes("yellow")) colorVal = 3;
        else if (color.includes("green")) colorVal = 4;
        else if (color.includes("blue")) colorVal = 5;
        else if (color.includes("purple")) colorVal = 6;
        else if (color.includes("pink")) colorVal = 7;

        note.color = colorVal;
      });
    } catch {
      notes = [];
    }
    console.log("notes: ", notes);

    context.commit("setNotes", notes);
  });
}

export async function fetchContacts(context) {
  await storage.getFile("contacts.json").then((data) => {
    let contacts = null;
    try {
      contacts = JSON.parse(data);
    } catch {
      contacts = [];
    }
    console.log("contacts: ", contacts);
    context.commit("setContacts", contacts);
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

export function setSortBy(context, payload) {
  context.commit("setSortBy", payload);
}

export async function deleteNote(context, id) {
  context.commit("deleteNote", id);
  await saveFile(JSON.stringify(context.state.notes));
}

export function setMode(context, payload) {
  context.commit("setMode", payload);
}

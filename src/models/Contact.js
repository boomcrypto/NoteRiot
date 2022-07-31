import { v4 as uuidv4 } from "uuid";

export default class Contact {
  constructor(options = {}) {
    this.id = uuidv4();
    this.name = options.name || "";
    this.publicKey = options.publicKey || "";
    this.zonefile = options.zonefile || "";
    this.nickname = options.nickname || "";
    this.shares = options.shares || [];
  }
}

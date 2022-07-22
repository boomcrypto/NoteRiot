import { v4 as uuidv4 } from "uuid";

export default class Note {
  constructor(options = {}) {
    this.id = uuidv4();
    this.text = options.text || "";
    this.title = options.title || "";
    this.color = options.color || "";
    this.notebook = options.notebook || 0; // by convention 0 is the "default" notebook
    this.created = options.created || Date.now();
    this.modified = options.modified || Date.now();
    this.fave = options.fave || false; // favorite indicator
    this.trash = options.trash || false; // trash/archive indicator
    this.tags = options.tags || []; // tags or keywords
    this.attachments = options.attachments || []; // URL to a DigitalDocument type audio, image, video, etc
    this.shares = options.shares || [];
  }

  // addRevision() {
  //   let rev = this.rev.subString(0, this.rev.indexOf("-"));
  //   let revid = parseInt(rev);
  //   revid++;
  //   this.rev = `${revid}-${uuidv4()}`;
  // }
}

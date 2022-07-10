[![Netlify Status](https://api.netlify.com/api/v1/badges/8a3bbb65-9152-4138-a1de-6d21cf09cb6a/deploy-status)](https://app.netlify.com/sites/infallible-williams-866040/deploys)

# NoteRiot

> NoteRiot aims to be easy to use and secure. NoteRiot is a Progressive Web App (PWA) so that your notes are accessible on all of your devices and all modern web platforms.
>
> NoteRiot utilizes the Blockstack's self-sovereign identity and bitcon-level encryption to ensure that user privacy is maintained.
> In addition, NoteRiot is open source and data formats are clearly documented so that data is easily portable.

## Note format

Notes are encrypted by default, however users can download/export them into an unencrypted format, if they wish. With upcoming features of the [Blockstack](https://github.com/blockstack)
platform, other apps, **under the user's control**, can access/import/share this data.

Notes are stored in JSON format:

```javascript
{
    id: String, // currently using uuidv4
    title: String,
    text: String,
    color: String,
    fave: Boolean,
    trash: Boolean,
    tags: Array <String>,
    shares: Array <String>, // currently unused
    notebook: String, // currently unused, only in some versions of notes
    modified: String, // String version of Date.now() at runtime
    created: String, // String version of Date.now() at runtime
    attachments: Array <String> // used to hold urls to encrypted attachments
}
```

## Running Your Own Instance

#### Option 1 - Install Locally

You can simply follow the build instructions below to run a dev version (non-minified) of the app locally. Note that your notes would only be
available at localhost:8080, unless you do some magic with your hosts file.

#### Option 2 - Install and deploy manually

1. Clone this repo: `git clone https://gitlab.com/riot.ai/NoteRiot`
2. Change to the app directory: `cd NoteRiot`
3. Install dependencies: `npm install`
4. Buidl: `npm run build`
5. Copy the 'dist' folder to the web server of your choice

#### Option 3 - The Easy Button

<!-- Markdown snippet -->

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/riot.ai/NoteRiot)

Note that you'll have to set your deployment settings as follows. Until you do the button above will create a repository for you, but will not actually build and deploy:

1. Build Command: `npm run build`
2. Publish Directory: `dist`

## Build Setup

### Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn lint
# or
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Running

### Install blockstack

[Download](https://blockstack.org/install)

## Donate: 
BTC: 

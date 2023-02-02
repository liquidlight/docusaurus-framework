# Docusaurus Framework

This is a framework around a framework. It is a quick, kick-start package allowing minimal setup for a documentation site.

At Liquid Light we have our documentation located within the main site repo, so we made this to allow for lightweight deployment of our documentation framework. It comes with some (hopefully) sensible defaults.

## Setup

- `npm init` if this is a brand new project
- `npm i @liquidlight/docusaurus-framework`
- Create a `docusaurus.config.js` in the root of your project (or subfolder) with the following contents:

```js
const config = require('@liquidlight/docusaurus-framework/docusaurus.config');

module.exports = {
	...config,
	title: ''
};
```

- Add the following scripts to the `package.json`

```json
"scripts": {
  "watch": "./node_modules/.bin/docusaurus start",
  "build": "./node_modules/.bin/docusaurus build",
  "serve": "./node_modules/.bin/docusaurus serve"
}
```

- Create a `docs` folder, here you can add a series of folders and `.md` (or `.mdx` files) for you documentation content
- Create a `static` folder - anything in here can be directly referenced in your Markdown files without the `static/` - e.g. `./static/img/logo.png` can be referenced as `img/logo.png`

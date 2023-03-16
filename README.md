# Docusaurus Framework

This is a framework around a framework. It is a quick, kick-start package allowing minimal setup for a documentation site.

At Liquid Light we have our documentation located within the main site repo, so we made this to allow for lightweight deployment of our documentation framework. It comes with some (hopefully) sensible defaults.

This can work as both a contained documentation framework within a site (e.g. if you have a `docs` folder in your repo) or as a documentation repo in itself.

## Setup

- `npm init` if this is a brand new project
- `npm i @liquidlight/docusaurus-framework --save`
- Create a `docusaurus.config.js` in the root of your project (or subfolder) with the following contents:

```js
module.exports = require('@liquidlight/docusaurus-framework/docusaurus.config')({
	title: 'Liquid Light',
});
```
- Add the following scripts to the `package.json`

```json
"scripts": {
  "watch": "docusaurus start",
  "build": "docusaurus build",
  "serve": "docusaurus serve"
}
```

- Create a `docs` folder, here you can add a series of folders and `.md` (or `.mdx` files) for you documentation content - see below if your `package.json` is located inside your docs folder
- Create a `static` folder - anything in here can be directly referenced in your Markdown files without the `static/` - e.g. `./static/img/logo.png` can be referenced as `img/logo.png`

## Customisation

A lot of the settings can be customised, along with allowing further expansion if required. All of the options are stored as defaults and can be overridden - check the top of `docusaurus.config.js`

### Self-contained in the docs folder

If you want your `package.json` file inside the `docs` folder so it is all self-contained, you need to set the following in your `docusaurus.config.js`

```
docs: {
	path: './',
}
```

### Remove the logo

If you don't want the logo to appear in the nav bar, set `logo: {}` in the config object 
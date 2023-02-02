# Docusaurus Framework

This is a framework around a framework. It is a quick, kick-start package allowing minimal setup for a documentation site.

At Liquid Light we have our documentation located within the main site repo, so we made this to allow for lightweight deployment of our documentation framework. It comes with some (hopefully) sensible defaults.

## Setup

- `npm i @liquidlight/docusaurus-framework`
- Create a `docusaurus.config.js` in the root of your project with the following contents:

```js
const config = require('@liquidlight/docusaurus-framework');

module.exports = {
	...config,
	title: ''
};
```

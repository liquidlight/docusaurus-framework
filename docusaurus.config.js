// @ts-nocheck

/**
* Plugins
*/
const merge = require('deepmerge')
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/**
* Configuration
*/
const configOverrides = {
	default_branch: 'main',
	blog: false
};

/**
 * Configure based on Gitlab URL
 */
let preset_docs = {
	routeBasePath: '/',
	sidebarPath: require.resolve('./sidebars.js'),
};

let navbar_items = [
	{
		type: 'doc',
		docId: 'index',
		position: 'left',
		label: 'Documentation',
	}
];

let hasBlog = false;
if (configOverrides.blog) {
	hasBlog = true;
	navbar_items.push({
		to: 'blog',
		label: 'Blog',
		position: 'left'
	}
	);
}
delete configOverrides.blog;

if (configOverrides.gitlab_url) {
	preset_docs.editUrl = `${configOverrides.gitlab_url}/-/tree/${configOverrides.default_branch}/`;

	navbar_items.push({
		href: configOverrides.gitlab_url,
		label: 'Gitlab',
		position: 'right',
	});

	/**
	* Delete custom properties
	*/
	delete configOverrides.gitlab_url;
}

delete configOverrides.default_branch;

/**
* Set Docusaurus defaults
*/
let config = {
	url: 'https://www.liquidlight.co.uk',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'liquidlight', // Usually your GitHub org/user name.
	projectName: 'documentation', // Usually your repo name.
	tagline: configOverrides.tagline ?? '',
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: preset_docs,
				blog: hasBlog ? {} : false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: configOverrides.title,
				logo: {
					alt: 'Liquid Light',
					src: 'img/logo.svg',
				},
				items: navbar_items,
			},
			footer: {
				style: 'dark',
			},
			prism: {
				theme: darkCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['php', 'apacheconf', 'typoscript'],
			},
		}),

	themes: [
		// ... Your other themes.
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			/** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
			({
				// ... Your options.
				// `hashed` is recommended as long-term-cache of index file is possible.
				hashed: true,
				indexBlog: hasBlog,
				highlightSearchTermsOnTargetPage: true,
				searchResultLimits: 12,
				searchResultContextMaxLength: 75,
				docsRouteBasePath: "/",
				ignoreFiles: ['/archive/']
			}),
		],
	],
};

/**
* Merge overrides with Docusaurus defaults
*/
config = merge(config, configOverrides);

/**
* EXPORT
*/
module.exports = config;

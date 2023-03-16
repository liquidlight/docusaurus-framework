// @ts-nocheck

/**
* Plugins
*/
const merge = require('deepmerge')
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = function (options = {}) {
	/**
	* Configuration
	*/
	const defaults = {
		url: 'https://www.liquidlight.co.uk',
		baseUrl: '/',
		onBrokenLinks: 'warn',
		onBrokenMarkdownLinks: 'warn',
		favicon: 'img/favicon.ico',
		organizationName: 'liquidlight', // Usually your GitHub org/user name.
		projectName: 'documentation', // Usually your repo name.
		tagline: '',

		blog: false,

		// To remove the logo, set `logo: {}`
		logo: {
			alt: options.title,
			src: 'img/logo.svg',
		},

		footer: {
			style: 'dark'
		},

		repository: {
			branch: 'main',
			host: 'Gitlab',
			url: ''
		},

		docs: {
			routeBasePath: '/',
			sidebarPath: require.resolve('./sidebars.js'),
			exclude: [
				'node_modules',
				'static',
				'blog'
			]
		},

		navbar_items: [
			{
				type: 'doc',
				docId: 'index',
				position: 'left',
				label: 'Documentation',
			}
		],

		prism: {
			theme: darkCodeTheme,
			darkTheme: darkCodeTheme,
			additionalLanguages: ['php', 'apacheconf', 'typoscript'],
		},

		search: {
			hashed: true,
			indexBlog: false,
			highlightSearchTermsOnTargetPage: true,
			searchResultLimits: 12,
			searchResultContextMaxLength: 75,
			docsRouteBasePath: "/",
			ignoreFiles: ['/archive/']
		}
	};

	const configOverrides = merge(defaults, options);

	if (configOverrides.blog) {
		configOverrides.navbar_items.push({
			to: 'blog',
			label: 'Blog',
			position: 'left'
		});
		configOverrides.search.indexBlog = true;
	}

	if (configOverrides.repository.url) {
		preset_docs.editUrl = `${configOverrides.repository.url}${configOverrides.repository.host === 'Gitlab' ? '/-/tree/' : '/blob/'}${configOverrides.repository.branch}/`;

		navbar_items.push({
			href: configOverrides.gitlab_url,
			label: configOverrides.repository.host,
			position: 'right',
		});

		/**
		* Delete custom properties
		*/
		delete configOverrides.gitlab_url;
	}

	/**
	* Set Docusaurus defaults
	*/
	let config = {
		presets: [
			[
				'classic',
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: configOverrides.docs,
					blog: configOverrides.blog,
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
					logo: configOverrides.logo,
					items: configOverrides.navbar_items,
				},
				footer: configOverrides.footer,
				prism: configOverrides.prism,
			}),

		themes: [
			// ... Your other themes.
			[
				require.resolve("@easyops-cn/docusaurus-search-local"),
				/** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
				(configOverrides.search),
			],
		],
	};

	/**
	 * Delete non-standard configs
	 */
	delete configOverrides.blog;
	delete configOverrides.docs;
	delete configOverrides.footer;
	delete configOverrides.logo;
	delete configOverrides.navbar_items;
	delete configOverrides.prism;
	delete configOverrides.repository;
	delete configOverrides.search;

	/**
	* Merge overrides with Docusaurus defaults
	*/
	config = merge(config, configOverrides);

	return config;
}

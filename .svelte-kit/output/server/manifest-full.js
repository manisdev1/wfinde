export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/1.webp","assets/2.webp","assets/3.webp","assets/acompanamiento-camper.webp","assets/blog-hero-bg.webp","assets/camino-santiago.webp","assets/experiencias.webp","assets/explore-hero.jpg","assets/favicon.png","assets/hero-poster.webp","assets/LOGO.webp","assets/vanandcamp.webp","assets/viaje-marruecos.webp"]),
	mimeTypes: {".webp":"image/webp",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CRP43KqK.js",app:"_app/immutable/entry/app.D-jTy9dm.js",imports:["_app/immutable/entry/start.CRP43KqK.js","_app/immutable/chunks/B36m9jq_.js","_app/immutable/chunks/BsHOo5Pt.js","_app/immutable/chunks/BKLxos8G.js","_app/immutable/chunks/DqTArsti.js","_app/immutable/chunks/BIagbRyJ.js","_app/immutable/entry/app.D-jTy9dm.js","_app/immutable/chunks/BsHOo5Pt.js","_app/immutable/chunks/lc7GWmgD.js","_app/immutable/chunks/DudwyYxY.js","_app/immutable/chunks/BIagbRyJ.js","_app/immutable/chunks/DbmYnhcC.js","_app/immutable/chunks/D3_QvOlZ.js","_app/immutable/chunks/BV8ro_LF.js","_app/immutable/chunks/BKLxos8G.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog-sobre-ruedas",
				pattern: /^\/blog-sobre-ruedas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contacto",
				pattern: /^\/contacto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/experiencias",
				pattern: /^\/experiencias\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/experiencia/[slug]",
				pattern: /^\/experiencia\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/explorar",
				pattern: /^\/explorar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/preguntas-frecuentes",
				pattern: /^\/preguntas-frecuentes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/que-es-van-camp",
				pattern: /^\/que-es-van-camp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/vehiculo/[id]",
				pattern: /^\/vehiculo\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

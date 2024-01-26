export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","fonts/Mechsuit.otf"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf"},
	_: {
		client: {"start":"_app/immutable/entry/start.1c932be6.js","app":"_app/immutable/entry/app.9d137c93.js","imports":["_app/immutable/entry/start.1c932be6.js","_app/immutable/chunks/scheduler.8ea23621.js","_app/immutable/chunks/index.de5d34e0.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.9d137c93.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.8ea23621.js","_app/immutable/chunks/index.997a8e0e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/[id]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

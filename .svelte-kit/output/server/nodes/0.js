import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.de840cd6.js","_app/immutable/chunks/scheduler.8ea23621.js","_app/immutable/chunks/index.997a8e0e.js"];
export const stylesheets = ["_app/immutable/assets/0.6a16f49b.css"];
export const fonts = [];

import * as universal from '../entries/pages/projects/_id_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/4.8c242d5c.js","_app/immutable/chunks/fa.83cee54c.js","_app/immutable/chunks/scheduler.8ea23621.js","_app/immutable/chunks/index.997a8e0e.js","_app/immutable/chunks/index.de5d34e0.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/Wrappper.d4c634d9.js"];
export const stylesheets = ["_app/immutable/assets/4.20839483.css","_app/immutable/assets/fa.95b16411.css"];
export const fonts = [];

import * as universal from '../entries/pages/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/3.e7217147.js","_app/immutable/chunks/fa.83cee54c.js","_app/immutable/chunks/scheduler.8ea23621.js","_app/immutable/chunks/index.997a8e0e.js","_app/immutable/chunks/index.de5d34e0.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/ThemeButton.6cfe411e.js","_app/immutable/chunks/Wrappper.d4c634d9.js","_app/immutable/chunks/preload-helper.cf010ec4.js"];
export const stylesheets = ["_app/immutable/assets/3.0aab98ba.css","_app/immutable/assets/fa.95b16411.css"];
export const fonts = [];

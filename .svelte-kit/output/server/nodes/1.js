

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5a564287.js","_app/immutable/chunks/scheduler.8ea23621.js","_app/immutable/chunks/index.997a8e0e.js"];
export const stylesheets = [];
export const fonts = [];

import { c as create_ssr_component } from "./ssr.js";
const Wrappper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto px-10 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full flex">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Wrappper as W
};

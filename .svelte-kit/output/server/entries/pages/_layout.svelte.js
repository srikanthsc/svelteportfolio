import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1,h2{font-family:JetBrains Mono, mono;font-weight:800;--tw-text-opacity:1;color:rgb(139 69 19 / var(--tw-text-opacity))}h1{font-size:2.25rem;line-height:2.5rem}@media(min-width: 768px){h1{font-size:3rem;line-height:1}}@media(min-width: 1024px){h1{font-size:3.75rem;line-height:1}}h2{font-size:1.5rem;line-height:2rem}@media(min-width: 768px){h2{font-size:1.875rem;line-height:2.25rem}}@media(min-width: 1024px){h2{font-size:2.25rem;line-height:2.5rem}}h3,h4{font-family:Poppins, sans-serif;--tw-text-opacity:1;color:rgb(139 69 19 / var(--tw-text-opacity))}h3{font-size:1.25rem;line-height:1.75rem;font-weight:700}@media(min-width: 768px){h3{font-size:1.5rem;line-height:2rem}}h4{font-weight:500}@media(min-width: 768px){h4{font-size:1.125rem;line-height:1.75rem}}@media(min-width: 1024px){h4{font-size:1.25rem;line-height:1.75rem}}p{font-family:Poppins, sans-serif;font-weight:500;--tw-text-opacity:1;color:rgb(139 69 19 / var(--tw-text-opacity))}a{font-family:Poppins, sans-serif;font-weight:500}@keyframes scale-up-center{0%{transform:scale(0)}100%{transform:scale(1)}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { T as ThemeButton, F as Footer } from "../../../chunks/ThemeButton.js";
import { W as Wrappper } from "../../../chunks/Wrappper.js";
const githubDarkDimmed = "";
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isBgTransparent = true } = $$props;
  if ($$props.isBgTransparent === void 0 && $$bindings.isBgTransparent && isBgTransparent !== void 0)
    $$bindings.isBgTransparent(isBgTransparent);
  return `<div class="${escape(isBgTransparent ? "dark:text-white" : "dark:text-text", true) + " text-text my-auto flex flex-col lg:hidden"}"> <button class="m-auto block">${`<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M95-203v-95h771v95H95Zm0-230v-94h771v94H95Zm0-229v-95h771v95H95Z"></path></svg>`}</button>  <div class="${"relative " + escape("hidden", true) + " text-slate-800 z-50"}"><div class="absolute right-0 w-max p-0 flex flex-col overflow-hidden bg-slate-100 dark:bg-slate-700 border-4 border-slate-900 dark:border-white"> <div class="mx-auto py-1 flex items-center gap-4 pr-4"><p class="dark:text-white py-2 pl-5 duration-200" data-svelte-h="svelte-c0y5ng">Darkmode</p> ${validate_component(ThemeButton, "ThemeButton").$$render($$result, { isBgTransparent: true }, {}, {})}</div></div></div>  <button class="z-40"><div class="${"fixed left-0 right-0 top-0 bottom-0 cursor-default " + escape("hidden", true)}"></div></button></div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navbar;
  let isBgTransparent = true;
  let backgroundClasses = "bg-opacity-0 border-opacity-0";
  return ` <section class="${"fixed top-0 left-0 right-0 bg-primary border-b-4 border-slate-900 z-40 duration-300 " + escape(backgroundClasses, true)}"${add_attribute("this", navbar, 0)}>${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="my-auto h-16 flex justify-between w-full"> <div class="my-auto"><div class="mt-2 dark:mt-0 relative"><a href="/"><h3 class="${"text-primary " + escape("dark:text-white", true) + " font-mechsuit text-sm md:text-lg z-0 transition-colors duration-500"}">Srikanth</h3> <h3 class="font-mechsuit dark:hidden text-sm md:text-lg absolute -top-1 right-1 transition-colors duration-500" data-svelte-h="svelte-1jwgbh4">Srikanth</h3></a></div></div>  ${validate_component(Hamburger, "Hamburger").$$render($$result, { isBgTransparent }, {}, {})}  <div class="hidden lg:block my-auto">${validate_component(ThemeButton, "ThemeButton").$$render($$result, { isBgTransparent }, {}, {})}</div></div>`;
    }
  })}</section>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, { noNavLinks: true }, {}, {})}`;
});
export {
  Layout as default
};

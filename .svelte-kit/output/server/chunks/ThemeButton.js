import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute, m as missing_component } from "./ssr.js";
import { W as Wrappper } from "./Wrappper.js";
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg class="fill-current" viewBox="-1 -1 22 22" xmlns="http://www.w3.org/2000/svg"><defs></defs><title>Github</title><g id="Page-1"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>`;
});
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg class="fill-current" viewBox="2 2 20 20" fill="#000000" xmlns="http://www.w3.org/2000/svg"><path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"></path></svg>`;
});
const githubLink = "https://github.com/srikanthsc";
const linkedInLink = "https://www.linkedin.com/in/srikanth-collaty-9343a520b/";
const whatsappLink = "";
const emailLink = "mailto:srikanthcollaty92@gmail.com";
const socials = [
  {
    social: "Github",
    name: "@srikanthsc",
    link: githubLink,
    colorVariant: { key: "github" },
    icon: Github
  },
  {
    social: "LinkedIn",
    name: "Srikanth COLLATY",
    link: linkedInLink,
    colorVariant: { key: "linkedIn" },
    icon: Linkedin
  }
];
const navLinks = [
  { text: "Home", link: "home" },
  { text: "About", link: "about" },
  { text: "Tools", link: "tools" },
  { text: "Social", link: "social" },
  { text: "Contact", link: "contact" }
];
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { noNavLinks = false } = $$props;
  const newSocials = socials;
  newSocials.splice(4, Number.MAX_VALUE);
  const footerSocials = newSocials;
  if ($$props.noNavLinks === void 0 && $$bindings.noNavLinks && noNavLinks !== void 0)
    $$bindings.noNavLinks(noNavLinks);
  return `<footer><div class="w-full bg-slate-800 h-max border-t-4 border-slate-800 dark:border-white">${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full py-4"><div class="${"py-6 flex " + escape(noNavLinks ? "justify-center" : "justify-between", true) + " gap-4 md:gap-12 lg:gap-36 xl:gap-52 items-center text-white"}"> ${!noNavLinks ? `<div class="w-full flex justify-center md:justify-around flex-wrap items-center text-white gap-x-8 gap-y-6">${each(navLinks, (link) => {
        return `<a class="hover:underline active:text-primary" href="${"#" + escape(link.link, true)}">${escape(link.text)}</a>`;
      })}</div>` : ``}</div> <hr class="my-4 border-slate-500">  <div class="flex justify-center gap-4 my-10 opacity-90 h-10">${each(footerSocials, (social) => {
        return `<a${add_attribute("href", social.link, 0)} target="_blank" class="group"><div class="w-10 h-10 flex overflow-hidden"><div class="w-10 h-10 text-transparent stroke-slate-400 group-hover:stroke-slate-100 group-active:stroke-primary">${validate_component(social.icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} </div></div> </a>`;
      })}</div>  <p class="text-slate-200 text-center text-sm">© 2024, made with ❤️ by
					<a${add_attribute("href", noNavLinks ? "/" : "#social", 0)} target="_blank" class="text-primary hover:underline active:text-custom-3">Srikanthsc</a>, using
					<a href="https://svelte.dev" target="_blank" class="text-orange-500 hover:underline active:text-white" data-svelte-h="svelte-npsq4f">SvelteKit</a>
					and
					<a href="https://tailwindcss.com" target="_blank" class="text-cyan-500 hover:underline active:text-white" data-svelte-h="svelte-1epxkja">Tailwind CSS</a></p></div>`;
    }
  })}</div></footer>`;
});
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg id="Layer_1" class="fill-current" role="img" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><title>dark-mode</title><path d="M199.87,105.22A100,100,0,1,1,94.78.13,75,75,0,0,0,199.87,105.22Z"></path></svg>`;
});
const ThemeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isBgTransparent = true } = $$props;
  if ($$props.isBgTransparent === void 0 && $$bindings.isBgTransparent && isBgTransparent !== void 0)
    $$bindings.isBgTransparent(isBgTransparent);
  return `${$$result.head += `<!-- HEAD_svelte-1unyeu3_START --><script data-svelte-h="svelte-w6tuyh">if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}<\/script><!-- HEAD_svelte-1unyeu3_END -->`, ""} <button class="${escape(
    "border-slate-900 focus:ring-slate-900 focus:ring-offset-text",
    true
  ) + " border-2 relative inline-flex flex-shrink-0 h-6 w-11 items-center px-0.5 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-1 focus:ring-offset-1"}"><span class="${escape("translate-x-0", true) + " translate-y-0 pointer-events-none relative inline-block h-4 w-4 rounded-full shadow transform ring-0 transition ease-in-out duration-200"}"><span class="${escape(
    "opacity-0 ease-in-out duration-800",
    true
  ) + " translate-y-0 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"}" aria-hidden="true"> <div class="${"w-4 h-4 text-black translate-y-0 " + escape(isBgTransparent ? "dark:text-white" : "dark:text-text", true) + " duration-800"}">${validate_component(Moon, "Moon").$$render($$result, {}, {}, {})}</div></span> <span class="${escape(
    "opacity-100 ease-in-out duration-800",
    true
  ) + " translate-y-0 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"}" aria-hidden="true"> <div class="${"h-4 w-4 rounded-full translate-y-0 " + escape(isBgTransparent ? "dark:bg-white" : "dark:bg-slate-900", true) + " bg-slate-900"}"></div></span></span></button>`;
});
export {
  Footer as F,
  Github as G,
  ThemeButton as T,
  emailLink as e,
  linkedInLink as l,
  navLinks as n,
  socials as s,
  whatsappLink as w
};
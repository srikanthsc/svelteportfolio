import { c as create_ssr_component, e as escape, b as each, v as validate_component, a as add_attribute, d as createEventDispatcher, m as missing_component } from "../../chunks/ssr.js";
import { n as navLinks, T as ThemeButton, l as linkedInLink, w as whatsappLink, e as emailLink, s as socials, G as Github, F as Footer } from "../../chunks/ThemeButton.js";
import { W as Wrappper } from "../../chunks/Wrappper.js";
import { B as Button, F as Fa } from "../../chunks/fa.js";
import { faExternalLink, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { i as is_promise, n as noop } from "../../chunks/utils.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isBgTransparent = true } = $$props;
  if ($$props.isBgTransparent === void 0 && $$bindings.isBgTransparent && isBgTransparent !== void 0)
    $$bindings.isBgTransparent(isBgTransparent);
  return `<div class="${escape(isBgTransparent ? "dark:text-white" : "dark:text-text", true) + " text-text my-auto flex flex-col lg:hidden"}"> <button class="m-auto block">${`<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M95-203v-95h771v95H95Zm0-230v-94h771v94H95Zm0-229v-95h771v95H95Z"></path></svg>`}</button>  <div class="${"relative " + escape("hidden", true) + " text-slate-800 z-50"}"> <div class="absolute right-0 w-max p-0 flex flex-col overflow-hidden bg-slate-100 dark:bg-slate-700 border-4 border-slate-900 dark:border-white">${each(navLinks, (link) => {
    return `<a class="py-2 pl-5 pr-12 hover:bg-accent hover:underline active:text-indigo-500 dark:text-white duration-200" href="${"#" + escape(link.link, true)}">${escape(link.text)}</a>`;
  })}  <div class="mx-auto py-1 border-t-4 border-slate-900 dark:border-white flex items-center gap-4 pr-4"><p class="dark:text-white py-2 pl-5 duration-200" data-svelte-h="svelte-c0y5ng">Darkmode</p> ${validate_component(ThemeButton, "ThemeButton").$$render($$result, { isBgTransparent: true }, {}, {})}</div></div></div>  <button class="z-40"><div class="${"fixed left-0 right-0 top-0 bottom-0 cursor-default " + escape("hidden", true)}"></div></button></div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navbar;
  let isBgTransparent = true;
  let backgroundClasses = "bg-opacity-0 border-opacity-0";
  return ` <section class="${"fixed top-0 left-0 right-0 bg-primary border-b-4 border-slate-900 z-40 duration-300 " + escape(backgroundClasses, true)}"${add_attribute("this", navbar, 0)}>${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="my-auto h-14 md:h-16 flex justify-between w-full"> <div class="my-auto"><div class="mt-2 dark:mt-0 relative"><a href="/"><h3 class="${"text-primary " + escape("dark:text-white", true) + " font-montserrat text-sm md:text-lg z-0 transition-colors duration-500"}" style="color: #005bb5;">Srikanth</h3></a></div></div>  <div class="${"hidden w-full pr-12 xl:pr-16 pl-16 xl:pl-24 lg:flex justify-evenly flex-wrap items-center text-text " + escape("dark:text-red", true)}">${each(navLinks, (link) => {
        return `<a class="hover:underline active:text-indigo-1000" href="${"#" + escape(link.link, true)}">${escape(link.text)}</a>`;
      })}</div>  ${validate_component(Hamburger, "Hamburger").$$render($$result, { isBgTransparent }, {}, {})}  <div class="hidden lg:block my-auto">${validate_component(ThemeButton, "ThemeButton").$$render($$result, { isBgTransparent }, {}, {})}</div></div>`;
    }
  })}</section>`;
});
const MarqueeText_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".marquee-content.svelte-1wgrbuv.svelte-1wgrbuv{width:100000px}.paused.svelte-1wgrbuv .content.svelte-1wgrbuv{animation-play-state:paused}.marquee-direction-left.svelte-1wgrbuv.svelte-1wgrbuv{animation-name:svelte-1wgrbuv-animation-L;float:left}.marquee-direction-right.svelte-1wgrbuv.svelte-1wgrbuv{animation-name:svelte-1wgrbuv-animation-R;float:left}.content.svelte-1wgrbuv.svelte-1wgrbuv{animation-timing-function:linear;animation-iteration-count:infinite}@keyframes svelte-1wgrbuv-animation-L{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}@keyframes svelte-1wgrbuv-animation-R{0%{transform:translateX(-100%)}100%{transform:translateX(0)}}",
  map: null
};
const MarqueeText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = 15 } = $$props;
  let { repeat = 2 } = $$props;
  let { paused = false } = $$props;
  let { direction = "left" } = $$props;
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.repeat === void 0 && $$bindings.repeat && repeat !== void 0)
    $$bindings.repeat(repeat);
  if ($$props.paused === void 0 && $$bindings.paused && paused !== void 0)
    $$bindings.paused(paused);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  $$result.css.add(css$2);
  return `<div class="overflow-hidden"><div class="${["marquee-content svelte-1wgrbuv", paused === true ? "paused" : ""].join(" ").trim()}">${each(Array(repeat), (_) => {
    return `<div${add_attribute("id", _, 0)} class="${escape(
      direction === "left" ? "marquee-direction-left" : "marquee-direction-right",
      true
    ) + " content svelte-1wgrbuv"}" style="${"animation-duration: " + escape(duration, true) + "s"}">${slots.default ? slots.default({}) : ``} </div>`;
  })}</div> </div>`;
});
const Saos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animation = "none" } = $$props;
  let { animation_out = "none; opacity: 0" } = $$props;
  let { once = false } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { css_observer = "" } = $$props;
  let { css_animation = "" } = $$props;
  const dispatch = createEventDispatcher();
  let observing = true;
  const countainer = `__saos-${Math.random()}__`;
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
    $$bindings.animation(animation);
  if ($$props.animation_out === void 0 && $$bindings.animation_out && animation_out !== void 0)
    $$bindings.animation_out(animation_out);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.css_observer === void 0 && $$bindings.css_observer && css_observer !== void 0)
    $$bindings.css_observer(css_observer);
  if ($$props.css_animation === void 0 && $$bindings.css_animation && css_animation !== void 0)
    $$bindings.css_animation(css_animation);
  {
    dispatch("update", { observing });
  }
  return `<div${add_attribute("id", countainer, 0)}${add_attribute("style", css_observer, 0)}>${`<div style="${"animation: " + escape(animation, true) + "; " + escape(css_animation, true)}">${slots.default ? slots.default({}) : ``}</div>`}</div>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const primaryButton = { key: "primary" };
  return `<section class="w-full bg-custom-1 dark:bg-purple-900 relative pt-20"><div class="absolute left-0 right-0 top-0 bg-primary h-12 md:h-14 lg:h-16 border-slate-900 border-y-4 flex items-center">${validate_component(MarqueeText, "MarqueeText").$$render($$result, { direction: "left" }, {}, {
    default: () => {
      return `<div class="flex items-center gap-8 mx-4" data-svelte-h="svelte-ti6aoj"><h4>● Welcome to my website!</h4> <h4>● Mobile development</h4> <h4>● Back-end development</h4> <h4>● Front-end development</h4> <h4>● Full Stack developer</h4> <h4>● IT Engineer</h4> <h4>● SAP developer</h4></div>`;
    }
  })}</div> ${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full pb-20">${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true
        },
        {},
        {
          default: () => {
            return `<h1 class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500" id="about" data-svelte-h="svelte-x42237">About</h1>`;
          }
        }
      )} <div class="w-full flex flex-col gap-4 md:flex-row md:justify-between h-max"><div class="w-full">${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true
        },
        {},
        {
          default: () => {
            return `<div class="bg-custom-2 px-4 py-4 md:px-6 lg:py-6 lg:px-8 border-4 border-slate-900" data-svelte-h="svelte-79bsup"><h3 class="mb-4">About me</h3> <p>I am Srikanth, I have recently graduated, I am a Tech enthusiast.

I am always open to collaborating on projects and innovative/disruptive ideas.

When I am not coding, you will find me lifting weights in the gym or at my desk sketching stuff</p></div>`;
          }
        }
      )}</div> <div class="w-full">${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          css_observer: "display: flex; height: 100%;",
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true
        },
        {},
        {
          default: () => {
            return `<div class="bg-secondary px-4 py-4 md:px-6 lg:py-6 h-full lg:px-8 border-4 border-slate-900"><p class="mb-4" data-svelte-h="svelte-stoy1n">To gain further insight into my professional background and skills, you&#39;re welcome to explore my LinkedIn profile at:</p> <a${add_attribute("href", linkedInLink, 0)} target="_blank">${validate_component(Button, "Button").$$render($$result, { variant: primaryButton }, {}, {
              icon: () => {
                return `${validate_component(Fa, "Fa").$$render($$result, { icon: faExternalLink, slot: "icon" }, {}, {})}`;
              },
              default: () => {
                return `Visit LinkedIn`;
              }
            })}</a></div>`;
          }
        }
      )}</div></div></div>`;
    }
  })}</section>`;
});
const inputClass = "outline-none focus:ring-slate-900 dark:focus:ring-white focus:ring-offset-text dark:focus:ring-offset-white focus:ring-1 focus:ring-offset-1 dark:bg-slate-600 font-poppins dark:text-white border-4 border-slate-900 dark:border-white p-2 mt-2 mb-3 focus:invalid:border-red-500 focus:invalid:ring-offset-red-500 focus:invalid:ring-red-500 dark:focus:invalid:ring-red-500 dark:focus:invalid:ring-offset-red-500";
const Whatsapp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg class="fill-current" fill="#000000" viewBox="2 2 16 16" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="20" height="20"></rect><g><path d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2 2 5.5.8 10.5 3.2 14.2l.2.3-.8 3 3-.8.3.2c1.3.7 2.7 1.1 4.1 1.1 1.5 0 3-.4 4.3-1.2 3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1-.4 0-.9.2-2.9-.6-1.7-.8-3.1-2.1-4.1-3.6-.6-.7-.9-1.6-1-2.5 0-.8.3-1.5.8-2 .2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4.1.2 0 .4-.1.5-.1.1-.2.3-.3.4-.2.1-.3.3-.2.5.4.6.9 1.2 1.4 1.7.6.5 1.2.9 1.9 1.2.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3.1.3.1.7-.1 1z"></path></g></svg>`;
});
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg class="fill-current" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><title>email [#1572]</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1"><g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#1572]"></path></g></g></g></svg>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const whatsappButton = { key: "whatsapp" };
  const emailButton = { key: "email" };
  const primaryButton = { key: "primary" };
  let buttonDisabled = false;
  let data = { name: "", email: "", message: "" };
  return `<section>${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full ">${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true
        },
        {},
        {
          default: () => {
            return `<h1 class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500" id="contact" data-svelte-h="svelte-1lveviz">Contact</h1>`;
          }
        }
      )} <div class="flex flex-wrap sm:flex-nowrap justify-between gap-8 md:gap-16 lg:gap-24 xl:gap-36"> <a${add_attribute("href", whatsappLink, 0)} target="_blank" class="w-full">${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true
        },
        {},
        {
          default: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                noDarkVariant: false,
                fullWidth: true,
                variant: whatsappButton,
                centerText: true
              },
              {},
              {
                icon: () => {
                  return `<div class="w-8 h-8" slot="icon">${validate_component(Whatsapp, "Whatsapp").$$render($$result, {}, {}, {})}</div>`;
                },
                default: () => {
                  return `<span data-svelte-h="svelte-igq0xm">Whatsapp me</span>`;
                }
              }
            )}`;
          }
        }
      )}</a>  <a${add_attribute("href", emailLink, 0)} target="_blank" class="w-full">${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true
        },
        {},
        {
          default: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                noDarkVariant: false,
                fullWidth: true,
                variant: emailButton
              },
              {},
              {
                icon: () => {
                  return `<div class="w-8 h-8" slot="icon">${validate_component(Email, "Email").$$render($$result, {}, {}, {})}</div>`;
                },
                default: () => {
                  return `<span data-svelte-h="svelte-9kujjw">Email me</span>`;
                }
              }
            )}`;
          }
        }
      )}</a></div> <div class="lg:flex lg:justify-between my-16"><div class="hidden lg:block my-auto pr-8 xl:pr-12">${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true
        },
        {},
        {
          default: () => {
            return `<h1 class="dark:text-white duration-500" data-svelte-h="svelte-n5vsde">Message me!</h1>`;
          }
        }
      )}</div> ${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true,
          css_observer: "width: 100%;"
        },
        {},
        {
          default: () => {
            return `<div class="w-full bg-custom-1 dark:bg-slate-700 border-4 border-slate-900 dark:border-white h-max px-8 py-4 md:px-12 md:py-6"> <form method="dialog"><div class="flex flex-col mb-4"><label for="name" data-svelte-h="svelte-1evexpd"><h4 class="dark:text-white">Name</h4></label> <input type="text" id="name" name="name"${add_attribute("class", inputClass, 0)} required${add_attribute("value", data.name, 0)}> <label for="email" data-svelte-h="svelte-a8iirl"><h4 class="dark:text-white">Email</h4></label> <input type="email" id="email" name="email"${add_attribute("class", inputClass, 0)} required${add_attribute("value", data.email, 0)}> <label for="message" data-svelte-h="svelte-1tqoy8b"><h4 class="dark:text-white">Message</h4></label> <textarea id="message" name="message"${add_attribute("class", inputClass, 0)} required>${escape("")}</textarea></div> <div class="ml-1"><button type="submit" class="block w-full">${validate_component(Button, "Button").$$render(
              $$result,
              {
                noDarkVariant: false,
                fullWidth: true,
                variant: primaryButton,
                disabled: buttonDisabled
              },
              {},
              {
                icon: () => {
                  return `${validate_component(Fa, "Fa").$$render($$result, { icon: faPaperPlane, slot: "icon" }, {}, {})}`;
                },
                default: () => {
                  return `<h4 class="${escape(
                    "text-inherit",
                    true
                  ) + ""}">${escape(
                    "Send"
                  )}</h4>`;
                }
              }
            )}</button></div></form> </div>`;
          }
        }
      )}</div></div>`;
    }
  })}</section>`;
});
const background = "/_app/immutable/assets/18765.8ac3470d.jpg";
const Typewriter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-1gv2i7t-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-1gv2i7t *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-1gv2i7t .finished-typing::after{content:none}.cursor.svelte-1gv2i7t .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, #000000);animation:svelte-1gv2i7t-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoopMode;
  let isFiniteCursorMode;
  let invalidCursorOnFinish;
  let invalidCursorOnDelay;
  let invalidLoopProps;
  let invalidScrambleProps;
  let unnecessaryCursorOnFinish;
  let delayPromise;
  let { mode = "concurrent" } = $$props;
  let { interval = 30 } = $$props;
  let { cursor = true } = $$props;
  let { keepCursorOnFinish = false } = $$props;
  let { delay = 0 } = $$props;
  let { showCursorOnDelay = false } = $$props;
  let { disabled = false } = $$props;
  let { element = "div" } = $$props;
  let { scrambleDuration = 3e3 } = $$props;
  let { scrambleSlowdown = true } = $$props;
  let { unwriteInterval = 30 } = $$props;
  let { wordInterval = 1500 } = $$props;
  const modes = {
    concurrent: () => import("../../chunks/concurrent.js"),
    cascade: () => import("../../chunks/cascade.js"),
    loop: () => import("../../chunks/loop.js"),
    loopOnce: () => import("../../chunks/loopOnce.js"),
    loopRandom: () => import("../../chunks/loopRandom.js"),
    scramble: () => import("../../chunks/scramble.js")
  };
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.keepCursorOnFinish === void 0 && $$bindings.keepCursorOnFinish && keepCursorOnFinish !== void 0)
    $$bindings.keepCursorOnFinish(keepCursorOnFinish);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.showCursorOnDelay === void 0 && $$bindings.showCursorOnDelay && showCursorOnDelay !== void 0)
    $$bindings.showCursorOnDelay(showCursorOnDelay);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.scrambleDuration === void 0 && $$bindings.scrambleDuration && scrambleDuration !== void 0)
    $$bindings.scrambleDuration(scrambleDuration);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0)
    $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0)
    $$bindings.unwriteInterval(unwriteInterval);
  if ($$props.wordInterval === void 0 && $$bindings.wordInterval && wordInterval !== void 0)
    $$bindings.wordInterval(wordInterval);
  $$result.css.add(css$1);
  isLoopMode = /^loop(Once|Random)?$/.test(mode);
  isFiniteCursorMode = ["concurrent", "cascade", "loopOnce"].includes(mode);
  invalidCursorOnFinish = !isFiniteCursorMode && keepCursorOnFinish;
  invalidCursorOnDelay = delay < 1 && showCursorOnDelay;
  invalidLoopProps = !isLoopMode && ($$props.unwriteInterval || $$props.wordInterval);
  invalidScrambleProps = mode !== "scramble" && ($$props.scrambleDuration || $$props.scrambleSlowdown);
  unnecessaryCursorOnFinish = typeof keepCursorOnFinish === "number" && keepCursorOnFinish < 1;
  invalidCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes");
  invalidCursorOnDelay && console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0");
  invalidLoopProps && console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes");
  invalidScrambleProps && console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode");
  unnecessaryCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1");
  delayPromise = () => new Promise((resolve) => setTimeout(() => resolve(delay), delay));
  return `<noscript>${slots.default ? slots.default({}) : ``}</noscript> ${disabled ? `<div class="typewriter-container svelte-1gv2i7t">${slots.default ? slots.default({}) : ``}</div>` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${showCursorOnDelay ? `<div class="typewriter-container cursor svelte-1gv2i7t" data-svelte-h="svelte-1ssf3hl"><p class="typing"></p></div>` : ``} `;
    }
    return function() {
      return ` ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(selectedMode) {
          return ` ${((tag) => {
            return tag ? `<${element} class="${["typewriter-container svelte-1gv2i7t", cursor ? "cursor" : ""].join(" ").trim()}">${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(element)} `;
        }();
      }(modes[mode]())} `;
    }();
  }(delayPromise())}`}`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dark:root{--cursor-color:#fff}#home.svelte-1afaufb{font-weight:bold;color:red}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const secondaryButton = { key: "secondary" };
  $$result.css.add(css);
  return `<section> <div class="h-[800px] md:h-[900px] bg-cover bg-no-repeat bg-center flex relative duration-500" style="${"background-image: url(" + escape(background, true) + ");"}"><div class="md:mt-16 w-full flex">${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full md:flex md:gap-4 md:justify-between my-auto"><div class="mb-52 mt-16 md:m-0 py-2 md:py-8 lg:py-9 sm:max-md:text-center duration-500"> <h2 id="home" class="dark:text-white duration-500 svelte-1afaufb" data-svelte-h="svelte-g8yw6u">Hello, my name is</h2> <h1 class="mb-2 dark:text-white duration-500" data-svelte-h="svelte-1n1nli5">Srikanth <span class="text-inherit text-primary">C.</span></h1>  <h4 class="mb-4 dark:text-white duration-500">${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "loop", interval: 25 }, {}, {
        default: () => {
          return `A
								<span class="text-white-900 dark:text-white-900" data-svelte-h="svelte-qp5v48">FullStack developer developer</span> <span class="text-orange-600 dark:text-orange-400" data-svelte-h="svelte-c8rva5">SAP Software Engineer</span>`;
        }
      })}</h4>  <div class="flex gap-3 sm:max-md:justify-center"><a href="#contact">${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: secondaryButton,
          noDarkVariant: false
        },
        {},
        {
          default: () => {
            return `Contact me`;
          }
        }
      )}</a></div></div></div>`;
    }
  })}</div></div> </section>`;
});
const Portfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><div class="w-full mb-4">${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full">${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true
        },
        {},
        {
          default: () => {
            return `<h1 class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500" id="social" data-svelte-h="svelte-mjnf6f">Connect with me</h1>`;
          }
        }
      )}  <div class="flex flex-wrap justify-center gap-4 lg:gap-5 xl:gap-6">${each(socials, (social) => {
        return `<a${add_attribute("href", social.link, 0)} target="_blank" class="w-full md:w-[48.5%]">${validate_component(Saos, "Saos").$$render(
          $$result,
          {
            animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
            once: true
          },
          {},
          {
            default: () => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: social.colorVariant,
                  fullWidth: true,
                  noDarkVariant: false,
                  centerText: false
                },
                {},
                {
                  icon: () => {
                    return `<div class="w-10 h-10" slot="icon">${validate_component(social.icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} </div>`;
                  },
                  default: () => {
                    return `<div class="flex justify-start items-center">${escape(social.social)}</div> `;
                  }
                }
              )} `;
            }
          }
        )} </a>`;
      })}</div></div>`;
    }
  })}</div></section>`;
});
const AdobeIllustrator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Adobe Illustrator</title><path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z"></path></svg>`;
});
const AdobePhotoshop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Adobe Photoshop</title><path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"></path></svg>`;
});
const AndroidStudio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Android Studio</title><path d="M12 0C6.0697 0 1.254 4.8158 1.254 10.746c0 3.29 1.4819 6.237 3.8144 8.209l4.5097-7.7987-.3926-.3907c-.115-.1151-.173-.2124-.1757-.3027a.2386.2386 0 010-.0293H9V7.875c0-.6155.5095-1.123 1.125-1.123h.6348V4.7383H13.25V6.752h.625c.6253 0 1.125.5075 1.1348 1.1328v2.539H15v.0098h-.002c-.0032.0868-.0511.1996-.1738.3223l-.0097.0097-.3907.3907 1.9336 3.3417c.8695-1.016 1.3965-2.3255 1.3965-3.752h2.004c0 2.1788-.9096 4.1538-2.3556 5.5606l1.5293 2.6504c2.333-1.9721 3.8145-4.9207 3.8145-8.211C22.7559 4.806 17.94 0 12 0zm6.9316 18.957a10.7911 10.7911 0 01-1.6523 1.1504l1.5195 2.627a.5687.5687 0 00.1973.205L20.5 23.9649c.0586.0391.127.0391.1855.0098.0587-.039.088-.0976.088-.166l-.1563-1.8066c-.0098-.0977-.039-.1856-.0879-.2735l-1.5977-2.7715zm-1.6523 1.1504l-1.498-2.5898a7.6932 7.6932 0 01-3.7715.9863 7.6932 7.6932 0 01-3.7715-.9863l-1.5 2.5976c1.556.8767 3.3504 1.379 5.2617 1.379 1.9182 0 3.7195-.5042 5.2793-1.3868zm-10.541.0078a10.788 10.788 0 01-1.67-1.1601l-1.5976 2.7636c-.0488.088-.0781.1758-.0879.2735l-.1367 1.8164c-.0098.0684.0293.127.0879.166.0586.039.127.0293.1855-.0098l1.504-1.0156c.0781-.0586.1464-.1269.1952-.205l1.5196-2.629zM12 7.7285v.0195c-.8288 0-1.4915.6622-1.4941 1.5.0026.8283.675 1.498 1.4941 1.498h.0098c.819-.0097 1.4914-.6699 1.4941-1.498-.0026-.8281-.675-1.4902-1.4941-1.5L12 7.7285zm-.9473 4.9043l-1.8183 3.1465A5.7067 5.7067 0 0012 16.4922c1.0063 0 1.9547-.2537 2.7559-.7031l-1.8145-3.1504-.375.375c-.1465.1563-.3515.2343-.5566.2343h-.0196c-.1954 0-.4003-.078-.5566-.2343l-.3809-.3809Z"></path></svg>`;
});
const Bootstrap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bootstrap</title><path d="M18.002 2.997H5.999A3.011 3.011 0 0 0 2.997 6v12.002a3.012 3.012 0 0 0 3.002 3.001h12.003a3.012 3.012 0 0 0 3.001-3.001V6a3.012 3.012 0 0 0-3.001-3.003zm-1.64 12.647c-.152.36-.389.68-.693.927a3.594 3.594 0 0 1-1.206.614c-.49.151-1.074.229-1.75.229H7.888V6.909h5.103c.943 0 1.7.213 2.267.646.569.436.854 1.082.854 1.958 0 .528-.13.983-.389 1.357-.259.373-.63.664-1.111.868v.034c.642.135 1.137.438 1.464.912.327.473.493 1.069.493 1.789 0 .405-.078.788-.225 1.147l.02.021v.003zm-2.084-2.589c-.309-.282-.739-.419-1.297-.419H9.737v3.276h3.253c.554 0 .991-.144 1.298-.435.308-.289.464-.701.464-1.229-.005-.518-.156-.919-.464-1.193h-.014.004zm-.451-2.119c.299-.251.444-.613.444-1.084 0-.526-.131-.902-.397-1.116-.264-.214-.646-.326-1.146-.326H9.727v2.898h3.001c.436.001.81-.127 1.099-.372z"></path></svg>`;
});
const Codeigniter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Codeigniter</title><path d="M15.333 1.004c1.1 1.778-0.35 4.131-1.508 5.446-1.123 1.275-2.489 2.341-3.73 3.499-1.344 1.223-2.559 2.536-3.655 3.945l-0.052 0.070c-1.75 2.074-2.814 4.776-2.814 7.727 0 0.892 0.097 1.762 0.282 2.599l-0.015-0.080c1.123 3.498 4.043 6.111 7.646 6.775l0.061 0.009c-1.922-0.827-3.285-2.62-3.485-4.751l-0.002-0.023c0.13-2.236 1.336-4.165 3.103-5.29l0.027-0.016c-0.117 0.273-0.185 0.59-0.185 0.923 0 0.48 0.141 0.928 0.384 1.303l-0.006-0.009c0.381 0.518 0.988 0.85 1.673 0.85 1.143 0 2.070-0.927 2.070-2.070 0-0.654-0.303-1.237-0.777-1.616l-0.004-0.003c-1.079-0.86-1.765-2.174-1.765-3.648 0-0.202 0.013-0.401 0.038-0.596l-0.002 0.023c0.241-0.898 0.733-1.66 1.395-2.228l0.006-0.005c-0.512 1.347 0.943 2.674 1.903 3.337 1.937 1.142 3.575 2.251 5.142 3.449l-0.123-0.090c1.567 1.206 2.567 3.083 2.567 5.194 0 0.123-0.003 0.244-0.010 0.365l0.001-0.017c-0.42 2.337-2.083 4.202-4.267 4.906l-0.045 0.012c4.526-1 9.204-4.511 9.297-9.531 0.116-3.789-2.378-7.144-6.446-9.227 0.081 0.15 0.129 0.329 0.129 0.518 0 0.238-0.075 0.459-0.204 0.64l0.002-0.003c-0.397 0.616-1.079 1.018-1.856 1.018-0.676 0-1.281-0.305-1.684-0.785l-0.003-0.003c-1.506-1.934 0.031-4.019 0.246-6.067 0.002-0.068 0.003-0.147 0.003-0.227 0-2.616-1.312-4.926-3.314-6.307l-0.026-0.017z"></path></svg>`;
});
const Figma = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path opacity="0.6" d="M11.6667 2H8.33333C6.49238 2 5 3.49238 5 5.33333C5 7.17428 6.49238 8.66667 8.33333 8.66667H11.6667V2Z" fill="#1C274C"></path><path opacity="0.4" d="M11.6667 8.6665H8.33333C6.49238 8.6665 5 10.1589 5 11.9998C5 13.8408 6.49238 15.3332 8.33333 15.3332H11.6667V8.6665Z" fill="#1C274C"></path><path d="M18.3327 11.9998C18.3327 13.8408 16.8403 15.3332 14.9993 15.3332C13.1584 15.3332 11.666 13.8408 11.666 11.9998C11.666 10.1589 13.1584 8.6665 14.9993 8.6665C16.8403 8.6665 18.3327 10.1589 18.3327 11.9998Z" fill="#1C274C"></path><path opacity="0.2" d="M8.33333 15.3335H11.6667V18.6668C11.6667 20.5078 10.1743 22.0002 8.33333 22.0002C6.49238 22.0002 5 20.5078 5 18.6668C5 16.8259 6.49238 15.3335 8.33333 15.3335Z" fill="#1C274C"></path><path opacity="0.8" d="M11.666 2H14.9993C16.8403 2 18.3327 3.49238 18.3327 5.33333C18.3327 7.17428 16.8403 8.66667 14.9993 8.66667H11.666V2Z" fill="#1C274C"></path></svg>`;
});
const Dart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>dart</title><path d="M22.039 6.149c-1.122-1.118-2.258-2.221-3.419-3.298-0.327-0.355-0.794-0.577-1.313-0.577-0.008 0-0.015 0-0.023 0h0.001c-0.401 0.039-0.769 0.125-1.117 0.253l0.031-0.010-7.26 3.63zM6.995 6.995v14.709c-0.010 0.083-0.016 0.179-0.016 0.276 0 0.622 0.243 1.188 0.639 1.607l-0.001-0.001 6.142 6.141h10.649v-5.32zM6.148 6.147s6.306-3.151 9.458-4.728c0.496-0.25 1.080-0.396 1.699-0.396 0.052 0 0.105 0.001 0.157 0.003l-0.007-0c0.806 0.159 1.513 0.504 2.101 0.99l-0.008-0.006 11.429 11.43v12.216h-5.32v5.32h-12.414l-11.231-11.231c-0.595-0.612-0.968-1.443-0.985-2.362l-0-0.003c0.051-0.511 0.191-0.978 0.405-1.402l-0.010 0.023z"></path></svg>`;
});
const Flutter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Flutter</title><path d="M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z"></path></svg>`;
});
const Git = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Git</title><path d="M30.428 14.663l-13.095-13.094c-0.35-0.349-0.833-0.565-1.367-0.565s-1.017 0.216-1.367 0.565l0-0-2.713 2.718 3.449 3.449c0.22-0.077 0.473-0.121 0.737-0.121 1.269 0 2.297 1.028 2.297 2.297 0 0.269-0.046 0.526-0.131 0.766l0.005-0.016 3.322 3.324c0.222-0.079 0.479-0.125 0.746-0.125 1.268 0 2.296 1.028 2.296 2.296s-1.028 2.296-2.296 2.296c-1.268 0-2.296-1.028-2.296-2.296 0-0.313 0.063-0.611 0.176-0.883l-0.006 0.015-3.11-3.094v8.154c0.764 0.385 1.279 1.163 1.279 2.061 0 1.27-1.030 2.3-2.3 2.3s-2.3-1.030-2.3-2.3c0-0.634 0.256-1.207 0.671-1.623l-0 0c0.211-0.211 0.462-0.382 0.741-0.502l0.015-0.006v-8.234c-0.842-0.354-1.422-1.173-1.422-2.126 0-0.32 0.065-0.624 0.183-0.901l-0.006 0.015-3.389-3.405-8.98 8.974c-0.348 0.351-0.562 0.834-0.562 1.368s0.215 1.017 0.563 1.368l13.096 13.092c0.349 0.35 0.832 0.566 1.366 0.566s1.016-0.216 1.366-0.566l13.034-13.034c0.35-0.349 0.567-0.833 0.567-1.366s-0.217-1.017-0.567-1.366l-0-0z"></path></svg>`;
});
const Javascript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><title>JavaScript</title><path d="M75 177v850h850v-850h-850zM722 562q39 0 66.5 15t46.5 49l-62 40q-10 -18 -22 -26t-29 -8t-27.5 9.5t-10.5 24.5q0 17 11 28q10 9 38 21l20 8q55 24 78 49q28 30 28 77q0 52 -38 82q-36 29 -95 29q-53 0 -91 -23q-35 -22 -54 -59l65 -37q14 23 31 35q20 13 48 13
q24 0 39 -11t15 -29t-15 -30q-11 -8 -43 -22l-20 -9q-48 -20 -70 -45q-26 -29 -26 -75t32 -76t85 -30zM458 567h80v273q0 60 -34 91q-31 29 -86 29q-45 0 -77 -21q-27 -19 -43 -52l66 -39q11 21 20 29q12 12 31 12q21 0 31 -10q12 -12 12 -40v-272z"></path></svg>`;
});
const Kotlin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Kotlin</title><path d="M1.734 32l15.068-15.333 15.198 15.333zM0 0h16l-16 16.667zM17.865 0l-17.865 18.667v13.333l32-32z"></path></svg>`;
});
const Mysql = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>MySQL</title><path d="M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927c-.03-1.562-.123-3.03-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01c-.103 1.323-.168 2.793-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008L4.25 13.34h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.79h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483h.88zM22.112 18.87h-2.63v-5.53h.885v4.85h1.745zM18.792 19.005l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.763c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zM13.842 17.338c0 .47-.172.856-.516 1.156s-.803.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22.188-.147.3-.354.3-.615 0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476c-.36-.152-.715-.23-1.064-.23-.283 0-.502.068-.654.206-.153.136-.248.31-.248.524 0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zM23.224 11.486c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193-.194-.26-.435-.487-.695-.675-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395-.34-.295-.717-.582-1.104-.823-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514-.192-.368-.38-.775-.547-1.163-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133-.12-.12-.255-.267-.35-.4-.28-.377-.527-.79-.747-1.218-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303-.087-.124-.18-.285-.24-.427-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46.876.556 1.596 1.345 2.085 2.286.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path></svg>`;
});
const Nodejs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M24.871 18.491c0-2.374-1.605-3.007-4.982-3.453-3.413-0.451-3.76-0.685-3.76-1.483 0-0.66 0.294-1.541 2.822-1.541 2.258 0 3.090 0.486 3.433 2.008 0.032 0.143 0.158 0.248 0.309 0.249h1.426c0.092-0.001 0.174-0.040 0.232-0.101l0-0c0.053-0.057 0.085-0.133 0.085-0.217 0-0.010-0-0.019-0.001-0.029l0 0.001c-0.221-2.622-1.963-3.844-5.483-3.844-3.134 0-5.004 1.322-5.004 3.54 0 2.406 1.859 3.070 4.867 3.368 3.599 0.352 3.878 0.878 3.878 1.586 0 1.228-0.986 1.752-3.302 1.752-2.908 0-3.548-0.73-3.763-2.177-0.025-0.153-0.156-0.269-0.315-0.269-0 0-0.001 0-0.001 0h-1.421c-0.001 0-0.001 0-0.002 0-0.174 0-0.315 0.141-0.315 0.315 0 0 0 0.001 0 0.001v-0c0 1.852 1.007 4.059 5.817 4.059 3.484 0.001 5.481-1.369 5.481-3.765zM15.998 30.996c-0 0-0.001 0-0.001 0-0.424 0-0.821-0.115-1.162-0.315l0.011 0.006-3.669-2.171c-0.547-0.306-0.28-0.415-0.1-0.479 0.633-0.2 1.183-0.456 1.691-0.773l-0.031 0.018c0.034-0.016 0.075-0.026 0.117-0.026 0.058 0 0.111 0.018 0.156 0.048l-0.001-0.001 2.819 1.673c0.049 0.027 0.108 0.042 0.17 0.042s0.121-0.016 0.172-0.043l-0.002 0.001 10.991-6.343c0.101-0.062 0.167-0.171 0.167-0.296 0-0 0-0.001 0-0.001v0-12.684c-0-0.128-0.068-0.239-0.17-0.302l-0.002-0.001-10.986-6.338c-0.049-0.028-0.107-0.044-0.169-0.044s-0.121 0.016-0.171 0.045l0.002-0.001-10.983 6.34c-0.104 0.062-0.172 0.174-0.174 0.301v12.684c0 0.126 0.070 0.235 0.172 0.293l0.002 0.001 3.010 1.739c1.633 0.817 2.634-0.145 2.634-1.112v-12.523c0-0 0-0 0-0 0-0.174 0.141-0.316 0.316-0.316 0.001 0 0.003 0 0.004 0h1.393c0 0 0.001 0 0.001 0 0.175 0 0.317 0.141 0.318 0.316v12.523c0.016 0.118 0.026 0.255 0.026 0.394 0 1.682-1.363 3.045-3.045 3.045-0.082 0-0.164-0.003-0.245-0.010l0.011 0.001c-0.024 0-0.053 0.001-0.082 0.001-0.906 0-1.753-0.256-2.47-0.701l0.020 0.012-2.884-1.658c-0.694-0.409-1.152-1.153-1.152-2.004 0-0 0-0 0-0v0-12.684c0-0.851 0.458-1.594 1.141-1.997l0.011-0.006 10.991-6.351c0.333-0.186 0.731-0.295 1.155-0.295s0.821 0.109 1.167 0.301l-0.012-0.006 10.989 6.351c0.695 0.409 1.154 1.152 1.155 2.003v12.684c-0.002 0.851-0.46 1.595-1.144 1.998l-0.011 0.006-10.989 6.346c-0.33 0.194-0.726 0.309-1.149 0.309-0.002 0-0.005 0-0.007 0h0z"></path></svg>`;
});
const Php = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>PHP</title><path d="M23.205 13.759h-1.178l-0.645 3.309h1.047c0.056 0.004 0.122 0.007 0.188 0.007 0.507 0 0.978-0.149 1.374-0.405l-0.010 0.006c0.371-0.33 0.623-0.786 0.688-1.301l0.001-0.010c0.048-0.138 0.076-0.296 0.076-0.461 0-0.291-0.087-0.562-0.236-0.788l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001zM26.448 15.486c-0.075 0.398-0.208 0.753-0.39 1.076l0.009-0.017c-0.194 0.338-0.427 0.628-0.698 0.876l-0.003 0.002c-0.316 0.302-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.472 0.207-0.048 0-0.095-0.001-0.142-0.002l0.007 0h-1.475l-0.409 2.102h-1.722l1.537-7.905h3.31c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.512 0.933 0.512 1.5 0 0.245-0.036 0.482-0.103 0.705l0.004-0.017zM16.955 18.317l0.679-3.498c0.035-0.095 0.055-0.204 0.055-0.318 0-0.183-0.052-0.354-0.142-0.499l0.002 0.004c-0.195-0.142-0.439-0.228-0.703-0.228-0.055 0-0.109 0.004-0.162 0.011l0.006-0.001h-1.365l-0.88 4.53h-1.709l1.537-7.906h1.708l-0.409 2.102h1.522c0.093-0.010 0.2-0.016 0.309-0.016 0.625 0 1.205 0.193 1.683 0.524l-0.010-0.006c0.257 0.291 0.414 0.676 0.414 1.097 0 0.188-0.031 0.369-0.089 0.538l0.003-0.012-0.715 3.679zM11.926 17.423c-0.316 0.303-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.471 0.207-0.047 0-0.095-0.001-0.142-0.002l0.007 0h-1.476l-0.409 2.101h-1.722l1.537-7.905h3.312c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.511 0.933 0.511 1.5 0 0.246-0.036 0.483-0.103 0.707l0.004-0.017c-0.146 0.774-0.533 1.441-1.079 1.934l-0.003 0.003zM16 8.112c-8.281 0-14.996 3.531-14.996 7.888s6.714 7.889 14.996 7.889 14.996-3.533 14.996-7.889-6.714-7.888-14.996-7.888zM9.764 13.759h-1.18l-0.644 3.309h1.047c0.056 0.004 0.121 0.007 0.187 0.007 0.507 0 0.979-0.149 1.375-0.405l-0.010 0.006c0.371-0.329 0.622-0.786 0.686-1.301l0.001-0.010c0.049-0.138 0.077-0.297 0.077-0.462 0-0.29-0.086-0.561-0.235-0.786l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001z"></path></svg>`;
});
const Postgresql = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>PostgreSQL</title><path d="M22.839 0c-1.245 0.011-2.479 0.188-3.677 0.536l-0.083 0.027c-0.751-0.131-1.516-0.203-2.276-0.219-1.573-0.027-2.923 0.353-4.011 0.989-1.073-0.369-3.297-1.016-5.641-0.885-1.629 0.088-3.411 0.583-4.735 1.979-1.312 1.391-2.009 3.547-1.864 6.485 0.041 0.807 0.271 2.124 0.656 3.837 0.38 1.709 0.917 3.709 1.589 5.537 0.672 1.823 1.405 3.463 2.552 4.577 0.572 0.557 1.364 1.032 2.296 0.991 0.652-0.027 1.24-0.313 1.751-0.735 0.249 0.328 0.516 0.468 0.755 0.599 0.308 0.167 0.599 0.281 0.907 0.355 0.552 0.14 1.495 0.323 2.599 0.135 0.375-0.063 0.771-0.187 1.167-0.359 0.016 0.437 0.032 0.869 0.047 1.307 0.057 1.38 0.095 2.656 0.505 3.776 0.068 0.183 0.251 1.12 0.969 1.953 0.724 0.833 2.129 1.349 3.739 1.005 1.131-0.24 2.573-0.677 3.532-2.041 0.948-1.344 1.375-3.276 1.459-6.412 0.020-0.172 0.047-0.312 0.072-0.448l0.224 0.021h0.027c1.208 0.052 2.521-0.12 3.62-0.631 0.968-0.448 1.703-0.901 2.239-1.708 0.131-0.199 0.281-0.443 0.319-0.86 0.041-0.411-0.199-1.063-0.595-1.364-0.791-0.604-1.291-0.375-1.828-0.26-0.525 0.115-1.063 0.176-1.599 0.192 1.541-2.593 2.645-5.353 3.276-7.792 0.375-1.443 0.584-2.771 0.599-3.932 0.021-1.161-0.077-2.187-0.771-3.077-2.177-2.776-5.235-3.548-7.599-3.573-0.073 0-0.145 0-0.219 0zM22.776 0.855c2.235-0.021 5.093 0.604 7.145 3.228 0.464 0.589 0.6 1.448 0.584 2.511s-0.213 2.328-0.573 3.719c-0.692 2.699-2.011 5.833-3.859 8.652 0.063 0.047 0.135 0.088 0.208 0.115 0.385 0.161 1.265 0.296 3.025-0.063 0.443-0.095 0.767-0.156 1.105 0.099 0.167 0.14 0.255 0.349 0.244 0.568-0.020 0.161-0.077 0.317-0.177 0.448-0.339 0.509-1.009 0.995-1.869 1.396-0.76 0.353-1.855 0.536-2.817 0.547-0.489 0.005-0.937-0.032-1.319-0.152l-0.020-0.004c-0.147 1.411-0.484 4.203-0.704 5.473-0.176 1.025-0.484 1.844-1.072 2.453-0.589 0.615-1.417 0.979-2.537 1.219-1.385 0.297-2.391-0.021-3.041-0.568s-0.948-1.276-1.125-1.719c-0.124-0.307-0.187-0.703-0.249-1.235-0.063-0.531-0.104-1.177-0.136-1.911-0.041-1.12-0.057-2.24-0.041-3.365-0.577 0.532-1.296 0.88-2.068 1.016-0.921 0.156-1.739 0-2.228-0.12-0.24-0.063-0.475-0.151-0.693-0.271-0.229-0.12-0.443-0.255-0.588-0.527-0.084-0.156-0.109-0.337-0.073-0.509 0.041-0.177 0.145-0.328 0.287-0.443 0.265-0.215 0.615-0.333 1.14-0.443 0.959-0.199 1.297-0.333 1.5-0.496 0.172-0.135 0.371-0.416 0.713-0.828 0-0.015 0-0.036-0.005-0.052-0.619-0.020-1.224-0.181-1.771-0.479-0.197 0.208-1.224 1.292-2.468 2.792-0.521 0.624-1.099 0.984-1.713 1.011-0.609 0.025-1.163-0.281-1.631-0.735-0.937-0.912-1.688-2.48-2.339-4.251s-1.177-3.744-1.557-5.421c-0.375-1.683-0.599-3.037-0.631-3.688-0.14-2.776 0.511-4.645 1.625-5.828s2.641-1.625 4.131-1.713c2.672-0.151 5.213 0.781 5.724 0.979 0.989-0.672 2.265-1.088 3.859-1.063 0.756 0.011 1.505 0.109 2.24 0.292l0.027-0.016c0.323-0.109 0.651-0.208 0.984-0.28 0.907-0.215 1.833-0.324 2.76-0.339zM22.979 1.745h-0.197c-0.76 0.009-1.527 0.099-2.271 0.26 1.661 0.735 2.916 1.864 3.801 3 0.615 0.781 1.12 1.64 1.505 2.557 0.152 0.355 0.251 0.651 0.303 0.88 0.031 0.115 0.047 0.213 0.057 0.312 0 0.052 0.005 0.105-0.021 0.193 0 0.005-0.005 0.016-0.005 0.021 0.043 1.167-0.249 1.957-0.287 3.072-0.025 0.808 0.183 1.756 0.235 2.792 0.047 0.973-0.072 2.041-0.703 3.093 0.052 0.063 0.099 0.125 0.151 0.193 1.672-2.636 2.88-5.547 3.521-8.032 0.344-1.339 0.525-2.552 0.541-3.509 0.016-0.959-0.161-1.657-0.391-1.948-1.792-2.287-4.213-2.871-6.24-2.885zM16.588 2.088c-1.572 0.005-2.703 0.48-3.561 1.193-0.887 0.74-1.48 1.745-1.865 2.781-0.464 1.224-0.625 2.411-0.688 3.219l0.021-0.011c0.475-0.265 1.099-0.536 1.771-0.687 0.667-0.157 1.391-0.204 2.041 0.052 0.657 0.249 1.193 0.848 1.391 1.749 0.939 4.344-0.291 5.959-0.744 7.177-0.172 0.443-0.323 0.891-0.443 1.349 0.057-0.011 0.115-0.027 0.172-0.032 0.323-0.025 0.572 0.079 0.719 0.141 0.459 0.192 0.771 0.588 0.943 1.041 0.041 0.12 0.072 0.244 0.093 0.38 0.016 0.052 0.027 0.109 0.027 0.167-0.052 1.661-0.048 3.323 0.015 4.984 0.032 0.719 0.079 1.349 0.136 1.849 0.057 0.495 0.135 0.875 0.188 1.005 0.171 0.427 0.421 0.984 0.875 1.364 0.448 0.381 1.093 0.631 2.276 0.381 1.025-0.224 1.656-0.527 2.077-0.964 0.423-0.443 0.672-1.052 0.833-1.984 0.245-1.401 0.729-5.464 0.787-6.224-0.025-0.579 0.057-1.021 0.245-1.36 0.187-0.344 0.479-0.557 0.735-0.672 0.124-0.057 0.244-0.093 0.343-0.125-0.104-0.145-0.213-0.291-0.323-0.432-0.364-0.443-0.667-0.937-0.891-1.463-0.104-0.22-0.219-0.439-0.344-0.647-0.176-0.317-0.4-0.719-0.635-1.172-0.469-0.896-0.979-1.989-1.245-3.052-0.265-1.063-0.301-2.161 0.376-2.932 0.599-0.688 1.656-0.973 3.233-0.812-0.047-0.141-0.072-0.261-0.151-0.443-0.359-0.844-0.828-1.636-1.391-2.355-1.339-1.713-3.511-3.412-6.859-3.469zM7.735 2.156c-0.167 0-0.339 0.005-0.505 0.016-1.349 0.079-2.62 0.468-3.532 1.432-0.911 0.969-1.509 2.547-1.38 5.167 0.027 0.5 0.24 1.885 0.609 3.536 0.371 1.652 0.896 3.595 1.527 5.313 0.629 1.713 1.391 3.208 2.12 3.916 0.364 0.349 0.681 0.495 0.968 0.485 0.287-0.016 0.636-0.183 1.063-0.693 0.776-0.937 1.579-1.844 2.412-2.729-1.199-1.047-1.787-2.629-1.552-4.203 0.135-0.984 0.156-1.907 0.135-2.636-0.015-0.708-0.063-1.176-0.063-1.473 0-0.011 0-0.016 0-0.027v-0.005l-0.005-0.009c0-1.537 0.272-3.057 0.792-4.5 0.375-0.996 0.928-2 1.76-2.819-0.817-0.271-2.271-0.676-3.843-0.755-0.167-0.011-0.339-0.016-0.505-0.016zM24.265 9.197c-0.905 0.016-1.411 0.251-1.681 0.552-0.376 0.433-0.412 1.193-0.177 2.131 0.233 0.937 0.719 1.984 1.172 2.855 0.224 0.437 0.443 0.828 0.619 1.145 0.183 0.323 0.313 0.547 0.391 0.745 0.073 0.177 0.157 0.333 0.24 0.479 0.349-0.74 0.412-1.464 0.375-2.224-0.047-0.937-0.265-1.896-0.229-2.864 0.037-1.136 0.261-1.876 0.277-2.751-0.324-0.041-0.657-0.068-0.985-0.068zM13.287 9.355c-0.276 0-0.552 0.036-0.823 0.099-0.537 0.131-1.052 0.328-1.537 0.599-0.161 0.088-0.317 0.188-0.463 0.303l-0.032 0.025c0.011 0.199 0.047 0.667 0.063 1.365 0.016 0.76 0 1.728-0.145 2.776-0.323 2.281 1.333 4.167 3.276 4.172 0.115-0.469 0.301-0.944 0.489-1.443 0.541-1.459 1.604-2.521 0.708-6.677-0.145-0.677-0.437-0.953-0.839-1.109-0.224-0.079-0.457-0.115-0.697-0.109zM23.844 9.625h0.068c0.083 0.005 0.167 0.011 0.239 0.031 0.068 0.016 0.131 0.037 0.183 0.073 0.052 0.031 0.088 0.083 0.099 0.145v0.011c0 0.063-0.016 0.125-0.047 0.183-0.041 0.072-0.088 0.14-0.145 0.197-0.136 0.151-0.319 0.251-0.516 0.281-0.193 0.027-0.385-0.025-0.547-0.135-0.063-0.048-0.125-0.1-0.172-0.157-0.047-0.047-0.073-0.109-0.084-0.172-0.004-0.061 0.011-0.124 0.052-0.171 0.048-0.048 0.1-0.089 0.157-0.12 0.129-0.073 0.301-0.125 0.5-0.152 0.072-0.009 0.145-0.015 0.213-0.020zM13.416 9.849c0.068 0 0.147 0.005 0.22 0.015 0.208 0.032 0.385 0.084 0.525 0.167 0.068 0.032 0.131 0.084 0.177 0.141 0.052 0.063 0.077 0.14 0.073 0.224-0.016 0.077-0.048 0.151-0.1 0.208-0.057 0.068-0.119 0.125-0.192 0.172-0.172 0.125-0.385 0.177-0.599 0.151-0.215-0.036-0.412-0.14-0.557-0.301-0.063-0.068-0.115-0.141-0.157-0.219-0.047-0.073-0.067-0.156-0.057-0.24 0.021-0.14 0.141-0.219 0.256-0.26 0.131-0.043 0.271-0.057 0.411-0.052zM25.495 19.64h-0.005c-0.192 0.073-0.353 0.1-0.489 0.163-0.14 0.052-0.251 0.156-0.317 0.285-0.089 0.152-0.156 0.423-0.136 0.885 0.057 0.043 0.125 0.073 0.199 0.095 0.224 0.068 0.609 0.115 1.036 0.109 0.849-0.011 1.896-0.208 2.453-0.469 0.453-0.208 0.88-0.489 1.255-0.817-1.859 0.38-2.905 0.281-3.552 0.016-0.156-0.068-0.307-0.157-0.443-0.267zM14.787 19.765h-0.027c-0.072 0.005-0.172 0.032-0.375 0.251-0.464 0.52-0.625 0.848-1.005 1.151-0.385 0.307-0.88 0.469-1.875 0.672-0.312 0.063-0.495 0.135-0.615 0.192 0.036 0.032 0.036 0.043 0.093 0.068 0.147 0.084 0.333 0.152 0.485 0.193 0.427 0.104 1.124 0.229 1.859 0.104 0.729-0.125 1.489-0.475 2.141-1.385 0.115-0.156 0.124-0.391 0.031-0.641-0.093-0.244-0.297-0.463-0.437-0.52-0.089-0.043-0.183-0.068-0.276-0.084z"></path></svg>`;
});
const Postman = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Postman</title><path d="M18.036 0.131c-8.765-1.12-16.781 5.067-17.905 13.833-1.12 8.765 5.067 16.781 13.833 17.905 8.765 1.12 16.781-5.067 17.9-13.833 1.125-8.765-5.061-16.781-13.828-17.905zM21.328 10.115c-0.297 0-0.579 0.12-0.787 0.333l-5.937 5.932-0.411-0.407-0.855-0.859c5.849-5.833 6.907-5.891 7.989-5zM14.849 16.593l5.916-5.921c0.328-0.344 0.875-0.339 1.204 0.005 0.323 0.349 0.291 0.896-0.073 1.197l-6.265 5.5zM15.287 17.521l-1.469 0.317c-0.031 0.005-0.072-0.011-0.088-0.047-0.016-0.032-0.011-0.068 0.016-0.095l0.859-0.859zM11.547 16.907l1.568-1.563 1.172 1.172-2.641 0.567c-0.047 0.011-0.093-0.009-0.115-0.052-0.025-0.041-0.015-0.093 0.016-0.124zM6.688 24.984c-0.057-0.005-0.1-0.057-0.095-0.109 0.005-0.025 0.016-0.047 0.032-0.063h0.005l1.26-1.26 1.631 1.631zM9.921 23.307c-0.124 0.068-0.187 0.209-0.156 0.344l0.271 1.152c0.043 0.167-0.161 0.28-0.281 0.156h-0.005l-1.635-1.636 5.016-5.011 2.427-0.525 1.161 1.167c-1.672 1.468-3.959 2.932-6.797 4.353zM16.959 18.74l-1.12-1.12 6.265-5.5c0.057-0.052 0.109-0.109 0.156-0.167-0.192 1.792-2.703 4.323-5.301 6.787zM21.839 10.125h-0.005c-2.183-2.193 0.901-5.563 3.276-3.584l-2.145 2.152c-0.063 0.061-0.063 0.167 0 0.228l1.661 1.663c-0.932 0.463-2.052 0.276-2.787-0.459zM25.271 10.125c-0.109 0.109-0.229 0.208-0.359 0.291l-1.609-1.609 2.041-2.047c0.885 0.964 0.849 2.443-0.073 3.365zM25.14 8.068c-0.067 0.047-0.093 0.129-0.072 0.208 0.099 0.197 0.072 0.432-0.068 0.599-0.068 0.084-0.052 0.199 0.031 0.265 0.032 0.021 0.068 0.037 0.109 0.037 0.057 0 0.111-0.021 0.141-0.063 0.235-0.281 0.281-0.677 0.12-1.005-0.063-0.083-0.177-0.104-0.261-0.041z"></path></svg>`;
});
const SublimeText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="-3 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sublime text</title><path d="m.003 23.617v-5.687c.007-.298.194-.551.457-.654l.005-.002 7.453-2.361-7.454-2.366c-.181-.069-.323-.205-.398-.377l-.002-.005c-.038-.064-.061-.14-.061-.222 0-.005 0-.01 0-.014v.001-5.727c0-.003 0-.007 0-.01 0-.083.023-.161.064-.227l-.001.002c.077-.177.219-.313.395-.379l.005-.002 17.548-5.564c.036-.014.078-.022.121-.022.19 0 .343.154.343.343 0 .015-.001.029-.003.044v-.002 5.686c-.008.298-.195.55-.457.654l-.005.002-7.375 2.338 7.378 2.339c.268.105.455.358.462.656v.001 5.687.003c0 .036-.004.072-.011.106l.001-.003c-.043.258-.217.467-.45.558l-.005.002-17.549 5.564c-.038.013-.082.021-.128.022-.186-.005-.335-.158-.335-.345 0-.014.001-.028.003-.042v.002z"></path></svg>`;
});
const Svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>Svelte</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.438 2.94656C13.0222 3.84625 13.0826 4.82176 12.784 5.56064C12.2332 5.04017 11.5732 4.66735 10.8806 4.48388C10.8888 4.33095 10.8504 4.17412 10.7606 4.03584C10.535 3.68845 10.0705 3.58972 9.72314 3.81532L8.0472 4.90369C8.04673 4.90399 8.04627 4.90429 8.0458 4.9046L5.52979 6.53851C5.1824 6.76411 5.08367 7.22861 5.30926 7.57599C5.53486 7.92338 5.99936 8.02212 6.34675 7.79652L8.86347 6.16214C8.86323 6.16229 8.86371 6.16198 8.86347 6.16214C9.81822 5.54278 11.3592 5.87563 12.2475 7.24351C13.1361 8.61173 12.813 10.1553 11.8583 10.7753L6.82625 14.0431C5.87156 14.6631 4.33001 14.3304 3.44148 12.9622C2.85722 12.0625 2.79684 11.087 3.09545 10.3481C3.64623 10.8686 4.30624 11.2414 4.99882 11.4249C4.99062 11.5778 5.02903 11.7347 5.11882 11.8729C5.34442 12.2203 5.80892 12.3191 6.15631 12.0935L10.3497 9.37027C10.697 9.14467 10.7958 8.68017 10.5702 8.33279C10.3446 7.9854 9.88009 7.88666 9.5327 8.11226L7.01644 9.74634C7.01652 9.74629 7.01635 9.7464 7.01644 9.74634C6.06172 10.3661 4.52038 10.0334 3.63192 8.66527C2.74339 7.29705 3.06648 5.75348 4.02117 5.13349L9.0532 1.86566C10.0079 1.24567 11.5494 1.57834 12.438 2.94656ZM13.7667 6.88194C14.7218 5.56301 14.6705 3.63028 13.696 2.1296C12.4789 0.255528 10.0607 -0.577139 8.23624 0.607651L3.20422 3.87549C1.52381 4.96675 1.20205 7.21441 2.11271 9.02685C1.15769 10.3458 1.20893 12.2785 2.18348 13.7792C3.40052 15.6533 5.81879 16.4859 7.64321 15.3011L12.6752 12.0333C14.3556 10.942 14.6774 8.69437 13.7667 6.88194Z"></path></svg>`;
});
const TailwindCss = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><title>Tailwind CSS</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></svg>`;
});
const VisualStudioCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Visual Studio Code</title><path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"></path></svg>`;
});
const TypeScript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 -5 29 29" role="img" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"></path></svg>`;
});
const Ubuntu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Ubuntu</title><path d="M20.098 8.901c0.287 0.168 0.632 0.268 1 0.268 1.106 0 2.002-0.896 2.002-2.002s-0.896-2.002-2.002-2.002c-0.738 0-1.383 0.4-1.73 0.994l-0.005 0.010c-0.167 0.286-0.266 0.63-0.266 0.997 0 0.737 0.398 1.381 0.991 1.729l0.009 0.005zM16 10.152c3.047 0 5.549 2.331 5.822 5.307l0.002 0.023 2.855-0.043c-0.147-2.221-1.108-4.193-2.585-5.642l-0.001-0.001c-0.296 0.116-0.639 0.183-0.997 0.183-1.393 0-2.55-1.016-2.768-2.348l-0.002-0.016c-0.697-0.197-1.497-0.311-2.324-0.312h-0.001c-0.003 0-0.008 0-0.012 0-1.4 0-2.722 0.332-3.892 0.922l0.050-0.023 1.391 2.493c0.72-0.343 1.566-0.544 2.458-0.544 0.002 0 0.004 0 0.006 0h-0zM5.803 13.998c-0 0-0.001 0-0.001 0-1.106 0-2.002 0.896-2.002 2.002s0.896 2.002 2.002 2.002c1.106 0 2.002-0.896 2.002-2.002v0c0-0 0-0 0-0 0-1.105-0.896-2.001-2.001-2.002h-0zM10.152 16c0-0 0-0.001 0-0.001 0-1.971 0.975-3.714 2.469-4.773l0.018-0.012-1.462-2.451c-1.75 1.176-3.034 2.929-3.586 4.981l-0.014 0.061c0.635 0.513 1.037 1.291 1.037 2.163 0 0.004 0 0.008-0 0.011v-0.001c-0.002 0.875-0.404 1.656-1.032 2.169l-0.005 0.004c0.567 2.113 1.851 3.865 3.569 5.021l0.031 0.020 1.462-2.456c-1.51-1.047-2.487-2.771-2.487-4.724 0-0.005 0-0.011 0-0.016v0.001zM16 21.848c-0.001 0-0.003 0-0.005 0-0.892 0-1.738-0.2-2.493-0.559l0.035 0.015-1.391 2.493c1.121 0.568 2.445 0.901 3.846 0.901 0.83 0 1.633-0.117 2.393-0.335l-0.061 0.015c0.225-1.346 1.381-2.36 2.774-2.36 0.357 0 0.699 0.067 1.013 0.188l-0.019-0.007c1.48-1.449 2.441-3.421 2.585-5.616l0.001-0.026-2.855-0.041c-0.274 2.999-2.776 5.331-5.823 5.331h-0zM20.098 23.098c-0.602 0.353-1 0.996-1 1.732 0 1.105 0.896 2.001 2.001 2.001s2.001-0.896 2.001-2.001c0-0.369-0.1-0.715-0.274-1.012l0.005 0.009c-0.353-0.601-0.996-0.998-1.732-0.998-0.369 0-0.714 0.1-1.011 0.273l0.009-0.005zM16 1.004c8.282 0 14.996 6.714 14.996 14.996s-6.714 14.996-14.996 14.996c-8.282 0-14.996-6.714-14.996-14.996v0c0.004-8.28 6.715-14.992 14.995-14.996h0z"></path></svg>`;
});
const Laravel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Laravel</title><path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z"></path></svg>`;
});
const Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-custom-2 dark:bg-teal-800 border-y-4 border-slate-900 dark:border-white bg-no-repeat bg-cover bg-center overflow-hidden relative mb-4">${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="w-full pb-36 z-10">${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true
        },
        {},
        {
          default: () => {
            return `<h1 class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500" id="tools" data-svelte-h="svelte-1wjqgju">Development tools</h1>`;
          }
        }
      )}  ${validate_component(Saos, "Saos").$$render(
        $$result,
        {
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
          once: true
        },
        {},
        {
          default: () => {
            return `<div class="bg-slate-900 border-2 border-slate-900 w-full h-max flex flex-col md:flex-row justify-stretch"><div class="flex w-full md:w-[40%] flex-col"> ${validate_component(Saos, "Saos").$$render(
              $$result,
              {
                animation: "scale-up-center 2s cubic-bezier(0.4, 0, 0.2, 1) both",
                once: true
              },
              {},
              {
                default: () => {
                  return `<div class="w-full h-[250px] md:h-[350px] bg-accent border-2 border-slate-900 flex flex-col relative"><div class="border-b-4 w-full border-slate-900 absolute top-0 h-12 flex justify-start" data-svelte-h="svelte-9xyilv"><h4 class="my-auto mx-4">Mobile apps</h4></div> <div class="flex md:flex-wrap my-auto mx-2 gap-2 gap-y-4 pt-8 items-center justify-evenly"><div class="w-20 sm:w-24 xl:w-28">${validate_component(Dart, "Dart").$$render($$result, {}, {}, {})}</div> <div class="w-20 sm:w-24 xl:w-28">${validate_component(Flutter, "Flutter").$$render($$result, {}, {}, {})}</div> <div class="w-20 sm:w-24 xl:w-28">${validate_component(Kotlin, "Kotlin").$$render($$result, {}, {}, {})}</div> <div class="w-20 sm:w-24 xl:w-28">${validate_component(AndroidStudio, "AndroidStudio").$$render($$result, {}, {}, {})}</div></div></div>`;
                }
              }
            )}  ${validate_component(Saos, "Saos").$$render(
              $$result,
              {
                animation: "scale-up-center 2s cubic-bezier(0.4, 0, 0.2, 1) both",
                once: true
              },
              {},
              {
                default: () => {
                  return `<div class="w-full h-[200px] md:h-[300px] bg-custom-1 border-2 border-slate-900 flex relative"><div class="flex flex-wrap m-2 mx-auto my-auto px-2 pb-12 gap-2 items-center justify-evenly"><div class="w-16 md:w-20 xl:w-24">${validate_component(Codeigniter, "Codeigniter").$$render($$result, {}, {}, {})}</div> <div class="w-16 md:w-20 xl:w-24">${validate_component(Laravel, "Laravel").$$render($$result, {}, {}, {})}</div> <div class="w-16 md:w-20 xl:w-24">${validate_component(Nodejs, "Nodejs").$$render($$result, {}, {}, {})}</div> <div class="w-16 md:w-20 xl:w-24">${validate_component(Php, "Php").$$render($$result, {}, {}, {})}</div> <div class="w-16 md:w-20 xl:w-24">${validate_component(Postgresql, "Postgresql").$$render($$result, {}, {}, {})}</div> <div class="w-16 md:w-20 xl:w-24">${validate_component(Mysql, "Mysql").$$render($$result, {}, {}, {})}</div></div> <div class="border-t-4 w-full border-slate-900 h-12 absolute bottom-0 flex justify-start" data-svelte-h="svelte-zq3v8"><h4 class="my-auto mx-4">Back-end</h4></div></div>`;
                }
              }
            )}</div> <div class="flex w-full md:w-[60%] h-full flex-col"> ${validate_component(Saos, "Saos").$$render(
              $$result,
              {
                animation: "scale-up-center 2s cubic-bezier(0.4, 0, 0.2, 1) both",
                once: true
              },
              {},
              {
                default: () => {
                  return `<div class="w-full h-[200px] md:h-[300px] bg-secondary border-2 border-slate-900 flex relative"><div class="w-full flex flex-wrap my-auto pb-12 px-2 gap-2 justify-evenly"><div class="w-16 md:w-24 xl:w-28">${validate_component(Svelte, "Svelte").$$render($$result, {}, {}, {})}</div> <div class="w-[4.2rem] sm:w-20 md:w-24 xl:w-28">${validate_component(TailwindCss, "TailwindCss").$$render($$result, {}, {}, {})}</div> <div class="w-[4.2rem] sm:w-20 md:w-24 xl:w-28">${validate_component(Bootstrap, "Bootstrap").$$render($$result, {}, {}, {})}</div> <div class="w-[4.2rem] sm:w-20 md:w-24 xl:w-28">${validate_component(Javascript, "Javascript").$$render($$result, {}, {}, {})}</div> <div class="w-[4.2rem] sm:w-20 md:w-24 xl:w-28">${validate_component(TypeScript, "TypeScript").$$render($$result, {}, {}, {})}</div></div> <div class="border-t-4 w-full border-slate-900 h-12 absolute bottom-0 flex justify-start" data-svelte-h="svelte-1s0ia6g"><h4 class="my-auto mx-4">Front-end web</h4></div></div>`;
                }
              }
            )} <div class="flex"><div class="flex w-1/2 flex-col"> ${validate_component(Saos, "Saos").$$render(
              $$result,
              {
                animation: "scale-up-center 2s cubic-bezier(0.4, 0, 0.2, 1) both",
                once: true
              },
              {},
              {
                default: () => {
                  return `<div class="w-full h-[150px] bg-custom-4 border-2 border-slate-900 flex justify-center relative"><div class="w-full flex my-auto px-2 pb-12 gap-2 justify-evenly"><div class="w-20">${validate_component(Git, "Git").$$render($$result, {}, {}, {})}</div> <div class="w-20">${validate_component(Github, "Github").$$render($$result, {}, {}, {})}</div></div> <div class="border-t-4 w-full border-slate-900 h-12 absolute bottom-0 flex justify-start" data-svelte-h="svelte-i9zb5i"><h4 class="my-auto mx-4">DevOps</h4></div></div>`;
                }
              }
            )}  ${validate_component(Saos, "Saos").$$render(
              $$result,
              {
                animation: "scale-up-center 2s cubic-bezier(0.4, 0, 0.2, 1) both",
                once: true
              },
              {},
              {
                default: () => {
                  return `<div class="w-full h-[200px] bg-custom-3 border-2 border-slate-900"><div class="border-b-4 w-full border-slate-900 h-12 flex justify-start" data-svelte-h="svelte-1vq072j"><h4 class="my-auto mx-4">Design</h4></div> <div class="w-full flex my-auto md:my-0 px-2 pt-12 md:pt-6 gap-2 gap-y-4 justify-evenly"><div class="w-20 stroke-black">${validate_component(Figma, "Figma").$$render($$result, {}, {}, {})}</div> <div class="w-20">${validate_component(AdobeIllustrator, "AdobeIllustrator").$$render($$result, {}, {}, {})}</div> <div class="w-20">${validate_component(AdobePhotoshop, "AdobePhotoshop").$$render($$result, {}, {}, {})}</div></div></div>`;
                }
              }
            )}</div> <div class="w-1/2 h-[350px]"> ${validate_component(Saos, "Saos").$$render(
              $$result,
              {
                animation: "scale-up-center 2s cubic-bezier(0.4, 0, 0.2, 1) both",
                once: true
              },
              {},
              {
                default: () => {
                  return `<div class="flex flex-col bg-custom-2 border-2 border-slate-900 h-[350px]"><div class="border-b-4 w-full border-slate-900 h-12 flex justify-start" data-svelte-h="svelte-1lpblss"><h4 class="my-auto mx-4">Others</h4></div> <div class="mx-auto md:mx-0 my-auto flex gap-2 md:flex-row flex-wrap justify-evenly"><div class="w-20 lg:w-24">${validate_component(VisualStudioCode, "VisualStudioCode").$$render($$result, {}, {}, {})}</div> <div class="w-20 lg:w-24">${validate_component(SublimeText, "SublimeText").$$render($$result, {}, {}, {})}</div> <div class="w-20 lg:w-24">${validate_component(Postman, "Postman").$$render($$result, {}, {}, {})}</div> <div class="w-20 lg:w-24">${validate_component(Ubuntu, "Ubuntu").$$render($$result, {}, {}, {})}</div></div></div>`;
                }
              }
            )}</div></div></div></div>`;
          }
        }
      )}</div>`;
    }
  })}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Portfolio, "Portfolio").$$render(
    $$result,
    {
      fetch: data.fetch,
      projectService: data.projectService
    },
    {},
    {}
  )} ${validate_component(Tools, "Tools").$$render($$result, {}, {}, {})} ${validate_component(Social, "Social").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
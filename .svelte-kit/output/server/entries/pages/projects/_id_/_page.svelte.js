import { i as is_promise, n as noop, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as each } from "../../../../chunks/ssr.js";
import { p as projectDetail } from "../../../../chunks/store.js";
import "../../../../chunks/index.js";
import { marked } from "marked";
import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
import { F as Fa, B as Button } from "../../../../chunks/fa.js";
import { faStar, faCodeFork, faDownload, faCode, faExternalLink, faWarning, faArrowLeft, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { W as Wrappper } from "../../../../chunks/Wrappper.js";
const tagColors = {
  default: { bg: "bg-slate-400", border: "dark:border-slate-400", text: "dark:text-slate-400" },
  flutter: { bg: "bg-sky-400", border: "dark:border-sky-400", text: "dark:text-sky-400" },
  dart: { bg: "bg-teal-500", border: "dark:border-teal-500", text: "dark:text-teal-500" },
  html: { bg: "bg-rose-400", border: "dark:border-rose-400", text: "dark:text-rose-400" },
  php: { bg: "bg-indigo-300", border: "dark:border-indigo-300", text: "dark:text-indigo-300" },
  codeigniter: { bg: "bg-red-400", border: "dark:border-red-400", text: "dark:text-red-400" },
  javascript: {
    bg: "bg-yellow-400",
    border: "dark:border-yellow-400",
    text: "dark:text-yellow-400"
  },
  typescript: { bg: "bg-red-400", border: "dark:border-red-400", text: "dark:text-red-400" },
  svelte: { bg: "bg-orange-400", border: "dark:border-orange-400", text: "dark:text-orange-400" }
};
const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
  return `<h${level} class="my-4 dark:text-white">${text}</h${level}>`;
};
renderer.paragraph = (text) => {
  return `<span class="text-slate-600 dark:text-slate-300 mb-2">${text}</span>`;
};
renderer.strong = (text) => {
  return `<span class="font-bold text-black dark:text-white">${text}</span>`;
};
renderer.list = (body, ordered) => {
  const type = ordered ? "ol" : "ul";
  return '<div class="my-4"><' + type + 'start="0">\n' + body + "</" + type + "></div>\n";
};
renderer.listitem = (text) => {
  return `<li class="mb-2">${text}</li>
`;
};
renderer.image = (href, title, text) => {
  return `<img class="my-4" src=${href} alt=${title ?? text} />`;
};
renderer.table = (header, body) => {
  if (body)
    body = `<tbody>${body}</tbody>`;
  return '<table class="border-collapse border border-slate-500">\n<thead>\n' + header + "</thead>\n" + body + "</table>\n";
};
renderer.tablecell = (content, flags) => {
  const type = flags.header ? "th" : "td";
  const tag = flags.align ? `<${type} align="${flags.align}" class="border-collapse border border-slate-500 px-4 py-2">` : `<${type} class="border-collapse border border-slate-500 px-4 py-2">`;
  return tag + content + `</${type}>
`;
};
renderer.link = (href, title, text) => {
  if (href === null) {
    return text;
  }
  let out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += ' class="text-blue-500 dark:text-sky-500 hover:text-blue-300 dark:hover:text-sky-300 hover:underline">' + text + "</a>";
  return out;
};
renderer.codespan = (code) => {
  return `<pre class="inline-block bg-slate-200 dark:bg-slate-700 px-2 py-0.5 mb-4"><code class="text-text dark:text-slate-50">${code}</code></pre>`;
};
renderer.html = (html, block) => {
  return `<div class="${block ? "block" : "inline"} my-5">${html}</div>`;
};
const ProjectDetail_svelte_svelte_type_style_lang = "";
const css = {
  code: ".markdown-content.svelte-p3pqed>a.svelte-p3pqed{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))\n}.markdown-content.svelte-p3pqed>a.svelte-p3pqed:hover{--tw-text-opacity:1;color:rgb(147 197 253 / var(--tw-text-opacity));text-decoration-line:underline\n}.svelte-p3pqed.svelte-p3pqed:is(.dark .markdown-content > a){--tw-text-opacity:1;color:rgb(14 165 233 / var(--tw-text-opacity))\n}.svelte-p3pqed.svelte-p3pqed:is(.dark .markdown-content > a:hover){--tw-text-opacity:1;color:rgb(125 211 252 / var(--tw-text-opacity))\n}",
  map: null
};
const ProjectDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let { markdownPromise } = $$props;
  const secondaryButton = { key: "secondary" };
  marked.use({ renderer }, markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }, true).value;
    }
  }));
  const tags = project.tags.map((tag) => {
    return Object.prototype.hasOwnProperty.call(tagColors, tag) ? { key: tag, name: tag } : { key: "default", name: tag };
  });
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.markdownPromise === void 0 && $$bindings.markdownPromise && markdownPromise !== void 0)
    $$bindings.markdownPromise(markdownPromise);
  $$result.css.add(css);
  return `<section class="mt-16 svelte-p3pqed">${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="mt-16 w-full svelte-p3pqed"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 svelte-p3pqed">${escape(project.name)}</h1>  <div class="w-full grid grid-cols-1 grid-flow-row grid-rows-2 lg:flex lg:flex-row-reverse lg:justify-between gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32 svelte-p3pqed"> <div class="w-full border flex items-center svelte-p3pqed"><img class="w-full svelte-p3pqed"${add_attribute("src", project.imageUrl, 0)} alt="Preview"></div>  <div class="w-full svelte-p3pqed"><p class="dark:text-slate-300 text-center sm:text-left svelte-p3pqed">${escape(project.description)}</p>  <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white font-poppins svelte-p3pqed"><div class="flex gap-2 items-center svelte-p3pqed">${validate_component(Fa, "Fa").$$render($$result, { icon: faStar }, {}, {})} ${escape(project.starsCount)} ${escape((project.starsCount ?? 0) <= 1 ? "Star" : "Stars")}</div> <div class="flex gap-2 items-center svelte-p3pqed">${validate_component(Fa, "Fa").$$render($$result, { icon: faCodeFork }, {}, {})} ${escape(project.forksCount)} ${escape((project.forksCount ?? 0) <= 1 ? "Fork" : "Forks")}</div> <div class="flex gap-2 items-center svelte-p3pqed">${validate_component(Fa, "Fa").$$render($$result, { icon: faDownload }, {}, {})} ${escape(project.downloadsCount)} ${escape((project.downloadsCount ?? 0) <= 1 ? "Download" : "Downloads")}</div></div>  <div class="flex w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden svelte-p3pqed">${each(tags, (tag) => {
        return `<p class="${escape(tagColors[tag.key].bg, true) + " " + escape(tagColors[tag.key].border, true) + " " + escape(tagColors[tag.key].text, true) + " dark:bg-slate-800 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2 border-slate-900 svelte-p3pqed"}">#${escape(tag.name)} </p>`;
      })}</div>  <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8 svelte-p3pqed"><a${add_attribute("href", project.repositoryUrl, 0)} target="_blank" class="svelte-p3pqed">${validate_component(Button, "Button").$$render($$result, { noDarkVariant: false }, {}, {
        icon: () => {
          return `${validate_component(Fa, "Fa").$$render($$result, { icon: faCode, slot: "icon" }, {}, {})}`;
        },
        default: () => {
          return `Source code`;
        }
      })}</a> ${project.hasLivePreview && project.livePreviewUrl ? `<a${add_attribute("href", project.livePreviewUrl, 0)} target="_blank" class="svelte-p3pqed">${validate_component(Button, "Button").$$render(
        $$result,
        {
          noDarkVariant: false,
          variant: secondaryButton
        },
        {},
        {
          icon: () => {
            return `${validate_component(Fa, "Fa").$$render($$result, { icon: faExternalLink, slot: "icon" }, {}, {})}`;
          },
          default: () => {
            return `Live preview`;
          }
        }
      )}</a>` : ``}</div></div></div>  <hr class="mt-16 border border-slate-700 dark:border-slate-300 svelte-p3pqed"> <a${add_attribute("href", project.readmeUrl, 0)} class="hover:underline svelte-p3pqed"><h4 class="dark:text-white my-2 svelte-p3pqed">${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return `
						Loading...
					`;
        }
        return function() {
          return `
						README.md
					`;
        }();
      }(markdownPromise)}</h4></a> <hr class="mb-16 md:mb-24 border border-slate-700 dark:border-slate-300 svelte-p3pqed">  <div class="mb-24 svelte-p3pqed">${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ``;
        }
        return function(markdown) {
          return ` <p class="text-slate-600 dark:text-slate-300 markdown-content svelte-p3pqed"><!-- HTML_TAG_START -->${marked(markdown ?? "", { headerIds: false, mangle: false })}<!-- HTML_TAG_END --></p> `;
        }(__value);
      }(markdownPromise)}</div></div>`;
    }
  })}</section> <div class="markdown-content hidden svelte-p3pqed" data-svelte-h="svelte-1ugwj49"><a href="/" class="svelte-p3pqed">_</a></div>`;
});
const ProjectDetailError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  const disabledButton = { key: "disabled" };
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `<section class="mt-16">${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="mt-16 w-full mb-32"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16" data-svelte-h="svelte-dhjqyt">Error!</h1>  <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"> <div class="w-full bg-red-600 dark:bg-red-400 aspect-[2/1] flex p-2"><div class="m-auto inline-flex flex-wrap gap-2 justify-center items-center"><h1 class="text-center text-white dark:text-text">${validate_component(Fa, "Fa").$$render($$result, { icon: faWarning }, {}, {})}</h1> <h2 class="text-center text-white dark:text-text">${escape(project.description)}</h2></div></div>  <div class="w-full"><p class="dark:text-slate-300 text-center sm:text-left">${escape(project.description)}</p>  <div class="pt-4 flex gap-4 w-full justify-center sm:justify-normal dark:text-white"><div class="flex gap-2 items-center">${validate_component(Fa, "Fa").$$render($$result, { icon: faStar }, {}, {})} ${escape(project.starsCount ?? "Unknown")} ${escape((project.starsCount ?? 0) <= 1 ? "Star" : "Stars")}</div> <div class="flex gap-2 items-center">${validate_component(Fa, "Fa").$$render($$result, { icon: faCodeFork }, {}, {})} ${escape(project.forksCount ?? "Unknown")} ${escape((project.forksCount ?? 0) <= 1 ? "Fork" : "Forks")}</div> <div class="flex gap-2 items-center">${validate_component(Fa, "Fa").$$render($$result, { icon: faDownload }, {}, {})} ${escape(project.downloadsCount ?? "Unknown")} ${escape((project.downloadsCount ?? 0) <= 1 ? "Download" : "Downloads")}</div></div>  <div class="flex w-full justify-center sm:justify-start items-center gap-2 py-4 overflow-hidden" data-svelte-h="svelte-s416au"><p class="dark:bg-slate-800 border-slate-900 dark:text-slate-300 dark:border-slate-300 max-sm:text-sm px-2 sm:px-4 py-1 h-max border-2">#error</p></div>  <div class="my-4 md:my-6 lg:my-8 flex w-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8"><a href="/" class="flex">${validate_component(Button, "Button").$$render(
        $$result,
        {
          noDarkVariant: false,
          variant: disabledButton
        },
        {},
        {
          icon: () => {
            return `${validate_component(Fa, "Fa").$$render($$result, { icon: faArrowLeft, slot: "icon" }, {}, {})}`;
          },
          default: () => {
            return `Back`;
          }
        }
      )}</a></div></div></div></div>`;
    }
  })}</section>`;
});
const ProjectDetailLoading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const disabledButton = { key: "disabled" };
  return `<section class="mt-16">${validate_component(Wrappper, "Wrappper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="mt-16 w-full"><h1 class="dark:text-white mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-bounce" data-svelte-h="svelte-zrusrc">Loading...</h1> <div class="w-full justify-between flex flex-col lg:flex-row-reverse gap-4 md:gap-8 lg:gap-12 mb-24 lg:mb-32"><div class="w-full bg-primary animate-pulse aspect-[2/1] flex items-center"><h1 class="text-center m-auto text-white dark:text-text inline-flex gap-2 animate-bounce"><span class="animate-spin">${validate_component(Fa, "Fa").$$render($$result, { icon: faRefresh }, {}, {})}</span>Loading...</h1></div> <div class="w-full"><p class="dark:text-slate-300" data-svelte-h="svelte-1f5kk0o">Fetching data...</p> <div class="my-4 md:my-6 lg:my-8 flex gap-4 md:gap-6 lg:gap-8">${validate_component(Button, "Button").$$render(
        $$result,
        {
          noDarkVariant: false,
          variant: disabledButton
        },
        {},
        {
          default: () => {
            return `Loading`;
          }
        }
      )}</div></div></div></div>`;
    }
  })}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projectDetail, $$unsubscribe_projectDetail;
  $$unsubscribe_projectDetail = subscribe(projectDetail, (value) => $projectDetail = value);
  let { data } = $$props;
  let markdownPromise;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_projectDetail();
  return `${$$result.head += `<!-- HEAD_svelte-xvvkze_START -->${$$result.title = `<title>${escape(data.project.name)}</title>`, ""}<!-- HEAD_svelte-xvvkze_END -->`, ""} <main>${!$projectDetail ? `${validate_component(ProjectDetailLoading, "ProjectDetailLoading").$$render($$result, {}, {}, {})}` : `${$projectDetail.name !== "error" && $projectDetail.name !== "limit" ? `${validate_component(ProjectDetail, "ProjectDetail").$$render($$result, { project: $projectDetail, markdownPromise }, {}, {})}` : `${validate_component(ProjectDetailError, "ProjectDetailError").$$render($$result, { project: $projectDetail }, {}, {})}`}`}</main>`;
});
export {
  Page as default
};

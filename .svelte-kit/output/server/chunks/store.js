import { d as derived, w as writable } from "./index.js";
const projectsStore = writable([]);
const projectDetailStore = writable();
derived(
  projectsStore,
  ($projects) => $projects
);
const projectDetail = derived(
  projectDetailStore,
  ($projectDetail) => $projectDetail
);
export {
  projectsStore as a,
  projectDetailStore as b,
  projectDetail as p
};

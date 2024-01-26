import { P as ProjectService } from "../../chunks/service.js";
import "../../chunks/store.js";
const load = async ({ fetch }) => {
  const projectService = new ProjectService();
  return { fetch, projectService };
};
export {
  load
};

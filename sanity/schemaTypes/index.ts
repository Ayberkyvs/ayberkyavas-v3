import { type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { blog } from "./blog";
import { aboutMe } from "./about";
import { author } from "./author";
import { comment } from "./comment";
import { pricing } from "./pricing";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, comment, aboutMe, project, blog, pricing],
};

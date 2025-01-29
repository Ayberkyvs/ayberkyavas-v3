import { type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { blog } from "./blog";
import { aboutMe } from "./about";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [aboutMe, project, blog],
};

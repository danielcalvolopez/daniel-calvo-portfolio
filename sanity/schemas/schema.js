import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import pageInfo from "./pageInfo";
import social from "./social";
import skill from "./skill";
import projects from "./projects";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([pageInfo, social, skill, projects]),
});

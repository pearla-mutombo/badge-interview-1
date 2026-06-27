import { greet } from "./greet.js";
import { stats } from "./stats.js";
import { showNames } from "./showNames.js";
import names from "./names.js";

greet("Frontend Developer");
stats(3, 7);
showNames(names);

console.log(
  "exporting allow your code be in a single file and makes it easier to access the other files.",
  "importing allows you to access code form another file. and both are a way to seperate codes into different files or modules so that it can be reused.",
);

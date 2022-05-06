import "./index.scss";
import { initializeLegacyJs } from "./js";


console.log("* 1 *");

// if (process.env.NODE_ENV === "development") {
//   console.log("* 2 *");
//   if (!window.dopplerStyleGuideInit) {
//     console.log("* 3 *");
//     initializeLegacyJs();
//   }
//   window.dopplerStyleGuideInit = true;
// } else if (window["style-guide-configuration"]?.autoInitialize) {
//   console.log("* 3 *");
//   initializeLegacyJs();
// }

window.initializeLegacyJs = initializeLegacyJs;

if (window["style-guide-configuration"]?.autoInitialize) {
  console.log("* 4 *");
  initializeLegacyJs();
}

console.log("* 5 *");

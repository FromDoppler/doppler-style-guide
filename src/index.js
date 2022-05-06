import "./index.scss";

if (process.env.NODE_ENV === "development") {
  if (!window.dopplerStyleGuideInit) {
    require("./js");
  }
  window.dopplerStyleGuideInit = true;
} else if (window["style-guide-configuration"]?.autoInitialize) {
  require("./js");
}

import "./index.scss";
import { initDopplerUI } from "./js";
import { registerComponents, globalBehaviors } from "./components";

if (window["style-guide-configuration"]?.autoInitialize) {
  initDopplerUI();
  registerComponents();
  globalBehaviors();
}

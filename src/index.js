import "./index.scss";
import { initDopplerUI } from "./js";
import { registerComponents } from "./components";

if (window["style-guide-configuration"]?.autoInitialize) {
  initDopplerUI();
  registerComponents();
}

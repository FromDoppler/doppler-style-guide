import "./index.scss";
import {
  initDopplerMenuBehavior,
  initUserMenuBehavior_DEPRECATED,
  initAccordionBehavior,
  initModalsBehavior,
  initDemonstrateBehavior,
  initTabsBehavior,
  initDopplerPlusBehavior,
  initSliderBehavior,
  initNestedTableBehavior,
  initTipsBehavior,
  initPromoCodeBehavior,
  initCarouselBehavior,
  initDropdownButtonBehavior,
  initExitEditorButtonBehavior,
  initFonts,
  lineChart,
} from "./js";

// autoInitialize flag is deprecated
if (window["style-guide-configuration"]?.autoInitialize) {
  window["style-guide-configuration"].initDopplerMenuBehavior = true;
  // This flag is only useful for documentation, it is incompatible with
  // Menu MFE and should be moved out of the JS bundle
  window["style-guide-configuration"].initUserMenuBehavior_DEPRECATED = false;
  window["style-guide-configuration"].initAccordionBehavior = true;
  window["style-guide-configuration"].initModalsBehavior = true;
  window["style-guide-configuration"].initDemonstrateBehavior = true;
  window["style-guide-configuration"].initTabsBehavior = true;
  window["style-guide-configuration"].initDopplerPlusBehavior = true;
  window["style-guide-configuration"].initSliderBehavior = true;
  window["style-guide-configuration"].initNestedTableBehavior = true;
  window["style-guide-configuration"].initTipsBehavior = true;
  window["style-guide-configuration"].initPromoCodeBehavior = true;
  window["style-guide-configuration"].initCarouselBehavior = true;
  window["style-guide-configuration"].initDropdownButtonBehavior = true;
  window["style-guide-configuration"].initExitEditorButtonBehavior = true;
  window["style-guide-configuration"].lineChart = true;
}

if (window["style-guide-configuration"]?.initDopplerMenuBehavior) {
  initDopplerMenuBehavior();
}
// This flag is only useful for documentation, it is incompatible with
// Menu MFE and should be moved out of the JS bundle
if (window["style-guide-configuration"]?.initUserMenuBehavior_DEPRECATED) {
  initUserMenuBehavior_DEPRECATED();
}
if (window["style-guide-configuration"]?.initAccordionBehavior) {
  initAccordionBehavior();
}
if (window["style-guide-configuration"]?.initModalsBehavior) {
  initModalsBehavior();
}
if (window["style-guide-configuration"]?.initDemonstrateBehavior) {
  initDemonstrateBehavior();
}
if (window["style-guide-configuration"]?.initTabsBehavior) {
  initTabsBehavior();
}
if (window["style-guide-configuration"]?.initDopplerPlusBehavior) {
  initDopplerPlusBehavior();
}
if (window["style-guide-configuration"]?.initSliderBehavior) {
  initSliderBehavior();
}
if (window["style-guide-configuration"]?.initNestedTableBehavior) {
  initNestedTableBehavior();
}
if (window["style-guide-configuration"]?.initTipsBehavior) {
  initTipsBehavior();
}
if (window["style-guide-configuration"]?.initPromoCodeBehavior) {
  initPromoCodeBehavior();
}
if (window["style-guide-configuration"]?.initCarouselBehavior) {
  initCarouselBehavior();
}
if (window["style-guide-configuration"]?.initDropdownButtonBehavior) {
  initDropdownButtonBehavior();
}
if (window["style-guide-configuration"]?.initExitEditorButtonBehavior) {
  initExitEditorButtonBehavior();
}

if (window["style-guide-configuration"]?.initFonts) {
  initFonts();
}

if (window["style-guide-configuration"]?.initFonts) {
  lineChart();
}

import { Dropdown } from "./Dropdown";

export const registerComponents = () => {
  customElements.define("dp-dropdown", Dropdown);
};

/**
 * Globals behaviors over document click event
 */
export const globalBehaviors = () => {
  document.addEventListener("click", (event) => {
    const tagNamesPath = event
      .composedPath()
      .map((e) => e.tagName?.toLowerCase());

    if (!tagNamesPath.includes("dp-dropdown")) {
      const all = document.querySelectorAll("dp-dropdown");
      all.forEach((element) => element.collapse());
    }

    // Consider the next block for new global behaviors. Eg.
    // if (!tagNamesPath.includes("my-custom-element")) {
    //   ...my global logic
    // }
  });
};

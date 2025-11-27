import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const UndoRedo = ({ labelUndo, labelRedo, disabled }) => {
  return html`
    <div class="dp-undoredo-wrap">
      <button
        type="button"
        class="dp-arrow-undo"
        title=${labelUndo}
        .disabled=${disabled}
      ></button>
      <button type="button" class="dp-arrow-redo" title=${labelRedo}></button>
    </div>
  `;
};

import { WidgetFormInput } from "./Widget.Form.Input";

export default {
  title: "Components/Widget.Form.Input",
  argTypes: {
    type: {
      description: "The type of the input",
      control: { type: "select" },
      defaultValue: "radio",
      options: ["radio", "checkbox"],
    },
    text: {
      description: "The text of the input",
      control: { type: "text" },
      defaultValue: "Option",
    },
    textBefore: {
      description: "The text before the number input",
      control: { type: "text" },
      defaultValue: "Show per day up to",
    },
    textAfter: {
      description: "The text after the number input",
      control: { type: "text" },
      defaultValue: "times per user",
    },
    inputValue: {
      description: "The value of the number input",
      control: { type: "number" },
      defaultValue: 5,
    },
    hasInput: {
      description: "Indicate if the input has a number input inside",
      control: { type: "boolean" },
      defaultValue: false,
    },
    multipleOptions: {
      description: "Indicate if the input has multiple options",
      control: { type: "boolean" },
      defaultValue: false,
    },
    options: {
      description: "The options for checkbox/radio inputs",
      control: { type: "object" },
      defaultValue: [
        "chrome",
        "firefox",
        "internet explorer",
        "safari",
        "opera",
      ],
    },
    children: {
      description:
        "The children of the input container, could be another input",
      control: { type: "text" },
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum tellus, pharetra nec viverra a, efficitur ac ipsum. Ut vitae libero in dui congue faucibus. Maecenas rutrum euismod tempor. Phasellus aliquet mi non justo ultricies, sed egestas metus consectetur. Curabitur sed sem rutrum, euismod tellus et, accumsan mauris. Phasellus non suscipit turpis, a mattis nisl. Mauris euismod, ante eget fermentum volutpat, tortor lectus ullamcorper nisi, at elementum massa libero a lacus. Proin porttitor porttitor ipsum.",
    },
    showChildren: {
      description: "Indicates if the children content should be displayed",
      control: { type: "boolean" },
      defaultValue: false,
    },
    checked: {
      description: "The checked state of the input",
      control: { type: "boolean" },
      defaultValue: true,
    },
    disabled: {
      description: "The disabled state of the input",
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

const Template = ({
  type,
  checked,
  disabled,
  hasInput,
  text,
  textBefore,
  textAfter,
  inputValue,
  multipleOptions,
  options,
  children,
  showChildren,
}) =>
  WidgetFormInput({
    type,
    checked,
    disabled,
    hasInput,
    text,
    textBefore,
    textAfter,
    inputValue,
    multipleOptions,
    options,
    children,
    showChildren,
  });

export const Default = Template.bind({});
Default.args = {
  type: "radio",
  multipleOptions: false,
  hasInput: false,
  checked: true,
  disabled: false,
  text: "Option",
  textBefore: "Show per day up to",
  textAfter: "times per user",
  inputValue: 5,
  options: ["chrome", "firefox", "internet explorer", "safari", "opera"],
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum tellus, pharetra nec viverra a, efficitur ac ipsum. Ut vitae libero in dui congue faucibus. Maecenas rutrum euismod tempor. Phasellus aliquet mi non justo ultricies, sed egestas metus consectetur. Curabitur sed sem rutrum, euismod tellus et, accumsan mauris. Phasellus non suscipit turpis, a mattis nisl. Mauris euismod, ante eget fermentum volutpat, tortor lectus ullamcorper nisi, at elementum massa libero a lacus. Proin porttitor porttitor ipsum.",
  showChildren: false,
};

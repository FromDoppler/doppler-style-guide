import { TutorialCard } from "./TutorialCard";

export default {
  title: "Components/TutorialCard",
  argTypes: {
    pillText: {
      control: "text",
      description: "Text inside the pill",
    },
    title: {
      control: "text",
      description: "Tutorial title",
    },
    author: {
      control: "text",
      description: "Tutorial author",
    },
    showPlayIcon: {
      control: "boolean",
      description: "Show or hide the play icon over the image",
    },
  },
};

const Template = (args) => TutorialCard(args);

export const Default = Template.bind({});
Default.args = {
  pillText: "Email Automation",
  title: "Cómo crear un Automation de Pago Confirmado",
  author: "Virginia Garay",
  showPlayIcon: true,
};

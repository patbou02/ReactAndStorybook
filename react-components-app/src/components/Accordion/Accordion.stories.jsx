import Accordion from './Accordion';

export default {
  title: 'Example/Accordion',
  component: Accordion
}

const Template = (args) => <Accordion {...args} />

export const Faqs = Template.bind({});
Faqs.args = {
  data: [
    {
      title: "What is storybook?",
      content: "Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis."
    },
    {
      title: "How do we use it?",
      content: "Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis."
    },
    {
      title: "Is it a useful tool?",
      content: "Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis.Gemna prareres, tanquam altus navis."
    },
  ],
};
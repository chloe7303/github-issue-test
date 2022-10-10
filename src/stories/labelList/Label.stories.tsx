import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from '../../pages/LabelList/Label';

export default {
  title: 'Components/LabelList/Label',
  component: Label,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <div style={{ padding: '20px' }}>
    <Label {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  bgColorCode: '0969da',
  name: 'documentation',
};

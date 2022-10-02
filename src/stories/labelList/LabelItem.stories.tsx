import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabelItem from '../../pages/LabelList/LabelItem';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

export default {
  title: 'Components/LabelList/LabelItem',
  component: LabelItem,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LabelItem>;

const Template: ComponentStory<typeof LabelItem> = (args) => (
  <Provider store={store}>
    <LabelItem {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  label: {
    name: 'question',
    color: '0E8A16',
    description: 'Further information is requested',
  },
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabelForm from '../../pages/LabelList/LabelForm';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

export default {
  title: 'Components/LabelList/LabelForm',
  component: LabelForm,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LabelForm>;

const Template: ComponentStory<typeof LabelForm> = (args) => (
  <Provider store={store}>
    <LabelForm {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  type: {
    name: 'create',
  },
};

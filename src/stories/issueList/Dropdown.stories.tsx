import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '../../pages/IssueList/Dropdown';

export default {
  title: 'Components/IssueList/Dropdown',
  component: Dropdown,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div style={{ padding: '20px' }}>
    <Dropdown {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  header: 'Filters',
  sortList: [
    { title: 'Open issues and pull requests' },
    {
      title: 'Your issues',
      action: () => {},
      inputTextTitle: 'author',
    },
    { title: 'Your pull requests' },
    {
      title: 'Everything assigned to you',
      action: () => {},
      inputTextTitle: 'assignee',
    },
    {
      title: 'Everything mentioning you',
      action: () => {},
      inputTextTitle: 'mentions',
    },
  ],
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import IssueItem from '../../pages/IssueList/IssueItem';

export default {
  title: 'Components/IssueList/IssueItem',
  component: IssueItem,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof IssueItem>;

const Template: ComponentStory<typeof IssueItem> = (args) => (
  <div style={{ padding: '20px' }}>
    <IssueItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  issue: {
    title: 'Type guard affects type of variable in surprising way',
    state: 'open',
    user: {
      login: 'chloe7303',
    },
    labels: [{ name: 'suggestion', color: '95a7d1' }],
    assignees: [
      {
        login: 'elaine011',
        avatar_url: 'https://avatars.githubusercontent.com/u/70333832?v=4',
      },
    ],
  },
};

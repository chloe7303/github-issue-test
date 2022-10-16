import { ComponentStory, ComponentMeta } from '@storybook/react';
import Comment from '../../pages/Issue/Comment';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Issue/Comment',
  component: Comment,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Comment>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Comment> = (args) => (
  <div className="w-[750px]">
    <Comment {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  commentData: {
    creator: 'chloe7303',
    createTime: '2022-10-14T02:19:38Z',
    body: 'This is fun,',
    reactions: {
      total_count: 3,
      '+1': 1,
      '-1': 1,
      laugh: 1,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    authorAssociation: 'OWNER',
    avatarUrl: 'https://avatars.githubusercontent.com/u/57607232?s=80&v=4',
    commentId: '123',
  },
};

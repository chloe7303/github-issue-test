import { ComponentStory, ComponentMeta } from '@storybook/react';
import IssueCommentForm from '../../pages/NewIssue/IssueCommentForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/NewIssue/IssueCommentForm',
  component: IssueCommentForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IssueCommentForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IssueCommentForm> = (args) => (
  <div className="w-[750px]">
    <IssueCommentForm {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  handleSubmit: () => {},
  title: '',
  body: '',
  setTitle: () => {},
  setBody: () => {},
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import IssueCommentForm from '../../pages/NewIssue/IssueCommentForm';
import Button from '../../components/buttons/Button';
import DropDownSelectButton from '../../pages/Issue/DropDownSelectButton';
import {
  IssueClosedIcon,
  IssueReopenedIcon,
  SkipIcon,
} from '@primer/octicons-react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Issue/IssueCommentForm',
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

export const SubmitNewIssue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SubmitNewIssue.args = {
  type: 'new-issue',
  formContent: { title: '', setTitle: () => {}, body: '', setBody: () => {} },
  avatarUrl: 'https://avatars.githubusercontent.com/u/57607232?s=80&v=4',
  buttons: [
    <Button
      text={'Submit new issue'}
      primary={true}
      disabled={false}
      onClick={() => {}}
    />,
  ],
};

export const NewComment = Template.bind({});
NewComment.args = {
  type: 'new-comment',
  formContent: { title: '', setTitle: () => {}, body: '', setBody: () => {} },
  avatarUrl: 'https://avatars.githubusercontent.com/u/57607232?s=80&v=4',
  buttons: [
    <DropDownSelectButton
      key={0}
      handleSubmit={() => {}}
      selectedIssueAction={{
        title: 'Close issue',
        icon: <IssueClosedIcon fill="#8250df" />,
        body: {
          state: 'closed',
          state_reason: 'completed',
        },
      }}
      actionType={[
        {
          title: 'Closed as completed',
          description: 'Done, closed, fixed, resolved',
          icon: <IssueClosedIcon fill="#8250df" />,
          state_reason: 'completed',
          handleClick: () => {},
        },
        {
          title: 'Closed as not planned',
          description: "Won't fix, can't repro, duplicate, stale",
          icon: <SkipIcon fill="#57606a" />,
          state_reason: 'not_planned',
          handleClick: () => {},
        },
      ]}
    />,
    <Button
      key={1}
      text={'Comment'}
      primary={true}
      disabled={false}
      onClick={() => {}}
    />,
  ],
};

export const UpdateComment = Template.bind({});
UpdateComment.args = {
  type: 'update-comment',
  formContent: { title: '', setTitle: () => {}, body: '', setBody: () => {} },
  avatarUrl: 'https://avatars.githubusercontent.com/u/57607232?s=80&v=4',
  buttons: [
    <Button
      key={0}
      text={'Cancel'}
      onClick={() => {}}
      margin={'0 5px 0 0'}
      danger={true}
    />,
    <Button
      key={1}
      text={'Update comment'}
      primary={true}
      disabled={false}
      onClick={() => {}}
    />,
  ],
};

export const UpdateCommentOwner = Template.bind({});
UpdateCommentOwner.args = {
  type: 'update-comment-owner',
  formContent: { title: '', setTitle: () => {}, body: '', setBody: () => {} },
  avatarUrl: 'https://avatars.githubusercontent.com/u/57607232?s=80&v=4',
  buttons: [
    <Button
      key={0}
      text={'Cancel'}
      onClick={() => {}}
      margin={'0 5px 0 0'}
      danger={true}
    />,
    <Button
      key={1}
      text={'Update comment'}
      primary={true}
      disabled={false}
      onClick={() => {}}
    />,
  ],
};

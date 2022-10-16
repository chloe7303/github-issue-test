import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropDownSelectButton from '../../pages/Issue/DropDownSelectButton';
import {
  IssueClosedIcon,
  IssueReopenedIcon,
  SkipIcon,
} from '@primer/octicons-react';
import { useState } from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Issue/DropDownSelectButton',
  component: DropDownSelectButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DropDownSelectButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropDownSelectButton> = (args) => (
  <DropDownSelectButton {...args} />
);

export const CloseIssue = () => {
  const [selectedIssueAction, setSelectedIssueAction] = useState({
    title: 'Close issue',
    icon: <IssueClosedIcon fill="#8250df" />,
    body: {
      state: 'closed',
      state_reason: 'completed',
    },
  });

  return (
    <DropDownSelectButton
      actionType={[
        {
          title: 'Closed as completed',
          description: 'Done, closed, fixed, resolved',
          icon: <IssueClosedIcon fill="#8250df" />,
          state_reason: 'completed',
          handleClick: () =>
            setSelectedIssueAction({
              title: 'Close issue',
              icon: <IssueClosedIcon fill="#8250df" />,
              body: {
                state: 'closed',
                state_reason: 'completed',
              },
            }),
        },
        {
          title: 'Closed as not planned',
          description: "Won't fix, can't repro, duplicate, stale",
          icon: <SkipIcon fill="#57606a" />,
          state_reason: 'not_planned',
          handleClick: () =>
            setSelectedIssueAction({
              title: 'Close issue',
              icon: <SkipIcon fill="#57606a" />,
              body: {
                state: 'closed',
                state_reason: 'not_planned',
              },
            }),
        },
      ]}
      selectedIssueAction={selectedIssueAction}
      handleSubmit={() => {}}
    ></DropDownSelectButton>
  );
};

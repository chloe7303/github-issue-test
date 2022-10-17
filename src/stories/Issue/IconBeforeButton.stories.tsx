import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconBeforeButton from '../../pages/Issue/IconBeforeButton';
import {
  IssueClosedIcon,
  IssueOpenedIcon,
  SkipIcon,
} from '@primer/octicons-react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Issue/IconBeforeButton',
  component: IconBeforeButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IconBeforeButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconBeforeButton> = (args) => (
  <IconBeforeButton {...args} />
);

export const Open = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Open.args = {
  issueState: {
    state: 'open',
    icon: <IssueOpenedIcon className="!align-bottom" />,
    bgColorCode: '#2da44e',
  },
};

export const ClosedCompleted = Template.bind({});
ClosedCompleted.args = {
  issueState: {
    state: 'closed',
    icon: <IssueClosedIcon className="!align-bottom" />,
    bgColorCode: '#8250df',
  },
};

export const ClosedNotPlanned = Template.bind({});
ClosedNotPlanned.args = {
  issueState: {
    state: 'closed',
    icon: <SkipIcon className="!align-bottom" />,
    bgColorCode: '#6e7781',
  },
};

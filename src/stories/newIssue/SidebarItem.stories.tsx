import { ComponentStory, ComponentMeta } from '@storybook/react';
import SidebarItem from '../../pages/NewIssue/SidebarItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/NewIssue/SidebarItem',
  component: SidebarItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SidebarItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarItem> = (args) => (
  <div className="w-[256px]">
    <SidebarItem {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Projects',
  content: {
    text: 'None yet',
    actionText: '',
    link: '',
    action: null,
  },
  selectedListComponent: [],
  dropdownComponent: true,
};

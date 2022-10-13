import FilterDropdown from '../IssueList/FilterDropdown';
import { useState } from 'react';
import { useLabelListQuery, useAssigneeListQuery } from '../../redux/labelsApi';
import SidebarItem from '../NewIssue/SidebarItem';
import Assignee from '../NewIssue/Assignee';
import Label from '../LabelList/Label';
import {
  ArrowRightIcon,
  LockIcon,
  TrashIcon,
  PinIcon,
} from '@primer/octicons-react';

type AssigneeType = {
  login: string;
  avatar_url: string;
  url: string;
};
type SelectedAssigneesComponent = {
  name: string;
  component: JSX.Element;
};
type SelectedLabelsComponent = {
  name: string;
  component: JSX.Element;
};

const sidebarToolList = [
  {
    title: 'Lock conversation',
    icon: <LockIcon className="mr-1" />,
  },
  {
    title: 'Pin issue',
    icon: <PinIcon className="mr-1" />,
  },
  {
    title: 'Transfer issue',
    icon: <ArrowRightIcon className="mr-1" />,
  },
  {
    title: 'Delete isuse',
    icon: <TrashIcon className="mr-1" />,
  },
];
const Sidebar = () => {
  const { data: labelListData, isSuccess: getLabelListSuccess } =
    useLabelListQuery();
  const { data: assigneeListData, isSuccess: getAssigneeListSuccess } =
    useAssigneeListQuery();

  const [selectedAssigneesComponent, setSelectedAssigneesComponent] = useState<
    SelectedAssigneesComponent[]
  >([]);
  const [selectedLabelsComponent, setSelectedLabelsComponent] = useState<
    SelectedLabelsComponent[]
  >([]);

  const labelList = labelListData?.map((label) => ({
    title: label.name,
    description: label.description,
    color: label.color,
    prefixElement: `<div class="mt-1 rounded-[2em] w-[1em] h-[1em] mr-2" style="background-color: #${label.color};"/>`,
  }));

  const assigneeList = assigneeListData?.map((assignee: AssigneeType) => ({
    title: assignee.login,
    prefixElement: `<img src=${assignee.avatar_url} alt="avatar" class="w-[20px] h-[20px] rounded-full mr-2",
  />`,
    url: assignee.avatar_url,
  }));

  const sidebarList = [
    {
      title: 'Assignees',
      content: {
        text: 'No one-',
        actionText: 'assign yourself',
        link: '',
        action: () => {},
      },
      selectedListComponent: selectedAssigneesComponent,
      dropdownComponent: (
        <FilterDropdown
          header={'Assign up to 10 people to this issue'}
          subHeader={'Suggestions'}
          resetHeader={{
            title: 'Clear assignees',
            action: () => {
              setSelectedAssigneesComponent([]);
            },
          }}
          inputPlaceholder={'Type or choose a user'}
          selectedValue={selectedAssigneesComponent.map(
            (assignee) => assignee.name
          )}
          handleSelect={() => {}}
          sortList={assigneeList}
          getListSuccess={getAssigneeListSuccess}
          closeDropdown={false}
          showEdit={false}
        />
      ),
    },
    {
      title: 'Labels',
      content: {
        text: 'None yet',
        actionText: '',
        link: '',
        action: null,
      },
      selectedListComponent: selectedLabelsComponent,
      dropdownComponent: (
        <FilterDropdown
          header={'Apply labels to this issue'}
          subHeader={''}
          resetHeader={''}
          inputPlaceholder={'Filter labels'}
          selectedValue={selectedLabelsComponent.map((label) => label.name)}
          handleSelect={() => {}}
          sortList={labelList}
          getListSuccess={getLabelListSuccess}
          closeDropdown={false}
          showEdit={true}
        />
      ),
    },
    {
      title: 'Projects',
      content: {
        text: 'None yet',
        actionText: '',
        link: '',
        action: null,
      },
      selectedListComponent: [],
      dropdownComponent: true,
    },
    {
      title: 'Milestone',
      content: {
        text: 'None yet',
        actionText: '',
        link: null,
        action: null,
      },
      selectedListComponent: [],
      dropdownComponent: true,
    },
    {
      title: 'Development',
      content: {
        text: 'Shows branches and pull requests linked to this issue.',
        actionText: '',
        link: '',
        action: null,
      },
      selectedListComponent: [],
      dropdownComponent: true,
    },
  ];

  return (
    <div className="md:w-[256px] lg:w-[296px]">
      {sidebarList.map((item, index) => (
        <SidebarItem
          key={index}
          title={item.title}
          content={item.content}
          dropdownComponent={item.dropdownComponent}
          selectedListComponent={item.selectedListComponent}
        />
      ))}

      <div className="py-4 text-[12px] font-semibold">
        {sidebarToolList.map((item, index) => (
          <div key={index} className="mb-4">
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

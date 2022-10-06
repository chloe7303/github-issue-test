import Button from '../../components/buttons/Button';
import FilterDropdown from '../IssueList/FilterDropdown';
import { useState } from 'react';
import { useLabelListQuery, useAssigneeListQuery } from '../../redux/labelsApi';
import SidebarItem from './SidebarItem';

type Label = {
  name: string;
  color: string;
  description: string;
};
type Assignee = {
  login: string;
  avatar_url: string;
};

const Sidebar = () => {
  const { data: labelListData, isSuccess: getLabelListSuccess } =
    useLabelListQuery();
  const { data: assigneeListData, isSuccess: getAssigneeListSuccess } =
    useAssigneeListQuery();
  const [selectedLabels, setSelectedLabels] = useState<Label[]>([]);
  const [selectedAssignees, setSelectedAssignees] = useState<{}[]>([]);

  const labelList = labelListData?.map((label) => ({
    title: label.name,
    description: label.description,
    prefixElement: `<div class="mt-1 rounded-[2em] w-[1em] h-[1em] mr-2" style="background-color: #${label.color};"/>`,
  }));

  const assigneeList = assigneeListData?.map((assignee: Assignee) => ({
    title: assignee.login,
    prefixElement: `<img src=${assignee.avatar_url} alt="avatar" class="w-[20px] h-[20px] rounded-full mr-2"
  />`,
  }));

  const sidebarList = [
    {
      title: 'Assignees',
      content: {
        text: 'No one-',
        actionText: 'assign yourself',
        link: '',
        action: () => {
          setSelectedAssignees([
            {
              title: 'chloe7303',
              prefixElement: `<img src='https://avatars.githubusercontent.com/u/57607232?v=4' alt="avatar" class="w-[20px] h-[20px] rounded-full mr-2"
          />`,
            },
          ]);
        },
      },
      selectedList: selectedAssignees,
      dropdownComponent: (
        <FilterDropdown
          header={'Assign up to 10 people to this issue'}
          subHeader={'Suggestions'}
          resetHeader={''}
          inputPlaceholder={'Type or choose a user'}
          selectedValue={selectedAssignees}
          handleSelect={(assignee) => {
            setSelectedAssignees((prevValue) => [...prevValue, assignee]);
          }}
          sortList={assigneeList}
          getListSuccess={getAssigneeListSuccess}
          closeDropdown={false}
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
      selectedList: selectedLabels,
      dropdownComponent: (
        <FilterDropdown
          header={'Apply labels to this issue'}
          subHeader={''}
          resetHeader={''}
          inputPlaceholder={'Filter labels'}
          selectedValue={selectedLabels}
          handleSelect={({ title }) => {
            if (selectedLabels.includes(title)) {
              setSelectedLabels((prevValue) =>
                prevValue.filter((label) => label !== title)
              );
            } else {
              setSelectedLabels((prevValue) => [...prevValue, title]);
            }
          }}
          sortList={labelList}
          getListSuccess={getLabelListSuccess}
          closeDropdown={false}
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
      selectedList: [],
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
      selectedList: [],
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
      dropdownComponent: false,
    },
    {
      title: 'Helpful resources',
      content: {
        text: '',
        actionText: '',
        link: 'GitHub Community Guidelines',
        action: null,
      },
      dropdownComponent: false,
    },
  ];

  return (
    <div className="md:w-[240px] lg:w-[256px]">
      {sidebarList.map((item, index) => (
        <SidebarItem
          key={index}
          title={item.title}
          content={item.content}
          dropdownComponent={item.dropdownComponent}
          selectedList={item.selectedList}
        />
      ))}

      <div className="md:hidden">
        <Button
          text={'Submit new issue'}
          primary={true}
          disabled={true}
          stretching={true}
        />
      </div>
    </div>
  );
};

export default Sidebar;

import FilterDropdown from '../IssueList/FilterDropdown';
import { useState } from 'react';
import {
  useLabelListQuery,
  useAssigneeListQuery,
  useUpdateIssueMutation,
} from '../../redux/labelsApi';
import SidebarItem from '../NewIssue/SidebarItem';
import Assignee from '../NewIssue/Assignee';
import Label from '../LabelList/Label';
import {
  ArrowRightIcon,
  LockIcon,
  TrashIcon,
  PinIcon,
} from '@primer/octicons-react';
import { useParams } from 'react-router-dom';

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
const Sidebar = ({ assigneesData, labelsData }) => {
  const { id } = useParams() as { id: string };
  const [updateIssue] = useUpdateIssueMutation();
  const { data: labelListData, isSuccess: getLabelListSuccess } =
    useLabelListQuery();
  const { data: assigneeListData, isSuccess: getAssigneeListSuccess } =
    useAssigneeListQuery();

  // assignees
  const inititalSelectedAssigneesComponent = assigneesData.map((assignee) => ({
    name: assignee.login,
    component: (
      <Assignee
        key={assignee.login}
        name={assignee.login}
        imgUrl={assignee.avatar_url}
      />
    ),
  }));
  const [selectedAssigneesComponent, setSelectedAssigneesComponent] = useState<
    SelectedAssigneesComponent[]
  >(inititalSelectedAssigneesComponent);
  const selectedAssignees = selectedAssigneesComponent?.map(
    (assignee) => assignee.name
  );

  // labels
  const inititalSelectedLabelsComponent = labelsData.map((label) => ({
    name: label.name,
    component: (
      <Label
        key={label.color}
        bgColorCode={label.color}
        name={label.name}
        thin={true}
      />
    ),
  }));
  const [selectedLabelsComponent, setSelectedLabelsComponent] = useState<
    SelectedLabelsComponent[]
  >(inititalSelectedLabelsComponent);
  const selectedLabels = selectedLabelsComponent?.map((label) => label.name);

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
        action: async () => {
          await updateIssue({
            number: id,
            body: {
              assignees: ['chloe7303'],
            },
          });
          setSelectedAssigneesComponent([
            {
              name: 'chloe7303',
              component: (
                <Assignee
                  key={'chloe7303'}
                  imgUrl={
                    'https://avatars.githubusercontent.com/u/57607232?v=4'
                  }
                  name={'chloe7303'}
                />
              ),
            },
          ]);
        },
      },
      selectedListComponent: selectedAssigneesComponent,
      dropdownComponent: (
        <FilterDropdown
          header={'Assign up to 10 people to this issue'}
          subHeader={'Suggestions'}
          resetHeader={{
            title: 'Clear assignees',
            action: async () => {
              await updateIssue({
                number: id,
                body: { assignees: [] },
              });
              setSelectedAssigneesComponent([]);
            },
          }}
          inputPlaceholder={'Type or choose a user'}
          selectedValue={selectedAssignees}
          handleSelect={async (assignee) => {
            if (selectedAssignees?.includes(assignee.title)) {
              const currentSelectedAssignees = selectedAssignees.filter(
                (value) => value !== assignee.title
              );
              await updateIssue({
                number: id,
                body: { assignees: currentSelectedAssignees },
              });

              setSelectedAssigneesComponent((prevValue) =>
                prevValue?.filter((item) => item.name !== assignee.title)
              );
              console.log('updated assignees', currentSelectedAssignees);
            } else {
              const currentSelectedAssignees = [
                ...selectedAssignees,
                assignee.title,
              ];
              await updateIssue({
                number: id,
                body: { assignees: currentSelectedAssignees },
              });

              setSelectedAssigneesComponent((prevValue) => [
                ...prevValue,
                {
                  name: assignee.title,
                  component: (
                    <Assignee
                      key={assignee.title}
                      imgUrl={assignee.url}
                      name={assignee.title}
                    />
                  ),
                },
              ]);
              console.log('updated assignees', currentSelectedAssignees);
            }
          }}
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
          selectedValue={selectedLabels}
          handleSelect={async (label) => {
            if (selectedLabels?.includes(label.title)) {
              const currentSelectedLabels = selectedLabels.filter(
                (value) => value !== label.title
              );
              await updateIssue({
                number: id,
                body: { labels: currentSelectedLabels },
              });

              setSelectedLabelsComponent((prevValue) =>
                prevValue?.filter((item) => item.name !== label.title)
              );
              console.log('updated labels', currentSelectedLabels);
            } else {
              const currentSelectedLabels = [...selectedLabels, label.title];
              await updateIssue({
                number: id,
                body: { labels: currentSelectedLabels },
              });

              setSelectedLabelsComponent((prevValue) => [
                ...prevValue,
                {
                  name: label.title,
                  component: (
                    <Label
                      key={label.color}
                      bgColorCode={label.color}
                      name={label.title}
                      thin={true}
                    />
                  ),
                },
              ]);
              console.log('updated labels', currentSelectedLabels);
            }
          }}
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

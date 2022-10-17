import Button from '../../components/buttons/Button';
import FilterDropdown from '../IssueList/FilterDropdown';
import { useState, useContext } from 'react';
import { useLabelListQuery, useAssigneeListQuery } from '../../redux/labelsApi';
import SidebarItem from './SidebarItem';
import Assignee from './Assignee';
import Label from '../LabelList/Label';
import { NewIssueContext, NewIssueContextType } from './NewIssue';

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
const Sidebar = () => {
  const { issueForm, setIssueForm } = useContext(
    NewIssueContext
  ) as NewIssueContextType;

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
        action: () => {
          setIssueForm((prevValue) => ({
            ...prevValue,
            assignees: ['chloe7303'],
          }));
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
            action: () => {
              setSelectedAssigneesComponent([]);
              setIssueForm((prevValue) => ({ ...prevValue, assignees: [] }));
            },
          }}
          inputPlaceholder={'Type or choose a user'}
          selectedValue={selectedAssigneesComponent.map(
            (assignee) => assignee.name
          )}
          handleSelect={(assignee) => {
            if (issueForm.assignees.includes(assignee.title)) {
              setIssueForm((prevValue) => ({
                ...prevValue,
                assignees: prevValue.assignees.filter(
                  (item) => item !== assignee.title
                ),
              }));
              setSelectedAssigneesComponent((prevValue) =>
                prevValue.filter((item) => item.name !== assignee.title)
              );
            } else {
              setIssueForm((prevValue) => ({
                ...prevValue,
                assignees: [...prevValue.assignees, assignee.title],
              }));
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
          selectedValue={selectedLabelsComponent.map((label) => label.name)}
          handleSelect={(label) => {
            if (issueForm.labels.includes(label.title)) {
              setIssueForm((prevValue) => ({
                ...prevValue,
                labels: prevValue.labels.filter((item) => item !== label.title),
              }));
              setSelectedLabelsComponent((prevValue) =>
                prevValue.filter((item) => item.name !== label.title)
              );
            } else {
              setIssueForm((prevValue) => ({
                ...prevValue,
                labels: [...prevValue.labels, label.title],
              }));
              setSelectedLabelsComponent((prevValue) => [
                ...prevValue,
                {
                  name: label.title,
                  component: (
                    <Label
                      key={label.title}
                      bgColorCode={label.color}
                      name={label.title}
                      thin={true}
                    />
                  ),
                },
              ]);
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

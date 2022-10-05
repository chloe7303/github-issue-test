import { GearIcon } from '@primer/octicons-react';
import Button from '../../components/buttons/Button';
import FilterDropdown from '../IssueList/FilterDropdown';
import { useState } from 'react';
import { useLabelListQuery, useAssigneeListQuery } from '../../redux/labelsApi';

type Label = {
  id: number;
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
  const [selectedAssignees, setSelectedAssignees] = useState([]);

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

  return (
    <div className="md:w-[240px] lg:w-[256px]">
      <div className="py-4 border-b border-solid border-border text-[12px]">
        <details className="mb-4 relative">
          <summary className="flex justify-between font-semibold group cursor-pointer">
            <span className="group-hover:text-emphasis">Assignees</span>
            <span className="group-hover:text-emphasis">
              <GearIcon />
            </span>
          </summary>
          <FilterDropdown
            header={'Assign up to 10 people to this issue'}
            subHeader={'Suggestions'}
            resetHeader={''}
            inputPlaceholder={'Type or choose a user'}
            selectedValue={selectedAssignees}
            handleSelect={() => {}}
            sortList={assigneeList}
            getListSuccess={getAssigneeListSuccess}
            closeDropdown={false}
          />
        </details>
        <span>
          No one-
          <span className="cursor-pointer hover:text-emphasis">
            assign yourself
          </span>
        </span>
      </div>
      <div className="py-4 border-b border-solid border-border text-[12px]">
        <details className="mb-4 relative">
          <summary className="flex justify-between font-semibold group cursor-pointer">
            <span className="group-hover:text-emphasis">Labels</span>
            <span className="group-hover:text-emphasis">
              <GearIcon />
            </span>
          </summary>
          <FilterDropdown
            header={'Apply labels to this issue'}
            subHeader={''}
            resetHeader={''}
            inputPlaceholder={'Filter labels'}
            selectedValue={selectedLabels}
            handleSelect={() => {}}
            sortList={labelList}
            getListSuccess={getLabelListSuccess}
            closeDropdown={false}
          />
        </details>
        <span>
          No one-
          <span className="cursor-pointer hover:text-emphasis">
            assign yourself
          </span>
        </span>
      </div>
      {/* just layout */}
      <div className="py-4 border-b border-solid border-border text-[12px]">
        <h5 className="mb-4 font-semibold">Development</h5>
        <span className="leading-normal">
          Shows branches and pull requests linked to this issue.
        </span>
      </div>
      <div className="py-4 border-b border-solid border-border text-[12px] mb-6">
        <h5 className="mb-4 font-semibold">Helpful resources</h5>
        <span className="text-emphasis">GitHub Community Guidelines</span>
      </div>
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

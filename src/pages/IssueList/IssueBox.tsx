import { CheckIcon, IssueOpenedIcon } from '@primer/octicons-react';
import IssueItem from './IssueItem';
import Dropdown from './Dropdown';

const sortList = [
  'Newest',
  'Oldest',
  'Most commented',
  'Least commented',
  'Recently updated',
  'Least recently updated',
];

const IssueBox = () => {
  return (
    <>
      <div className="px-4 sm:px-0 lg:hidden mb-4 ">
        <a href="#/" className="text-sm font-semibold">
          <IssueOpenedIcon className="mr-2" verticalAlign="middle" />5 Open
        </a>
        <a href="#/" className="text-sm text-text ml-4">
          <CheckIcon
            size={16}
            className="fill-text mr-1"
            verticalAlign="middle"
          />
          1 Closed
        </a>
      </div>
      <div className="rounded-none sm:rounded-md border border-solid border-[#d0d7de]">
        <div className="rounded-tl-md rounded-tr-md bg-[#f6f8fa] p-[16px] flex justify-between">
          <div className="px-4 sm:px-0 hidden lg:block">
            <a href="#/" className="text-sm font-semibold">
              <IssueOpenedIcon className="mr-2" verticalAlign="middle" />5 Open
            </a>
            <a href="#/" className="text-sm text-text ml-4">
              <CheckIcon
                size={16}
                className="fill-text mr-1"
                verticalAlign="middle"
              />
              1 Closed
            </a>
          </div>
          <div className="flex justify-between sm:justify-start lg:justify-end grow text-sm text-[#57606a]">
            <div className="px-[16px]">
              Author
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <div className="px-[16px]">
              Label
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <div className="px-[16px] hidden md:block">
              Projects
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <div className="px-[16px] hidden md:block">
              Milestones
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <div className="px-[16px]">
              Assignee
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <details className="relative pl-[16px]">
              <summary className="flex items-center">
                Sort
                <span className="inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-2"></span>
              </summary>
              <Dropdown header={'Sort by'} sortList={sortList} />
            </details>
          </div>
        </div>
        {/* list item */}
        <div>
          <IssueItem />
          <IssueItem />
          <IssueItem />
        </div>
      </div>
    </>
  );
};

export default IssueBox;

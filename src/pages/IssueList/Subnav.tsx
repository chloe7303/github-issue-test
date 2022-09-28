import {
  MilestoneIcon,
  SearchIcon,
  TagIcon,
  XIcon,
} from '@primer/octicons-react';
import Tabs from '../../components/buttons/Tabs';
import Button from '../../components/buttons/Button';
import { useState } from 'react';

const buttons = [
  {
    text: 'Labels',
    icon: <TagIcon verticalAlign="middle" />,
  },
  {
    text: 'Milestones',
    icon: <MilestoneIcon verticalAlign="middle" />,
  },
];

const Subnav = () => {
  const [filterInputText, setFilterInputText] = useState('is:issue is:open');

  return (
    <>
      <div className="px-4 sm:px-0 flex flex-wrap justify-between text-sm md:flex-nowrap md:h-8 md:mb-4">
        <div className="flex w-full justify-between md:flex-nowrap md:w-auto">
          <Tabs buttons={buttons} />
          <span className="ml-2 hidden md:block">
            <Button text="New issue" primary={true} />
          </span>
          <span className="inline-block ml-2 md:hidden">
            <Button text="New" primary={true} />
          </span>
        </div>
        <div className="flex w-full my-6 md:order-first md:w-auto md:mt-0 md:grow md:mr-4">
          <button className="flex items-center h-8 bg-default border border-solid font-medium px-4 rounded-l-md hover:bg-[#f3f4f6]">
            Filters
            <span className="inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-2"></span>
          </button>
          <div className="relative w-full">
            <SearchIcon
              size={16}
              className="absolute left-2 top-[8px] fill-text"
            />
            <input
              type="text"
              placeholder="Search all issues"
              value={filterInputText}
              className="bg-default py-[5px] pl-8 pr-3 border border-solid rounded-r-md w-full text-text focus:bg-light"
              onChange={(e) => setFilterInputText(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="mb-4 px-4 sm:px-0 ">
        <span className="inline-block w-[18px] h-[18px] rounded text-center bg-[#6e7781] mr-2">
          <XIcon fill="#fff" verticalAlign="middle" />
        </span>
        <a
          href="/"
          className="text-text font-semibold text-[15px] hover:text-emphasis"
        >
          Clear current search query, filters, and sorts
        </a>
      </div>
    </>
  );
};

export default Subnav;

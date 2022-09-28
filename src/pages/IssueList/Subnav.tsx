import { MilestoneIcon, TagIcon, XIcon } from '@primer/octicons-react';
import Tabs from '../../components/buttons/Tabs';
import Button from '../../components/buttons/Button';
import FiltersInput from './FiltersInput';

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
        <FiltersInput />
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

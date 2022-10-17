import { MilestoneIcon, TagIcon, XIcon } from '@primer/octicons-react';
import Tabs from '../../components/buttons/Tabs';
import Button from '../../components/buttons/Button';
import FiltersInput from './FiltersInput';
import { filterParamContext, filterParamContextInterface } from './IssueList';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Subnav = () => {
  const navigate = useNavigate();
  const { filterParam, setFilterParam } = useContext(
    filterParamContext
  ) as filterParamContextInterface;
  const { filters, state, labels, assignee, sort } = filterParam;

  const buttons = [
    {
      text: 'Labels',
      icon: <TagIcon verticalAlign="middle" />,
      onClick: () => navigate('/labels'),
    },
    {
      text: 'Milestones',
      icon: <MilestoneIcon verticalAlign="middle" />,
    },
  ];

  return (
    <>
      <div className="px-4 sm:px-0 flex flex-wrap justify-between text-sm md:flex-nowrap md:h-8 md:mb-4">
        <div className="flex w-full justify-between md:flex-nowrap md:w-auto">
          <Tabs buttons={buttons} />
          <span className="ml-2 hidden md:block">
            <Button
              text="New issue"
              primary={true}
              onClick={() => {
                navigate('/issues/new');
              }}
            />
          </span>
          <span className="inline-block ml-2 md:hidden">
            <Button text="New" primary={true} />
          </span>
        </div>
        <FiltersInput />
      </div>
      {(state !== 'open' ||
        !!(filters || assignee || sort) ||
        labels.length !== 0) && (
        <div
          className="mb-4 px-4 sm:px-0 cursor-pointer group"
          onClick={() =>
            setFilterParam({
              filters: '',
              state: 'open',
              labels: '',
              assignee: '',
              sort: '',
              page: 1,
            })
          }
        >
          <span className="inline-block w-[18px] h-[18px] rounded text-center bg-[#6e7781] mr-2 group-hover:bg-emphasis">
            <XIcon fill="#fff" verticalAlign="middle" />
          </span>
          <span className="text-text font-semibold text-[15px] group-hover:text-emphasis">
            Clear current search query, filters, and sorts
          </span>
        </div>
      )}
    </>
  );
};

export default Subnav;

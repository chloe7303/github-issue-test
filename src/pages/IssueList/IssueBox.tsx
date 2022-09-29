import { CheckIcon, IssueOpenedIcon } from '@primer/octicons-react';
import IssueItem from './IssueItem';
import Dropdown from './Dropdown';
import FilterDropdown from './FilterDropdown';
import { useIssueListQuery } from '../../redux/labelsApi';
import { filterParamContext, filterParamContextInterface } from './IssueList';
import { useContext } from 'react';

const sortList = [
  { title: 'Newest', action: '' },
  { title: 'Oldest', action: '' },
  { title: 'Most commented', action: '' },
  { title: 'Least commented', action: '' },
  { title: 'Recently updated', action: '' },
  { title: 'Least recently updated', action: '' },
];

const boxHeaderList = [
  {
    title: 'Author',
  },
  {
    title: 'Label',
    component: (
      <FilterDropdown
        header={'Filter by Label'}
        subHeader={'Assigned to nobody'}
      />
    ),
  },
  {
    title: 'Projects',
  },
  {
    title: 'Milestones',
  },
  {
    title: 'Assignee',
    component: (
      <FilterDropdown
        header={"Filter by who's assigned"}
        subHeader={'assigned'}
      />
    ),
  },
  {
    title: 'Sorts',
    component: <Dropdown header={'Sort by'} sortList={sortList} />,
  },
];

const IssueBox = () => {
  const { filterParam, setFilterParam } = useContext(
    filterParamContext
  ) as filterParamContextInterface;
  const filterParamApi =
    (filterParam.filters ? `?${filterParam.filters}&` : '?') +
    `state=${filterParam.state}&labels=${filterParam.labels}&sort=${filterParam.sort}`;
  const { data, error, isLoading, isFetching, isSuccess } =
    useIssueListQuery(filterParamApi);

  return (
    <>
      <div className="px-4 sm:px-0 lg:hidden mb-4 ">
        <a href="#/" className="text-sm font-semibold cursor-pointer">
          <IssueOpenedIcon className="mr-2" verticalAlign="middle" />
          10 Open
        </a>
        <a href="#/" className="text-sm text-text ml-4 cursor-pointer">
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
            <span
              className="text-sm font-semibold cursor-pointer"
              onClick={setFilterParam((prevValue) => ({
                ...prevValue,
                state: 'open',
              }))}
            >
              <IssueOpenedIcon
                className="mr-2 cursor-pointer"
                verticalAlign="middle"
              />
              10 Open
            </span>
            <span
              className="text-sm text-text ml-4 cursor-pointer"
              onClick={() =>
                setFilterParam((prevValue) => ({
                  ...prevValue,
                  state: 'closed',
                }))
              }
            >
              <CheckIcon
                size={16}
                className="fill-text mr-1"
                verticalAlign="middle"
              />
              1 Closed
            </span>
          </div>
          <div className="flex justify-between sm:justify-start lg:justify-end grow text-sm text-[#57606a]">
            {boxHeaderList.map((item, index) => {
              return (
                <details
                  key={index}
                  className={`relative px-[16px] ${
                    index === 2 || index === 3 ? 'hidden md:block' : ''
                  } ${index === 5 ? 'pr-0' : ''}`}
                >
                  <summary className="flex items-center">
                    {item.title}
                    <span className="inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-2"></span>
                  </summary>
                  {item.component}
                </details>
              );
            })}
          </div>
        </div>
        {/* list item */}
        <div>
          {isLoading && <h2>Loading...</h2>}
          {isFetching && <h2>Fetching...</h2>}
          {error && <h2>Something went wrong</h2>}
          {isSuccess &&
            data.map((issue, index) => {
              return <IssueItem key={index} issue={issue} />;
            })}
          <IssueItem
            issue={{
              title: '這是本地我自己寫的',
              number: 99,
              created_at: '2022-09-26T08:59:56Z',
              user: { login: 'Jessica' },
              labels: [{ description: 'this is label' }],
              comments: 5,
              assignees: [
                {
                  avatar_url:
                    'https://avatars.githubusercontent.com/u/57607232?v=4',
                },
                {
                  avatar_url:
                    'https://avatars.githubusercontent.com/u/70333832?v=4',
                },
                {
                  avatar_url:
                    'https://avatars.githubusercontent.com/u/105163825?v=4',
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default IssueBox;

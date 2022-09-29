import { CheckIcon, IssueOpenedIcon } from '@primer/octicons-react';
import IssueItem from './IssueItem';
import Dropdown from './Dropdown';
import FilterDropdown from './FilterDropdown';
import { createContext, useState } from 'react';
import { useIssueListQuery } from '../../redux/labelsApi';

const sortList = [
  'Newest',
  'Oldest',
  'Most commented',
  'Least commented',
  'Recently updated',
  'Least recently updated',
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
export const IssueListContext = createContext({});
const IssueBox = () => {
  const [issueList, setIssueList] = useState([]);

  const { data, error, isLoading, isFetching, isSuccess } =
    useIssueListQuery('open');
  // const [issueList] = useIssueListQuery();

  return (
    <IssueListContext.Provider value={{ issueList, setIssueList }}>
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
              title: 'this is new issue',
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
    </IssueListContext.Provider>
  );
};

export default IssueBox;

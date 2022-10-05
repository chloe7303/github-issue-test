import { CheckIcon, IssueOpenedIcon } from '@primer/octicons-react';
import IssueItem from './IssueItem';
import Dropdown from './Dropdown';
import FilterDropdown from './FilterDropdown';
import {
  useIssueListQuery,
  useLabelListQuery,
  useAssigneeListQuery,
} from '../../redux/labelsApi';
import { filterParamContext, filterParamContextInterface } from './IssueList';
import { useContext, useState } from 'react';

type Label = {
  name: string;
  color: string;
  description: string;
};

type Assignee = {
  login: string;
  avatar_url: string;
};

const IssueBox = () => {
  const { filterParam, setFilterParam } = useContext(
    filterParamContext
  ) as filterParamContextInterface;

  const param =
    (filterParam.state && `state=${filterParam.state}`) +
    (filterParam.labels && `&labels=${filterParam.labels}`) +
    (filterParam.sort && `&${filterParam.sort}`) +
    (filterParam.assignee && `&assignee=${filterParam.assignee}`) +
    (filterParam.page && `&page=${filterParam.page}`) +
    '&per_page=25';
  const filterParamApi =
    (filterParam.filters ? `?${filterParam.filters}&` : '?') + param;
  const { data, error, isLoading, isFetching, isSuccess } =
    useIssueListQuery(filterParamApi);

  const { data: labelListData, isSuccess: getLabelListSuccess } =
    useLabelListQuery();
  const { data: assigneeListData, isSuccess: getAssigneeListSuccess } =
    useAssigneeListQuery();
  const [selectedLabels, setSelectedLabels] = useState<Label[]>([]);
  const [selectedAssignee, setSelectedAssignee] = useState('');

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

  const sortList = [
    {
      title: 'Newest',
      action: () =>
        setFilterParam((prevValue) => ({
          ...prevValue,
          sort: 'sort=created',
        })),
    },
    {
      title: 'Oldest',
      action: () =>
        setFilterParam((prevValue) => ({
          ...prevValue,
          sort: 'sort=created&direction=asc',
        })),
    },
    {
      title: 'Most commented',
      action: () =>
        setFilterParam((prevValue) => ({
          ...prevValue,
          sort: 'sort=comments',
        })),
    },
    {
      title: 'Least commented',
      action: () =>
        setFilterParam((prevValue) => ({
          ...prevValue,
          sort: 'sort=comments&direction=asc',
        })),
    },
    {
      title: 'Recently updated',
      action: () =>
        setFilterParam((prevValue) => ({
          ...prevValue,
          sort: 'sort=updated',
        })),
    },
    {
      title: 'Least recently updated',
      action: () =>
        setFilterParam((prevValue) => ({
          ...prevValue,
          sort: 'sort=updated&direction=asc',
        })),
    },
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
          subHeader={''}
          resetHeader={{
            title: 'Unlabeled',
            action: () => {
              setSelectedLabels([]);
              setFilterParam((prevValue) => ({
                ...prevValue,
                labels: [],
              }));
            },
          }}
          inputPlaceholder={'Filter labels'}
          selectedValue={selectedLabels}
          handleSelect={(title) => {
            if (selectedLabels.includes(title)) {
              setSelectedLabels((prevValue) =>
                prevValue.filter((label) => label !== title)
              );
              setFilterParam((prevValue) => ({
                ...prevValue,
                labels: selectedLabels.filter((label) => label !== title),
              }));
            } else {
              setSelectedLabels((prevValue) => [...prevValue, title]);
              setFilterParam((prevValue) => ({
                ...prevValue,
                labels: [...selectedLabels, title],
              }));
            }
          }}
          sortList={labelList}
          getListSuccess={getLabelListSuccess}
          closeDropdown={true}
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
          subHeader={''}
          resetHeader={{
            title: 'Assigned to nobody',
            action: () => {
              setSelectedAssignee('');
              setFilterParam((prevValue) => ({
                ...prevValue,
                assignee: 'none',
              }));
            },
          }}
          inputPlaceholder={'Filter users'}
          selectedValue={selectedAssignee}
          handleSelect={(title) => {
            setSelectedAssignee(title);
            setFilterParam((prevValue) => ({
              ...prevValue,
              assignee: title,
            }));
          }}
          sortList={assigneeList}
          getListSuccess={getAssigneeListSuccess}
          closeDropdown={true}
        />
      ),
    },
    {
      title: 'Sort',
      component: (
        <Dropdown
          header={'Sort by'}
          sortList={sortList}
          defaultCurrentFilter={'Newest'}
        />
      ),
    },
  ];

  return (
    <>
      <div className="px-4 sm:px-0 lg:hidden mb-4 ">
        <a href="#/" className="text-sm font-semibold cursor-pointer">
          <IssueOpenedIcon className="mr-2" verticalAlign="middle" />
          Open
        </a>
        <a href="#/" className="text-sm text-text ml-4 cursor-pointer">
          <CheckIcon
            size={16}
            className="fill-text mr-1"
            verticalAlign="middle"
          />
          Closed
        </a>
      </div>
      <div className="rounded-none sm:rounded-md border border-solid border-[#d0d7de]">
        <div className="rounded-tl-md rounded-tr-md bg-[#f6f8fa] p-[16px] flex justify-between">
          <div className="px-4 sm:px-0 hidden lg:block">
            <span
              className="text-sm font-semibold cursor-pointer"
              onClick={() =>
                setFilterParam((prevValue) => ({
                  ...prevValue,
                  state: 'open',
                }))
              }
            >
              <IssueOpenedIcon
                className="mr-2 cursor-pointer"
                verticalAlign="middle"
              />
              Open
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
              Closed
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
            (data.length === 0 ? (
              <div className="text-center py-[80px]">
                <IssueOpenedIcon size={25} />
                <h1 className="my-8 text-2xl font-bold">
                  No results matched your search.
                </h1>
                <p className="">
                  You could search all of GitHub or try an advanced search.
                </p>
              </div>
            ) : (
              data.map((issue, index) => {
                return <IssueItem key={index} issue={issue} />;
              })
            ))}
        </div>
      </div>
    </>
  );
};

export default IssueBox;

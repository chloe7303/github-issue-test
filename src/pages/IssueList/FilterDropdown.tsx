import { XIcon, CheckIcon } from '@primer/octicons-react';
import { useLabelListQuery } from '../../redux/labelsApi';
import { useState, useContext, useEffect } from 'react';
import { filterParamContext, filterParamContextInterface } from './IssueList';

type Assignee = {
  login: string;
  avatar_url: string;
};
const FilterDropdown = ({ header, subHeader }) => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const {
    data: labelList,
    error,
    isLoading,
    isFetching,
    isSuccess,
  } = useLabelListQuery();
  const { filterParam, setFilterParam } = useContext(
    filterParamContext
  ) as filterParamContextInterface;
  const [searchLabelInputText, setSearchLabelInputText] = useState('');
  const [searchUserInputText, setSearchUserInputText] = useState('');
  const [assigneeList, setAssigneeList] = useState<Assignee[]>([]);

  const handleSelectLabel = (labelName) => {
    if (selectedLabels.includes(labelName)) {
      setSelectedLabels((prevValue) =>
        prevValue.filter((label) => label !== labelName)
      );
      setFilterParam((prevValue) => ({
        ...prevValue,
        labels: selectedLabels.filter((label) => label !== labelName),
      }));
    } else {
      setSelectedLabels((prevValue) => [...prevValue, labelName]);
      setFilterParam((prevValue) => ({
        ...prevValue,
        labels: [...selectedLabels, labelName],
      }));
    }
  };

  const clearAllSelectedLabel = () => {
    setSelectedLabels([]);
    setFilterParam((prevValue) => ({
      ...prevValue,
      labels: [],
    }));
  };

  useEffect(() => {
    const getAssigneeList = async () => {
      const res = await fetch(
        'https://api.github.com/repos/chloe7303/github-issue-test/assignees',
        {
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.REACT_APP_PERSONAL_TOKEN}`,
          },
        }
      );
      return await res.json();
    };
    getAssigneeList().then((data) => setAssigneeList(data));
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex p-4 flex-col z-[100] sm:z-[1] sm:absolute sm:top-auto sm:right-auto sm:left-auto sm:bottom-auto sm:p-0 lg:right-0 shadow-shadow shadow-md text-[#000] text-xs">
      <div className="h-4/5 mt-0 bg-light border border-solid border-border rounded-md sm:h-auto sm:max-h-[480px] sm:mt-2 sm:w-[300px] shadow-shadow shadow-md">
        <header className="flex p-4 items-center border-b border-solid border-b-border sm:pt-[7px] sm:pr-[7px] sm:pb-[7px]">
          <span className="font-semibold flex-1">{header}</span>
          <button className="cursor-pointer leading-none rounded-none">
            <XIcon fill={'#57606a'} />
          </button>
        </header>
        <div className="p-4 m-0 border-b border-solid border-b-border sm:p-2">
          {header === 'Filter by Label' ? (
            <input
              placeholder="Filter labels"
              className="block w-full py-[5px] px-[12px] leading-5 rounded-md border border-solid border-border text-sm"
              value={searchLabelInputText}
              onChange={(e) => setSearchLabelInputText(e.target.value)}
            />
          ) : (
            <input
              placeholder="Filter users"
              className="block w-full py-[5px] px-[12px] leading-5 rounded-md border border-solid border-border text-sm"
              value={searchUserInputText}
              onChange={(e) => setSearchUserInputText(e.target.value)}
            />
          )}
        </div>
        <div className="overflow-y-auto max-h-[calc(100%-126px)] sm:max-h-[calc(485px-82px)]">
          <div className="flex items-start w-full p-4 overflow-hidden text-left cursor-pointer border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pb-[7px]">
            <span
              className="font-semibold ml-6"
              onClick={
                subHeader === 'Unlabeled'
                  ? () => clearAllSelectedLabel()
                  : () => {
                      setFilterParam((prevValue) => ({
                        ...prevValue,
                        assignee: 'none',
                      }));
                    }
              }
            >
              {subHeader}
            </span>
          </div>
          {isLoading && <h2>Loading...</h2>}
          {isFetching && <h2>Fetching...</h2>}
          {error && <h2>Something went wrong</h2>}
          {isSuccess &&
            header === 'Filter by Label' &&
            labelList.map((label, index) => {
              if (
                searchLabelInputText &&
                !label.name.includes(searchLabelInputText)
              )
                return <></>;
              return (
                <div
                  key={index}
                  className={`flex items-start w-full p-4 overflow-hidden text-left cursor-pointer border-b border-solid hover:bg-default border-b-border sm:pt-[7px] sm:pb-[7px]`}
                  onClick={() => handleSelectLabel(label.name)}
                >
                  <div
                    className={`flex items-start mr-2 ${
                      !selectedLabels.includes(label.name) && 'invisible'
                    }`}
                  >
                    <CheckIcon fill={'#000000'} />
                  </div>
                  <span
                    className="mt-px rounded-[2em] w-[1em] h-[1em] mr-2"
                    style={{ backgroundColor: `#${label.color}` }}
                  />
                  <div className="leading-tight min-w-0">
                    <div className="flex items-center">
                      <div className="font-semibold truncate sm:pt-[2px]">
                        {label.name}
                      </div>
                    </div>
                    {label.description && (
                      <div className="font-medium text-[#57606a] mt-1 truncate">
                        {label.description}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          {header === "Filter by who's assigned" &&
            assigneeList?.map((assignee, index) => (
              <div
                key={index}
                className={`flex items-start w-full p-4 overflow-hidden text-left cursor-pointer border-b border-solid hover:bg-default border-b-border sm:pt-[7px] sm:pb-[7px]`}
                onClick={() =>
                  setFilterParam((prevValue) => ({
                    ...prevValue,
                    assignee: assignee.login,
                  }))
                }
              >
                <div className="flex items-start mr-2 invisible">
                  <CheckIcon fill={'#000000'} />
                </div>
                <img
                  src={assignee.avatar_url}
                  alt="avatar"
                  className="w-[20px] h-[20px] rounded-full mr-2"
                ></img>
                <div className="leading-tight min-w-0">
                  <div className="flex items-center">
                    <div className="font-semibold truncate sm:pt-[2px]">
                      {assignee.login}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;

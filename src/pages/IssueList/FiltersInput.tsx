import { useState } from 'react';
import { SearchIcon } from '@primer/octicons-react';
import Dropdown from './Dropdown';
import { filterParamContext, filterParamContextInterface } from './IssueList';
import { useContext } from 'react';

const FiltersInput = () => {
  const [filterInputText, setFilterInputText] = useState('is:issue is:open');
  const { filterParam, setFilterParam } = useContext(
    filterParamContext
  ) as filterParamContextInterface;

  const sortList = [
    { title: 'Open issues and pull requests' },
    {
      title: 'Your issues',
      action: () =>
        setFilterParam({
          filters: 'creator=chloe7303',
          state: 'open',
          labels: [],
          assignee: '',
          sort: '',
          page: 1,
        }),
      inputTextTitle: 'author',
    },
    { title: 'Your pull requests' },
    {
      title: 'Everything assigned to you',
      action: () =>
        setFilterParam({
          filters: 'assignee=chloe7303',
          state: 'open',
          labels: [],
          assignee: '',
          sort: '',
          page: 1,
        }),
      inputTextTitle: 'assignee',
    },
    {
      title: 'Everything mentioning you',
      action: () =>
        setFilterParam({
          filters: 'mentioned=chloe7303',
          state: 'open',
          labels: [],
          assignee: '',
          sort: '',
          page: 1,
        }),
      inputTextTitle: 'mentions',
    },
  ];

  return (
    <div className="flex w-full my-6 md:order-first md:w-auto md:mt-0 md:grow md:mr-4">
      <details className="relative">
        <summary className="flex items-center h-8 bg-default border border-solid border-border font-medium px-4 rounded-l-md hover:bg-[#f3f4f6]">
          Filters
          <span className="inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-2"></span>
        </summary>
        <Dropdown
          header={'Filter Issues'}
          sortList={sortList}
          defaultCurrentFilter={''}
        />
      </details>
      <div className="relative w-full">
        <SearchIcon size={16} className="absolute left-2 top-[8px] fill-text" />
        <input
          type="text"
          placeholder="Search all issues"
          value={filterInputText}
          className="bg-default py-[5px] pl-8 pr-3 border border-solid rounded-r-md w-full text-text focus:bg-light"
          onChange={(e) => setFilterInputText(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default FiltersInput;

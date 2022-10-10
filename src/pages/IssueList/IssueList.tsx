import Subnav from './Subnav';
import IssueBox from './IssueBox';
import Pagination from './Pagination';
import { createContext, useState } from 'react';

export interface filterParamContextInterface {
  filterParam: filterParamInterface;
  setFilterParam: Function;
}
export const filterParamContext =
  createContext<filterParamContextInterface | null>(null);
interface filterParamInterface {
  filters: string;
  state: string;
  labels: [];
  assignee: string;
  sort: string;
  page: number;
}
const IssueList = () => {
  const initialFilterParam: filterParamInterface = {
    filters: '',
    state: 'open',
    labels: [],
    assignee: '',
    sort: '',
    page: 1,
  };
  const [filterParam, setFilterParam] = useState(initialFilterParam);
  const value: filterParamContextInterface = { filterParam, setFilterParam };
  return (
    <filterParamContext.Provider value={value}>
      <div className="py-[24px] max-w-[1280px] mx-auto sm:px-[16px] md:px-[24px] lg:px-[32px]">
        <Subnav />
        <IssueBox />
        <Pagination />
      </div>
    </filterParamContext.Provider>
  );
};

export default IssueList;

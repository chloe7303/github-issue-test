import { ChevronLeftIcon, ChevronRightIcon } from '@primer/octicons-react';
import { filterParamContext, filterParamContextInterface } from './IssueList';
import { useContext } from 'react';

const Pagination = () => {
  const { filterParam, setFilterParam } = useContext(
    filterParamContext
  ) as filterParamContextInterface;

  const handleNextPage = () => {
    setFilterParam((prevValue) => ({ ...prevValue, page: 2 }));
  };
  const handlePrevPage = () => {
    setFilterParam((prevValue) => ({ ...prevValue, page: 1 }));
  };

  return (
    <div className="flex justify-center items-center text-sm my-4">
      <span
        className={`${
          filterParam.page !== 1 ? 'text-[#0969da]' : 'text-[#8c959f]'
        } flex items-center py-1 px-2.5 border border-solid border-transparent hover:border-border hover:rounded-md cursor-pointer`}
        onClick={handlePrevPage}
      >
        <ChevronLeftIcon className="mr-1" />
        <span>Previous</span>
      </span>
      <span
        className={`${
          filterParam.page !== 2 ? 'text-[#0969da]' : 'text-[#8c959f]'
        } flex items-center py-1 px-2.5 border border-solid border-transparent hover:border-border hover:rounded-md cursor-pointer`}
        onClick={handleNextPage}
      >
        <span>Next</span>
        <ChevronRightIcon size={16} className="ml-1" />
      </span>
    </div>
  );
};

export default Pagination;

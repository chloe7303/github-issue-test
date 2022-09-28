import { ChevronLeftIcon, ChevronRightIcon } from '@primer/octicons-react';

const Pagination = () => {
  const pagination = {
    prePages: [1, 2],
    middle: [3, 4, 5, 6, 7],
    nextPages: [8, 9],
  };
  return (
    <div className="flex justify-center items-center text-sm my-4">
      <a
        href="/"
        className="text-[#8c959f] flex items-center py-1 px-2.5 border border-solid border-transparent hover:border-border hover:rounded-md"
      >
        <ChevronLeftIcon className="mr-1" />
        <span>Previous</span>
      </a>
      {pagination.prePages.map((page) => {
        return (
          <a
            key={page}
            href="/"
            className="text-center py-1 px-2.5 min-w-[32px] border border-solid border-transparent hover:border-border hover:rounded-md hidden md:block"
          >
            {page}
          </a>
        );
      })}
      <span className="py-1 px-2.5 min-w-[32px] hidden md:block">...</span>
      {pagination.middle.map((page) => {
        return (
          <a
            key={page}
            href="/"
            className="text-center py-1 px-2.5 min-w-[32px] border border-solid border-transparent hover:border-border hover:rounded-md hidden md:block"
          >
            {page}
          </a>
        );
      })}
      <span className="py-1 px-2.5 min-w-[32px] hidden md:block">...</span>
      {pagination.nextPages.map((page) => {
        return (
          <a
            key={page}
            href="/"
            className="text-center py-1 px-2.5 min-w-[32px] border border-solid border-transparent hover:border-border hover:rounded-md hidden md:block"
          >
            {page}
          </a>
        );
      })}
      <a
        href="/"
        className="text-[#0969da] flex items-center py-1 px-2.5 border border-solid border-transparent hover:border-border hover:rounded-md"
      >
        <span>Next</span>
        <ChevronRightIcon size={16} className="ml-1" />
      </a>
    </div>
  );
};

export default Pagination;

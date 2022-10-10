import { CheckIcon, XIcon } from '@primer/octicons-react';
import { useState, useEffect } from 'react';

const Dropdown = ({ header, sortList }) => {
  const [currentFilter, setCurrentFilter] = useState('');

  const handleFilter = (item) => {
    setCurrentFilter(item.title);
    item.action();
  };

  useEffect(() => {
    if (header === 'Sort by') setCurrentFilter('Newest');
  }, [header]);

  return (
    <div className="absolute left-0 w-[300px] rounded-md bg-light border border-solid border-border mt-2 shadow-md shadow-shadow">
      <div className="px-4 py-2 font-semibold border-b border-solid border-border text-xs flex justify-between">
        {header}
        <div>
          <XIcon />
        </div>
      </div>
      <div>
        {sortList.map((item, index) => (
          <div
            key={index}
            className="p-2 border-b border-solid border-border text-xs cursor-pointer hover:bg-default"
            onClick={() => handleFilter(item)}
          >
            <span
              className={`mr-2 ${currentFilter !== item.title && 'invisible'}`}
            >
              <CheckIcon />
            </span>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

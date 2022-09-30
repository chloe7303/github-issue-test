import { XIcon, CheckIcon } from '@primer/octicons-react';
import { useLabelListQuery } from '../../redux/labelsApi';
import { useState } from 'react';

const FilterDropdown = ({ header, subHeader }) => {
  const [selectedLabel, setSelectedLabel] = useState('');
  const { data, error, isLoading, isFetching, isSuccess } = useLabelListQuery();

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
          <input
            placeholder="Filter labels"
            className="block w-full py-[5px] px-[12px] leading-5 rounded-md border border-solid border-border text-sm"
          />
        </div>
        <div className="overflow-y-auto max-h-[calc(100%-126px)] sm:max-h-[calc(485px-82px)]">
          <div className="flex items-start w-full p-4 overflow-hidden text-left cursor-pointer border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pb-[7px]">
            <div className="flex items-start mr-2">
              <CheckIcon fill={'#ffffff'} />
            </div>
            <span className="font-semibold">{subHeader}</span>
          </div>
          {isLoading && <h2>Loading...</h2>}
          {isFetching && <h2>Fetching...</h2>}
          {error && <h2>Something went wrong</h2>}
          {isSuccess &&
            data.map((label, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-start w-full p-4 overflow-hidden text-left cursor-pointer border-b border-solid hover:bg-default border-b-border sm:pt-[7px] sm:pb-[7px]`}
                  onClick={() => setSelectedLabel(label.name)}
                >
                  <div
                    className={`flex items-start mr-2 ${
                      selectedLabel !== label.name && 'invisible'
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
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;

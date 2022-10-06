import { XIcon, CheckIcon } from '@primer/octicons-react';
import { useState } from 'react';

const FilterDropdown = ({
  header,
  subHeader,
  resetHeader,
  inputPlaceholder,
  selectedValue,
  handleSelect,
  sortList,
  getListSuccess,
  closeDropdown,
}) => {
  const [searchInputText, setSearchInputText] = useState('');

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex p-4 flex-col z-[100] sm:z-[1] sm:absolute sm:top-auto sm:right-auto sm:left-auto sm:bottom-auto sm:p-0 lg:right-0 shadow-shadow shadow-md text-[#000] text-xs">
      <div className="h-4/5 mt-0 bg-light border border-solid border-border rounded-md sm:h-auto sm:max-h-[480px] sm:mt-2 sm:w-[300px] shadow-shadow shadow-md">
        <header className="flex p-4 items-center border-b border-solid border-b-border sm:pt-[7px] sm:pr-[7px] sm:pb-[7px]">
          <span className="font-semibold flex-1">{header}</span>
          {closeDropdown && (
            <button className="cursor-pointer leading-none rounded-none">
              <XIcon fill={'#57606a'} />
            </button>
          )}
        </header>
        <div className="p-4 m-0 border-b border-solid border-b-border sm:p-2">
          {inputPlaceholder && (
            <input
              placeholder={inputPlaceholder}
              className="block w-full py-[5px] px-[12px] leading-5 rounded-md border border-solid border-border text-sm"
              value={searchInputText}
              onChange={(e) => setSearchInputText(e.target.value)}
            />
          )}
        </div>
        <div className="overflow-y-auto max-h-[calc(100%-126px)] sm:max-h-[calc(485px-82px)]">
          {resetHeader && (
            <div
              className="flex items-start p-4 overflow-hidden text-left cursor-pointer border-b border-solid border-b-border sm:pt-[7px] sm:pb-[7px] hover:bg-default"
              onClick={() => resetHeader.action()}
            >
              <span className="font-semibold ml-6">{resetHeader.title}</span>
            </div>
          )}
          {subHeader && (
            <div className="flex items-start p-4 overflow-hidden text-left border-b border-solid border-b-border sm:pt-[7px] sm:pb-[7px] bg-default font-semibold">
              {subHeader}
            </div>
          )}
          {getListSuccess &&
            sortList
              .filter((item) =>
                item.title
                  ? item.title.includes(searchInputText) ||
                    item.description?.includes(searchInputText)
                  : true
              )
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-start w-full p-4 overflow-hidden text-left cursor-pointer border-b border-solid hover:bg-default border-b-border sm:pt-[7px] sm:pb-[7px]`}
                    onClick={() => handleSelect(item)}
                  >
                    {item.title && (
                      <div
                        className={`flex items-start mr-2 ${
                          !selectedValue.includes(item.title) && 'invisible'
                        }`}
                      >
                        <CheckIcon fill={'#000000'} />
                      </div>
                    )}
                    {item.prefixElement && (
                      <div
                        dangerouslySetInnerHTML={{ __html: item.prefixElement }}
                      />
                    )}
                    {item.title && (
                      <div className="leading-tight min-w-0">
                        <div className="flex items-center">
                          <div className="font-semibold truncate sm:pt-[2px]">
                            {item.title}
                          </div>
                        </div>
                        {item.description && (
                          <div className="font-medium text-[#57606a] mt-1 truncate">
                            {item.description}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;

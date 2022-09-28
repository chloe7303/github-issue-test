import { XIcon, CheckIcon } from '@primer/octicons-react';

const labelslist = [
  {
    name: '123lll26',
    des: '123',
    color: 'bg-[#acacac]',
    usercustomname: 'elaine',
  },
  {
    name: '123456',
    des: '123',
    color: 'bg-[#7F1D1D]',
  },
  {
    name: 'bug',
    des: 'fixed it',
    color: 'bg-[#f29513]',
  },
  {
    name: 'fight',
    des: '',
    color: 'bg-[#7F1D1D]',
    usercustomname: 'elaine',
  },
  {
    name: 'new label1321',
    des: '123',
    color: 'bg-[#7F1D1D]',
  },
  {
    name: 'new',
    des: 'new label',
    color: 'bg-[#7F1D1D]',
  },
];

const FilterDropdown = ({ header, subHeader }) => {
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
          <a
            href="/"
            className="flex items-start w-full p-4 overflow-hidden text-left cursor-pointer border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pb-[7px]"
          >
            <div className="flex items-start mr-2">
              <CheckIcon fill={'#ffffff'} />
            </div>
            <span className="font-semibold">{subHeader}</span>
          </a>
          {labelslist.map((element, index) => {
            return (
              <a
                key={index}
                href="/"
                className={`flex items-start w-full p-4 overflow-hidden text-left cursor-pointer border-b border-solid hover:bg-default border-b-border sm:pt-[7px] sm:pb-[7px]`}
              >
                <div className="flex items-start mr-2">
                  <CheckIcon fill={'#000000'} />
                </div>
                <span
                  className={`${element.color} mt-px rounded-[2em] w-[1em] h-[1em] mr-2`}
                />
                <div className="leading-tight min-w-0">
                  <div className="flex items-center">
                    <div className="font-semibold truncate sm:pt-[2px]">
                      {element.name}
                    </div>
                  </div>
                  {element.des !== '' ? (
                    <div className="font-medium text-[#57606a] mt-1 truncate">
                      {element.des}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;

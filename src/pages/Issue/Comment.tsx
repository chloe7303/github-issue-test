import { KebabHorizontalIcon, SmileyIcon } from '@primer/octicons-react';

const Comment = ({ owner }) => {
  return (
    <div className="grow relative py-4 before:timeline">
      <div className="rounded-md border-border border border-solid grow md:before:caret md:after:caret md:after:bg-default md:after:ml-[2px] after:top-[11px] before:top-[11px] after:left-[-8px] before:left-[-8px] relative">
        <div className="flex border-border border-b border-solid justify-between lg:flex-row md:items-start lg:items-center bg-default rounded-t-md py-2 px-4">
          <div className="text-[14px]">
            <span className="font-semibold">elaine011 </span>
            <span className="text-text">commented 5 hours ago</span>
          </div>
          <div className="flex text-text">
            <span className="text-[12px] mr-3 border-border border-solid border rounded-xl px-2 py-0.5 font-semibold">
              Owner
            </span>
            <details className="mr-3 cursor-pointer">
              <summary className="flex">
                <SmileyIcon />
              </summary>
            </details>
            <details className="relative text-black cursor-pointer">
              <summary className="flex">
                <KebabHorizontalIcon />
              </summary>
              <div className="absolute top-5 right-0 bg-light rounded-md border-border border border-solid text-[14px]">
                <div className="py-2 px-5 cursor-pointer hover:bg-emphasis hover:text-light">
                  Edit
                </div>
                <div className="py-2 px-5 cursor-pointer hover:bg-[#cf222e] hover:text-light">
                  Delete
                </div>
              </div>
            </details>
          </div>
        </div>
        <div className="p-4 bg-light rounded-b-md">hello hello</div>
        <div className="p-4 pt-0 bg-light rounded-b-md">
          <button className="bg-default p-1 border border-border border-solid rounded-full text-text mr-1">
            <SmileyIcon className="!align-bottom" />
          </button>
          <button className="p-1 px-2 border border-border border-solid rounded-2xl text-text hover:bg-default mr-1.5">
            <span className="inline-block w-[16px] mr-2.5">👀</span>
            <span className="inline-block text-[14px]">1</span>
          </button>
          <button className="p-1 px-2 border border-border border-solid rounded-2xl text-text hover:bg-default mr-1.5">
            <span className="inline-block w-[16px] mr-2.5">👀</span>
            <span className="inline-block text-[14px]">1</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;

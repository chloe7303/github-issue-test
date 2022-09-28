import { IssueOpenedIcon, CommentIcon } from '@primer/octicons-react';

const IssueItem = () => {
  return (
    <div className="px-4 py-3 flex border-t border-border border-solid hover:bg-default">
      <IssueOpenedIcon className="fill-primary" />
      <div className="px-2 grow">
        <span className="font-semibold mr-1">
          Time out and Memory Leak Issue
        </span>

        <span className="block lg:inline">
          <span className="font-semibold bg-[#dcb5ac] py-[1px] px-[7px] rounded-[10px] mr-1 text-xs">
            bug
          </span>
          <span className="font-semibold bg-[#169f5a] py-[1px] px-[7px] rounded-[10px] mr-1 text-xs">
            test
          </span>
        </span>
        <div className="text-text text-xs mt-1">
          #5 opened 22 hours ago by chloe7303
        </div>
      </div>
      <div className="w-1/4 hidden sm:flex">
        <div className="grow text-right"></div>
        <div className="grow text-right flex justify-end">
          <img
            className="w-[20px] h-[20px] border"
            src="https://avatars.githubusercontent.com/u/34449805?s=40&v=4"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] border"
            src="https://avatars.githubusercontent.com/u/34449805?s=40&v=4"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] border"
            src="https://avatars.githubusercontent.com/u/34449805?s=40&v=4"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] border"
            src="https://avatars.githubusercontent.com/u/34449805?s=40&v=4"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] border"
            src="https://avatars.githubusercontent.com/u/34449805?s=40&v=4"
            alt=""
          />
        </div>
        <div className="grow text-right">
          <CommentIcon className="fill-text mr-1" />
          <span className="text-sm">3</span>
        </div>
      </div>
    </div>
  );
};

export default IssueItem;

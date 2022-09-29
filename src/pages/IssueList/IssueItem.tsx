import {
  IssueOpenedIcon,
  CommentIcon,
  IssueClosedIcon,
} from '@primer/octicons-react';

const IssueItem = ({ issue }) => {
  const computedIssueCreatedTime = (createdTime) => {
    const milliseconds = +new Date() - +new Date(createdTime);
    const days = Math.floor(milliseconds / (24 * 3600 * 1000));
    const hours = Math.floor(milliseconds / (3600 * 1000));
    const minutes = Math.floor(milliseconds / (60 * 1000));
    const seconds = Math.round(milliseconds / 1000);
    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else if (seconds > 0) {
      return `${seconds} seconds ago`;
    }
  };
  if (issue.pull_request) return <></>;
  return (
    <div className="px-4 py-3 flex border-t border-border border-solid hover:bg-default">
      {issue.state === 'open' && <IssueOpenedIcon className="fill-primary" />}
      {issue.state === 'closed' && <IssueClosedIcon className="fill-done" />}
      <div className="px-2 grow">
        <span className="font-semibold mr-1">{issue.title}</span>

        <span className="block lg:inline">
          {issue.labels?.map((label, index) => {
            const lightOrDark = (bgColor = '000080') => {
              const r = parseInt(bgColor.slice(0, 2), 16);
              const g = parseInt(bgColor.slice(2, 4), 16);
              const b = parseInt(bgColor.slice(4, 6), 16);
              const hsp = r * 0.3 + g * 0.6 + b * 0.1;
              if (hsp > 127.5) {
                return 'black';
              } else {
                return 'white';
              }
            };
            return (
              <span
                key={index}
                className="font-semibold py-[1px] px-[7px] rounded-[10px] mr-1 text-xs"
                style={{
                  backgroundColor: `#${label.color}`,
                  color: `${lightOrDark(label.color)}`,
                }}
              >
                {label.name}
              </span>
            );
          })}
        </span>
        <div className="text-text text-xs mt-1">
          {`#${issue.number} opened ${computedIssueCreatedTime(
            issue.created_at
          )} by ${issue.user.login}`}
        </div>
      </div>
      <div className="w-1/4 hidden sm:flex">
        <div className="grow text-right"></div>
        <div className="grow text-right flex justify-end hover:cursor-pointer">
          {issue.assignees.map((assignee, index) => (
            <img
              key={index}
              className="h-[20px] w-[20px] rounded-[50%]"
              src={assignee.avatar_url}
              alt="avatar"
            />
          ))}
        </div>
        <div className="grow text-right">
          {!!issue.comments && (
            <>
              <CommentIcon className="fill-text mr-1" />
              <span className="text-sm">{issue.comments}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IssueItem;

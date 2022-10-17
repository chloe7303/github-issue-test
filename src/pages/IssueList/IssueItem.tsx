import {
  IssueOpenedIcon,
  CommentIcon,
  IssueClosedIcon,
  SkipIcon,
} from '@primer/octicons-react';
import Label from '../LabelList/Label';

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
      {issue.state === 'closed' && issue.state_reason === 'completed' && (
        <IssueClosedIcon className="fill-done" />
      )}
      {issue.state === 'closed' && issue.state_reason === 'not_planned' && (
        <SkipIcon className="fill-muted" />
      )}
      <div className="px-2 grow">
        <span className="font-semibold mr-1">{issue.title}</span>

        <span className="block lg:inline my-1">
          {issue.labels?.map((label, index) => {
            return (
              <Label
                key={index}
                bgColorCode={label.color}
                name={label.name}
                thin={true}
              />
            );
          })}
        </span>
        <div className="text-text text-xs mt-1">
          {issue.state === 'open' &&
            `#${issue.number} opened ${computedIssueCreatedTime(
              issue.created_at
            )} by ${issue.user.login}`}
          {issue.state === 'closed' &&
            `#${issue.number} by ${
              issue.user.login
            } was closed ${computedIssueCreatedTime(issue.created_at)}`}
        </div>
      </div>
      <div className="w-1/4 hidden sm:flex">
        <div className="grow text-right"></div>
        <div className="grow text-right flex justify-end hover:cursor-pointer">
          {issue.assignees.map((assignee, index) => (
            <img
              key={index}
              className={`h-[20px] w-[20px] rounded-[50%] ${
                index !== issue.assignees.length && 'mr-[-11px]'
              } `}
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

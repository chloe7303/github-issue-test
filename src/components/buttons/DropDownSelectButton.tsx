import { CheckIcon, TriangleDownIcon } from '@primer/octicons-react';

export const DropDownSelectButton = ({
  action,
  actionType,
  selectedIssueAction,
  handleSubmit,
}) => {
  return (
    <div className="flex mr-2">
      <button
        className="px-4 py-1 text-[14px] font-medium rounded-l-md border-border border-solid border h-[32px] cursor-pointer bg-default hover:bg-[#f3f4f6] flex items-center"
        onClick={() => handleSubmit()}
      >
        <span className="mr-2">{action.icon}</span>
        <span className="color-[#24292f] leading-5">{action.title}</span>
      </button>
      <details className="relative bg-default hover:bg-[#f3f4f6] border-border border-solid border rounded-r-md border-l-0">
        <summary className="flex px-2.5 py-1.5">
          <TriangleDownIcon />
        </summary>
        <div className="absolute top-9 right-0 border border-border border-solid rounded-md bg-light min-w-[300px] text-[14px]">
          {actionType.map((action, index) => (
            <div
              key={index}
              className="flex pl-4 py-2 border-b border-border border-solid cursor-pointer hover:bg-default"
              onClick={() => action.handleClick()}
            >
              <CheckIcon
                className={`!align-bottom mr-2 ${
                  selectedIssueAction.state_reason !== action.state_reason &&
                  '!invisible'
                }`}
              />
              <div>
                <div className="font-medium mb-1">
                  <span className="mr-1 align-bottom">{action.icon}</span>
                  <span>{action.title}</span>
                </div>
                <div className="text-text text-[12px]">
                  {action.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

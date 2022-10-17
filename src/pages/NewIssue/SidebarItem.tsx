import { GearIcon } from '@primer/octicons-react';

const SidebarItem = ({
  title,
  content,
  dropdownComponent,
  selectedListComponent,
}) => {
  return (
    <div className="py-4 border-b border-solid border-border text-[12px]">
      <details className="mb-3 relative">
        <summary className="flex justify-between font-semibold group cursor-pointer">
          <span className="group-hover:text-emphasis">{title}</span>
          {dropdownComponent && (
            <span className="group-hover:text-emphasis">
              <GearIcon />
            </span>
          )}
        </summary>
        {dropdownComponent}
      </details>
      {dropdownComponent && selectedListComponent?.length !== 0 ? (
        selectedListComponent?.map((item) => item.component)
      ) : (
        <span className="leading-normal">
          {content.text}
          <span
            className="cursor-pointer hover:text-emphasis"
            onClick={() => content.action()}
          >
            {content.actionText}
          </span>
          <span className="cursor-pointer text-emphasis">{content.link}</span>
        </span>
      )}
    </div>
  );
};

export default SidebarItem;

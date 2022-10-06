import { GearIcon } from '@primer/octicons-react';
import Label from '../LabelList/Label';

const SidebarItem = ({ title, content, dropdownComponent, selectedList }) => {
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
      {console.log(selectedList)}
      {dropdownComponent && selectedList?.length !== 0 ? (
        selectedList?.map((item, index) => {
          return item.title ? (
            <div key={index} className="flex items-center mb-2 cursor-pointer">
              <div dangerouslySetInnerHTML={{ __html: item.prefixElement }} />
              <div className="font-semibold truncate sm:pt-[2px]">
                {item.title}
              </div>
            </div>
          ) : (
            <Label key={index} bgColorCode="000000" thin={true} name={'123'} />
          );
        })
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

import { GearIcon } from '@primer/octicons-react';

const Sidebar = () => {
  return (
    <div>
      <div className="py-4 border-b border-solid border-border">
        <details className="mb-4">
          <summary className="flex">
            Assignees
            <GearIcon />
          </summary>
          <div>dropdown</div>
        </details>
        <span>
          No one-<span>assign yourself</span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;

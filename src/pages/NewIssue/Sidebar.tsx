import { GearIcon } from '@primer/octicons-react';
import Button from '../../components/buttons/Button';

const Sidebar = () => {
  return (
    <div className="md:w-[240px] lg:w-[256px]">
      <div className="py-4 border-b border-solid border-border text-[12px]">
        <details className="mb-4">
          <summary className="flex justify-between font-semibold group">
            <span className="group-hover:text-emphasis">Assignees</span>
            <span className="group-hover:text-emphasis">
              <GearIcon />
            </span>
          </summary>
          <div>dropdown</div>
        </details>
        <span>
          No one-<span>assign yourself</span>
        </span>
      </div>
      {/* just layout */}
      <div className="py-4 border-b border-solid border-border text-[12px]">
        <h5 className="mb-4 font-semibold">Development</h5>
        <span className="leading-normal">
          Shows branches and pull requests linked to this issue.
        </span>
      </div>
      <div className="py-4 border-b border-solid border-border text-[12px] mb-6">
        <h5 className="mb-4 font-semibold">Helpful resources</h5>
        <span className="text-emphasis">GitHub Community Guidelines</span>
      </div>
      <div className="md:hidden">
        <Button text={'Submit new issue'} primary={true} disabled={true} />
      </div>
    </div>
  );
};

export default Sidebar;

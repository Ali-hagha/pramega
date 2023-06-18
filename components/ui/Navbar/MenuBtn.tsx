import { Dispatch, SetStateAction } from 'react';
import { RiMenuLine } from 'react-icons/ri';

type Props = {
  setIsSideDrawerActive?: Dispatch<SetStateAction<boolean>>;
};
const MenuBtn = ({ setIsSideDrawerActive }: Props) => {
  return (
    <div className="lg:hidden w-24">
      <button
        className={
          'p-2 rounded hover:text-primary hover:bg-neutral-dark/90 active:text-primary active:bg-neutral-dark/90 transition-colors'
        }
        // onClick={() => setIsSideDrawerActive(prevState => !prevState)}
      >
        <RiMenuLine className="text-2xl" />
      </button>
    </div>
  );
};

export default MenuBtn;

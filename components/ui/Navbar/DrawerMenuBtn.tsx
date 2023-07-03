import { Dispatch, SetStateAction } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { useContext } from 'react';
import { MenuDrawerContext } from '@/context/MenuDrawerContext';

const MenuBtn = () => {
  const { toggleMenu } = useContext(MenuDrawerContext);

  return (
    <div className="lg:hidden w-24">
      <button
        className={
          'p-2 rounded hover:text-primary hover:bg-neutral-dark/90 active:text-primary active:bg-neutral-dark/90 transition-colors'
        }
        onClick={toggleMenu}
      >
        <RiMenuLine className="text-2xl" />
      </button>
    </div>
  );
};

export default MenuBtn;

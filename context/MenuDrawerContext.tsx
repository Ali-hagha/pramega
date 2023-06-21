import { createContext, useState } from 'react';

type MenuDrawerContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MenuDrawerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <MenuDrawerContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuDrawerContext.Provider>
  );
};

const MenuDrawerContext = createContext<MenuDrawerContextType>({
  isOpen: false,
  toggleMenu: () => null,
});

export { MenuDrawerContext, MenuDrawerContextProvider };

import { createContext, useState } from 'react';

type MenuDrawerContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const MenuDrawerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <MenuDrawerContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuDrawerContext.Provider>
  );
};

const MenuDrawerContext = createContext<MenuDrawerContextType>({
  isMenuOpen: false,
  toggleMenu: () => null,
});

export { MenuDrawerContext, MenuDrawerContextProvider };

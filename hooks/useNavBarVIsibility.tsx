import { useState, useEffect } from 'react';

const useNavbarVisibility = (): [boolean, boolean] => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;
        setVisible(visible);
        setPrevScrollPos(currentScrollPos);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return [visible, prevScrollPos > 0];
};

export default useNavbarVisibility;

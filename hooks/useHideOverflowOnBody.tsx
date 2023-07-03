import { useEffect } from 'react';

const useHideOverflowOnBody = (isDrawerOpen: boolean) => {
  useEffect(() => {
    if (isDrawerOpen) document.body.classList.add('overflow-hidden');
    if (!isDrawerOpen) document.body.classList.remove('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isDrawerOpen]);
};

export default useHideOverflowOnBody;

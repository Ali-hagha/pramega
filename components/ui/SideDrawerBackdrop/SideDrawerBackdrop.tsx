import { Fade } from '@mui/material';
import React from 'react';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const SideDrawerBackdrop = ({ isOpen, onClick }: Props) => {
  return (
    <Fade in={isOpen}>
      <div
        className="fixed inset-0 bg-black/50 z-[90] "
        onClick={onClick}
      ></div>
    </Fade>
  );
};

export default SideDrawerBackdrop;

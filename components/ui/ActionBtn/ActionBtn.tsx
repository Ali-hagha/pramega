import { useScreenSize } from '@/hooks/useScreenSize';
import { CircularProgress } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
};

const ActionBtn = ({ children, disabled, onClick }: Props) => {
  const { isMobile } = useScreenSize();

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 blur-lg bg-primary-dark opacity-75 rounded-lg group-hover:blur-xl group-hover:opacity-100 group-hover:duration-200 duration-1000 trasition"></div>
      <button
        disabled={disabled}
        onClick={onClick}
        className="relative flex items-center justify-center rounded-lg bg-neutral-800 px-6 py-4 w-full font-bold md:font-semibold text-base md:text-lg uppercase group-hover:bg-black transition duration-200 active:bg-black text-primary disabled:bg-neutral-500  disabled:cursor-not-allowed"
      >
        {children}
        {/* show spinner when btn is disabled */}
        {disabled && (
          <CircularProgress
            sx={{ color: 'rgb(235,252,75)' }}
            size={isMobile ? 24 : 28}
          />
        )}
      </button>
    </div>
  );
};

export default ActionBtn;

import React from 'react';
import { RiLoader2Line } from 'react-icons/ri';

const Spinner = ({ className }: { className?: string }) => {
  return <RiLoader2Line className="animate-spin" />;
};

export default Spinner;

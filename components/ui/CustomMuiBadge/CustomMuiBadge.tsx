import { Badge } from '@mui/material';
import React from 'react';

type Props = {
  content: React.ReactNode;
  children: React.ReactNode;
};

const CustomMuiBadge = ({ content, children }: Props) => {
  return (
    <Badge
      badgeContent={content}
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: '#d9f104',
          fontWeight: '600',
          marginTop: '5px',
        },
      }}
    >
      {children}
    </Badge>
  );
};

export default CustomMuiBadge;

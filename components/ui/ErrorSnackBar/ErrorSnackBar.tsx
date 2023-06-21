import { CartContext } from '@/context/CartContext';
import { Alert, Snackbar } from '@mui/material';
import React, { useContext } from 'react';

const ErrorSnackBar = () => {
  const { error, handleClearError } = useContext(
    CartContext
  ) as CartContextValue;

  return (
    <Snackbar
      open={!!error}
      autoHideDuration={6000}
      onClose={handleClearError}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity="error" sx={{ width: '100%' }} onClose={handleClearError}>
        Something went wrong. Please try again later.
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackBar;

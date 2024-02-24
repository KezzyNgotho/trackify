import React, { useState } from 'react';
import * as Yup from 'yup'; // For validation (optional)
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ThemeProvider,
  createTheme,
} from '@mui/material';

// Your theme (customize as needed)
const theme = createTheme();

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    // Implement your login logic here
    // ...
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email} // Convert errors.email to boolean
          helperText={errors.email} // Display error message
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password} // Convert errors.password to boolean
          helperText={errors.password} // Display error message
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default RegistrationScreen;

// src/App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import UserProfileCard from './components/UserProfileCard';

// Define a theme
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap your component with ThemeProvider */}
      <div className="App">
        <UserProfileCard />
      </div>
    </ThemeProvider>
  );
}

export default App;

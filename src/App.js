import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import './App.css';
import WeatherCard from "./components/WeatherCard";

const baseTheme = createMuiTheme();

function App() {
  return (
    <div>
      <ThemeProvider theme={baseTheme}>
        <div className="App">
          <header className="App-header">
            <WeatherCard/>
          </header>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

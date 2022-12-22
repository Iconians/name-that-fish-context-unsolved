import React from "react";
import "./App.css";
import { FishGame } from "./Components/FishGame";
import { AppProvider } from "./app.Context";

function App() {
  return (
    <div className="App">
      <header>
        <AppProvider>
          <FishGame />
        </AppProvider>
      </header>
    </div>
  );
}

export default App;

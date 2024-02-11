import React, { useState } from "react";

export const ModeContext = React.createContext({
  changeMode: () => {},
  mode: "hard",
});

export function ModeProvider({ children }) {
  const [mode, setMode] = useState("hard");

  const changeMode = () => {
    setMode(prevMode => (prevMode === "hard" ? "easy" : "hard"));
  };

  return (
    <ModeContext.Provider
      value={{
        changeMode,
        mode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}

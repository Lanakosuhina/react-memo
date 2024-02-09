import React, { useState } from "react";

export const ModeContext = React.createContext(null);

export function ModeProvider({ children }) {
  // создаем начальное состояние - сложный режим (до нажтия на чекбокс)
  const [mode, setMode] = useState("hard");

  function changeMode() {
    if (mode === "hard") {
      setMode("easy");
    }
    if (mode === "easy") {
      setMode("hard");
    }
  }

  return <ModeContext.Provider value={(changeMode, mode)}>{children}</ModeContext.Provider>;
}

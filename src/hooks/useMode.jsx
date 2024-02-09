import { useContext } from "react";
import { ModeContext } from "../contexts/ModeContext";

export default function useMode() {
  return useContext(ModeContext);
}

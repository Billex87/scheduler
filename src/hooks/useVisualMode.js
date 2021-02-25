import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {

    if (replace) {
      setHistory(prev => { 
        const copy = [...prev];
        copy[copy.length - 1] = newMode;
  
        return copy;
      });
      setMode(newMode);
    } else {
      setHistory(prev => [...prev, newMode]);
      setMode(newMode);
    }
  }

  function back() {
    if (history.length > 1) {

      setHistory(prev => {  
        const copy = [...prev];
        copy.pop();
        return copy;
      });
      const prev = history[history.length - 2];
      setMode(prev);
    }
  }
  return { mode, transition, back };
}

import { useState } from "react";
export default function useVisualMode(initial) {
const [mode, setMode] = useState(initial);
const [history, setHistory] = useState([initial]);

function transition (next, replace = false) {
  if (replace) {
  setMode(next);
} else {
  setMode(next);
  setHistory([...history, mode]);
}}

function back() {
  if (history.length >= 1) {
    setMode(history[history.length-1])
    history.pop()
  }
}
  return { mode, transition, back };
}


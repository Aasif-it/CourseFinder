import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState(() => localStorage.getItem("theme-mode") || "system");

  useEffect(() => {
    const html = document.documentElement;
    const apply = (m) => {
      if (m === "dark") html.classList.add("dark");
      else if (m === "light") html.classList.remove("dark");
      else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        prefersDark ? html.classList.add("dark") : html.classList.remove("dark");
      }
    };
    apply(mode);
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const prefersDark = mq.matches;
      const html = document.documentElement;
      prefersDark ? html.classList.add("dark") : html.classList.remove("dark");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode]);

  return (
    <div className="flex items-center gap-3">
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        className="input text-sm"
        aria-label="Theme"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

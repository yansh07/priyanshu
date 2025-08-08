import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 bg-gray-200 border rounded-full dark:bg-gray-700"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

import { useState, useEffect } from 'react';

export default function Theme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="fixed top-0 right-0 p-4">
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-colors duration-300"
      >
        {theme === 'light' ? '🌞' : '🌜'}
      </button>
    </div>
  );
}

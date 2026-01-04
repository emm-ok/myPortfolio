import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true)
    }
  }
  return (
    <button onClick={toggleTheme} className={cn("cursor-pointer z-50 p-2 bg-black/85 dark:bg-white/20 rounded-full transition-colors duration-300", 
      "focus:outline-hidden"
    )}>
      {isDarkMode ? (
        <Sun className='md:h-6 md:w-6 h-4 w-4  text-yellow-300' />
      ) : (
        <Moon className='md:h-6 md:w-6 h-4 w-4  text-white' />
      )}
    </button>
  )
}

export default ThemeToggle  
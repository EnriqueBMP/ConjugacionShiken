'use client';

import { FaSnowflake } from 'react-icons/fa'; 
import { GiMapleLeaf } from 'react-icons/gi';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted &&
        (currentTheme === 'dark' ? (
          <FaSnowflake
            onClick={() => setTheme('light')}
            className='text-xl cursor-pointer hover:text-blue-300'
          />
        ) : (
          <GiMapleLeaf
            onClick={() => setTheme('dark')}
            className='text-xl cursor-pointer hover:text-orange-600'
          />
        ))}
    </div>
  );
}
// src/components/ThemeToggle.tsx
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      aria-label={isDark ? 'Basculer en clair' : 'Basculer en sombre'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-14 h-8 p-1 rounded-full flex items-center bg-luxury-obsidian/90 hover:bg-luxury-obsidian transition-colors duration-300 shadow"
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm transition-transform duration-300
          ${isDark ? 'translate-x-6 bg-luxury-gold text-black' : 'translate-x-0 bg-luxury-gold/90 text-black'}`}
      >
        {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </div>
    </button>
  );
}



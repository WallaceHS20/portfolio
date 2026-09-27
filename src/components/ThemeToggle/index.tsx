import { useTheme } from '@/contexts/ThemeContext';
import { Button } from 'primereact/button';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      icon={theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'}
      onClick={toggleTheme}
      className="p-button-rounded p-button-text transition-colors text-amber-500 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-800"
      aria-label="Alternar modo claro e escuro"
    />
  );
};
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //nao vai seguir o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'; //mudar set theme para valor customizado.
      return nextTheme;
    });
  }

  useEffect(() => {
    console.log('o tema mudou para', theme, Date.now());
    document.documentElement.setAttribute('date-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]); //executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menulink}
        href='#'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menulink}
        href='#'
        aria-label='Ir para o historico'
        title='Ir para o historico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menulink}
        href='#'
        aria-label='Ir para as configurações'
        title='Ir para as configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menulink}
        href='#'
        aria-label='Trocar o tema'
        title='Trocar o tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}

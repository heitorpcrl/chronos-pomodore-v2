import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menulink} href='#'>
        <HouseIcon />
      </a>
      <a className={styles.menulink} href='#'>
        <HistoryIcon />
      </a>
      <a className={styles.menulink} href='#'>
        <SettingsIcon />
      </a>
      <a className={styles.menulink} href='#'>
        <SunIcon />
      </a>
    </nav>
  );
}

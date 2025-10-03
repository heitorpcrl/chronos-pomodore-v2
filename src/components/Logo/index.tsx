import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.Logo}>
      <a href='#' className={styles.logolink}>
        <TimerIcon />
        <span>Chronos Pomodoro V2</span>
      </a>
    </div>
  );
}

import styles from './styles.module.css';

type Footerprops = {
  children: React.ReactNode;
};

export function Footer({ children }: Footerprops) {
  return (
    <footer className={styles.Footer}>
      <a href='#' className={styles.footerLink}>
        {children}
      </a>
    </footer>
  );
}

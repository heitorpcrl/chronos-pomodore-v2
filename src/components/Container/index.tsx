import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};
export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>{children}</div>
    </div>
  );
}

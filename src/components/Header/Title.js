import styles from './Header.module.scss';

export default function Title({ content, isActive }) {
  if (isActive) {
    return <div className={styles.nav__title}>{content}</div>;
  } else {
    return (
      <div className={[styles.nav__title, styles['nav__title--inactive']].join(' ')}>{content}</div>
    );
  }
}

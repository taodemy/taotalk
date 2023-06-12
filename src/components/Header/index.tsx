import styles from './Header.module.scss';
import LogInButton from './LogInButton';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <nav className={styles.nav}>
        <h1 className={styles.nav__heading}>TaoTalk</h1>
        <div className={styles.nav__divide}>|</div>
        <ul className={styles.nav__list}>
          <li>
            <a title="Home" href="#" className={styles.nav__list_item}>
              Home
            </a>
          </li>
          <li>
            <a
              title="Textbook"
              href="#"
              className={[styles.nav__list_item, styles['nav__list_item--inactive']].join(' ')}
            >
              Textbook
            </a>
          </li>
          <li>
            <a
              title="Statistics"
              href="#"
              className={[styles.nav__list_item, styles['nav__list_item--inactive']].join(' ')}
            >
              Statistics
            </a>
          </li>
          <li>
            <a
              title="Games"
              href="#"
              className={[styles.nav__list_item, styles['nav__list_item--inactive']].join(' ')}
            >
              Games
              <img src="/down_arrow.svg" alt="down array"></img>
            </a>
          </li>
        </ul>
      </nav>
      <LogInButton userName={'Alex'} />
    </div>
  </header>
);

export default Header;

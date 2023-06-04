import styles from './Header.module.scss';
import Title from './Title';
import AccountLabel from './AccountLabel';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <div className={styles.nav}>
        <div className={styles.nav__heading}>TaoTalk</div>
        <div className={styles.nav__divide}>|</div>
        <Title content={'Home'} isActive={true} />
        <Title content={'Textbook'} isActive={false} />
        <Title content={'Statistics'} isActive={false} />
        <select
          className={[styles.nav__title_select, styles['nav__title_select--inactive']].join(' ')}
        >
          <option value="Game">Game</option>
        </select>
      </div>
      <AccountLabel userName={'Alex'} />
    </div>
  </header>
);

export default Header;

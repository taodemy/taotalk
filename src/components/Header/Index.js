import React from 'react';
import styles from './Header.module.css';
import Title from './Title';
import AccountLabel from './AccountLabel';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.frame4}>
      <div className={styles.frame9}>TaoTalk </div>
      <div>|</div>
      <Title content={'Home'} isActive={true} />
      <Title content={'Textbook'} isActive={false} />
      <Title content={'Statistics'} isActive={false} />
      <select style={{ borderWidth: 0, backgroundColor: '#F6F5F4' }}>
        <option value="Game">Game</option>
      </select>
      <AccountLabel userName={'Alex'} />
    </div>
  </div>
);
export default Header;

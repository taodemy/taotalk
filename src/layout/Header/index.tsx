import { useState } from 'react';
import styles from './Header.module.scss';
import LogInButton from './LogInButton';
import DropDownMenu from '../../components/DropDownMenu';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
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
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                title="Games"
                href="#"
                className={[styles.nav__list_item, styles['nav__list_item--inactive']].join(' ')}
              >
                Games
                <img src="/down_arrow.svg" alt="down array"></img>
              </a>
              {isHovered && (
                <div className=" shadow-[0_343px_343px_0_rgba(23, 64, 51, 0.08)] absolute top-[46px] w-[215px] rounded-[20px] bg-white ">
                  <DropDownMenu menuContent={['Sprint →', 'Audio-call →']} />
                </div>
              )}
            </li>
          </ul>
        </nav>
        <LogInButton userName={'Alex'} />
      </div>
    </header>
  );
};

export default Header;

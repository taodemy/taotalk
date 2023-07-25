import { useState } from 'react';
import styles from './Header.module.scss';
import LogInButton from './LogInButton';
import DropDownMenu from '../../components/DropDownMenu';
import Button from '../../components/Shared/Buttons';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';

const Header = ({ session }: { session: Session | null }) => {
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
              <a title="Home" href="/" className={styles.nav__list_item}>
                Home
              </a>
            </li>
            <li>
              <a
                title="Textbook"
                href="/textbook"
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
                <div className=" absolute top-[46px] w-[215px] rounded-[14px] bg-white shadow-[0_343px_343px_0_rgba(23,64,51,0.08)] ">
                  <DropDownMenu menuContent={['Sprint →', 'Audio-call →']} />
                </div>
              )}
            </li>
          </ul>
        </nav>
        {session !== null && session !== undefined ? (
          <LogInButton
            userName={(session.user?.name ?? '').split(' ')[0]}
            onClick={() => signOut()}
          />
        ) : (
          <div onClick={() => signIn()}>
            <Button outline={false} color="cyanDark" label="Sign in" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

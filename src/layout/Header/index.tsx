import { useState } from 'react';
import LogInButton from './LogInButton';
import MenuButton from './MenuButton';
import DropDownMenu from '../../components/DropDownMenu';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/Shared/Buttons';
import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

const Header = ({ session }: { session: Session | null }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseClickOnMenuButton = () => {
    setIsMenuShown(!isMenuShown);
  };

  return (
    <>
      <header className="flex h-[72px] items-center justify-center bg-tk_greyLight shadow-[inset_0_-1px_0_0_rgba(224,224,224,1)] md:h-[88px]">
        <div className="flex w-full items-center justify-between px-[8px] md:px-[32px] lg:w-[1180px] lg:px-0">
          <nav className="flex items-center gap-[30px]">
            <h1 className="text-[21px]">TaoTalk</h1>
            <div className="hidden md:flex md:gap-[30px]">
              <span className="text-tk_greyMedium">|</span>
              <ul className="flex items-center">
                <li>
                  <a title="Home" href="/" className="p2 pr-[30px] hover:text-black">
                    Home
                  </a>
                </li>
                <li>
                  <a title="Textbook" href="/textbook" className="p2 pr-[30px] hover:text-black">
                    Textbook
                  </a>
                </li>
                <li>
                  <a
                    title="Statistics"
                    href="/statistics-content"
                    className="p2 pr-[30px] hover:text-black"
                  >
                    Statistics
                  </a>
                </li>
                <li
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a title="Games" href="#" className="p2 flex pr-[30px] hover:text-black">
                    Games
                    <img src="/down_arrow.svg" alt="down arrow"></img>
                  </a>
                  {isHovered && (
                    <div className="absolute left-[26px] top-[24px] w-[215px] rounded-[14px] bg-white shadow-[0_11px_11px_0_rgba(52,41,39,0.04)] ">
                      <DropDownMenu menuContent={['Sprint →', 'Audio-call →']} />
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </nav>
          <div className="flex gap-2 lg:hidden">
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
        </div>
        {isMenuShown && (
          <div className="absolute top-[88px] z-10 flex h-[640px] w-full items-center justify-center bg-white md:hidden">
            <ul className="text-center font-Dela_Gothic_One text-tk32 leading-8">
              <li className="">Home</li>
              <li className="my-[60px] text-tk_greyDark">Textbook</li>
              <li className="my-[60px] text-tk_greyDark">Statistics</li>
              <li
                className="flex justify-center text-tk_greyDark"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
<<<<<<< HEAD
                Games <img src="/down_arrow.svg" alt="down array"></img>
                {isHovered && (
                  <div className="absolute left-[250px] top-[480px] w-[215px] rounded-[14px] bg-white shadow-[0_11px_11px_0_rgba(52,41,39,0.04)] ">
                    <DropDownMenu menuContent={['Sprint →', 'Audio-call →']} />
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
=======
                Textbook
              </Link>
            </li>
            <li>
              <Link
                title="Statistics"
                href="#"
                className={[styles.nav__list_item, styles['nav__list_item--inactive']].join(' ')}
              >
                Statistics
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                title="Games"
                href="#"
                className={[styles.nav__list_item, styles['nav__list_item--inactive']].join(' ')}
              >
                Games
                <img src="/down_arrow.svg" alt="down array"></img>
              </Link>
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
>>>>>>> ac751a1 (feat: implement sign in and signout using next auth)
  );
};

export default Header;

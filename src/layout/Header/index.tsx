import { useState } from 'react';
import LogInButton from './LogInButton';
import MenuButton from './MenuButton';
import DropDownMenu from '../../components/DropDownMenu';

const Header = () => {
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
    <div>
      <header className="flex h-[88px] items-center justify-center bg-tk_greyLight shadow-xl">
        <div className="flex w-full items-center justify-between px-[8px] md:px-[32px] lg:w-[1180px] lg:px-0">
          <nav className="flex items-center gap-[30px]">
            <h1 className="font-Dela_Gothic_One text-[21px] font-normal tracking-[-0.04em]">
              TaoTalk
            </h1>
            <div className="hidden md:flex md:gap-[30px]">
              <span className="text-tk_greyMedium">|</span>
              <ul className="flex list-none items-center pl-0">
                <li>
                  <a
                    title="Home"
                    href="#"
                    className="flex pl-0 pr-[30px] font-Montserrat leading-[1.4em] tracking-[-0.04em] text-black no-underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    title="Textbook"
                    href="#"
                    className="flex pl-0 pr-[30px] font-Montserrat leading-[1.4em] tracking-[-0.04em] text-tk_greyDark no-underline"
                  >
                    Textbook
                  </a>
                </li>
                <li>
                  <a
                    title="Statistics"
                    href="#"
                    className="flex pl-0 pr-[30px] font-Montserrat leading-[1.4em] tracking-[-0.04em] text-tk_greyDark no-underline"
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
                    className="flex pl-0 pr-[30px] font-Montserrat leading-[1.4em] tracking-[-0.04em] text-tk_greyDark no-underline"
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
            </div>
          </nav>
          <div className="flex gap-8 lg:hidden">
            <LogInButton userName={'Alex'} isSimplified={true} />
            <div className="flex md:hidden">
              <MenuButton isMenuShown={isMenuShown} onClick={handleMouseClickOnMenuButton} />
            </div>
          </div>
          <div className="hidden lg:flex">
            <LogInButton userName={'Alex'} />
          </div>
        </div>
      </header>
      {isMenuShown && (
        <div className="absolute top-[88px] z-10 flex h-[640px] w-full items-center justify-center bg-white md:hidden">
          <ul className="text-center font-Dela_Gothic_One text-tk32 leading-8">
            <li className="">Home</li>
            <li className="my-[60px] text-tk_greyDark">Textbook</li>
            <li className="my-[60px] text-tk_greyDark">Statistics</li>
            <li className="flex justify-center text-tk_greyDark">
              Games <img src="/down_arrow.svg" alt="down array"></img>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

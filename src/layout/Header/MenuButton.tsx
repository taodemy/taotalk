import styles from './Header.module.scss';
import Image from 'next/image';

export interface MenuButtonProps {
  isMenuShown: boolean;
  onClick: () => void;
}

export default function MenuButton({ isMenuShown, onClick }: MenuButtonProps) {
  return (
    <>
      {isMenuShown && (
        <Image
          src="/material-symbols_close.svg"
          width={24}
          height={24}
          alt="menu"
          onClick={onClick}
        />
      )}
      {!isMenuShown && (
        <Image
          src="/material-symbols_menu.svg"
          width={24}
          height={24}
          alt="menu"
          onClick={onClick}
        />
      )}
    </>
  );
}

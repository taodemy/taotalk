export interface MenuButtonProps {
  isMenuShown: boolean;
  onClick: () => void;
}

export default function MenuButton({ isMenuShown, onClick }: MenuButtonProps) {
  return (
    <>
      {isMenuShown && <img src="/material-symbols_close.svg" alt="menu" onClick={onClick} />}
      {!isMenuShown && <img src="/material-symbols_menu.svg" alt="menu" onClick={onClick} />}
    </>
  );
}

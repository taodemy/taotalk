import React from 'react';

interface DropDownMenuProps {
  menuContent: string[];
}
const DropDownMenu: React.FC<DropDownMenuProps> = ({ menuContent }) => {
  return (
    <ul className="pl-[20px] pt-[20px]">
      {menuContent.map((item, index) => (
        <li key={index} className="paragraph--p2 pb-[20px] hover:text-black">
          {item === 'Sprint →' ? (
            <a href="/sprint-summary">{item}</a>
          ) : (
            <a href="/audiocall-summary">{item}</a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropDownMenu;

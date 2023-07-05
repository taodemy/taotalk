import React from 'react';

interface DropDownMenuProps {
  menuContent: string[];
}
const DropDownMenu: React.FC<DropDownMenuProps> = ({ menuContent }) => {
  return (
    <ul className="pl-5 pt-5">
      {menuContent.map((item, index) => (
        <li key={index} className="p2 pb-5 text-[#828282] hover:text-[#333]">
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

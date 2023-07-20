import React from 'react';
import Link from 'next/link';

interface DropDownMenuProps {
  menuContent: string[];
}
const DropDownMenu: React.FC<DropDownMenuProps> = ({ menuContent }) => {
  return (
    <ul className="pl-5 pt-5">
      {menuContent.map((item, index) => (
        <li key={index} className="p2 pb-5 text-[#828282] hover:text-[#333]">
          {item === 'Sprint →' ? (
            <Link href="/sprint-summary">{item}</Link>
          ) : (
            <Link href="/audiocall-summary">{item}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropDownMenu;

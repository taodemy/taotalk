import { useState } from 'react';
import styles from './Buttons.module.scss';
import Player from '../../../../public/player.svg';

export type IconTypes = 'player' | 'playerWithLabel';

type IconProps = {
  iconTypes?: IconTypes;
  outline?: boolean;
  onClick?: () => void;
};

const IconButton = ({ iconTypes = 'player' }: IconProps) => {
  const [clicked, setClicked] = useState(false);
  const handlePlayerClick = () => setClicked(!clicked);

  const iconList: Record<IconTypes, JSX.Element> = {
    player: (
      <div className={clicked ? styles.playerActive : styles.player} onClick={handlePlayerClick}>
        <Player viewBox="0 0 40 40" alt="player" />
      </div>
    ),
    playerWithLabel: (
      <button className={styles.playerWithLabel}>
        <div>
          <Player alt="player" />
          <p>Play</p>
        </div>
      </button>
    ),
  };

  return <div aria-label={iconTypes}>{iconList[iconTypes]}</div>;
};

export default IconButton;

import styles from './Buttons.module.scss';
import Player from '../../../../public/player.svg';

const iconList = {
  player: (
    <button className={styles.player}>
      <Player viewBox="0 0 40 40" alt="player" />
    </button>
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

export type IconTypes = keyof typeof iconList;

type IconProps = {
  iconTypes?: IconTypes;
  onClick?: () => void;
};

const IconButton = ({ onClick, iconTypes = 'player' }: IconProps) => {
  return (
    <div onClick={onClick} aria-label={iconTypes}>
      {iconList[iconTypes]}
    </div>
  );
};

export default IconButton;

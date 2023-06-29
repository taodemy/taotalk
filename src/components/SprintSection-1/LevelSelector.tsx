import styles from './SprintSection-1.module.scss';

export default function LevelSelector({
  level,
  color,
  active,
  handleClick,
}: {
  level: string;
  color: string;
  active: boolean;
  handleClick: () => void;
}) {
  return (
    <div
      className={[
        styles['level-selector'],
        active ? styles[`level-selector--${color}--active`] : styles[`level-selector--${color}`],
      ].join(' ')}
      onClick={handleClick}
    >
      {level}
    </div>
  );
}

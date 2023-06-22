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
  handleClick?: (params: any) => any;
}) {
  if (active)
    return (
      <div
        className={[styles['level-selector'], styles[`level-selector--${color}--active`]].join(' ')}
        onClick={handleClick}
      >
        {level}
      </div>
    );
  return (
    <div
      className={[styles['level-selector'], styles[`level-selector--${color}`]].join(' ')}
      onClick={handleClick}
    >
      {level}
    </div>
  );
}

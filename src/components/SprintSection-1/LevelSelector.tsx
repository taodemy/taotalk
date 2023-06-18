import styles from './SprintSection-1.module.scss';

export default function LevelSelector({
  level,
  color,
  active,
}: {
  level: string;
  color: string;
  active: boolean;
}) {
  if (active)
    return (
      <div
        className={[styles['level-selector'], styles[`level-selector--${color}--active`]].join(' ')}
      >
        {level}
      </div>
    );
  return (
    <div className={[styles['level-selector'], styles[`level-selector--${color}`]].join(' ')}>
      {level}
    </div>
  );
}

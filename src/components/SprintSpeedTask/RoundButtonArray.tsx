import Button from '../Shared/Buttons';
import type { ButtonColor } from '../Shared/Buttons';

interface RoundButtonArrayProps {
  levels: Array<color_label>;
}

interface color_label {
  color: ButtonColor;
  label: string;
}

export default function RoundButtonArray({ levels }: RoundButtonArrayProps) {
  return (
    <div className="flex gap-[24px]">
      {levels.map((level, index) => (
        <Button key={index} color={level.color} outline={true} size="round" label={level.label} />
      ))}
    </div>
  );
}

export default function LogInButton({
  userName,
  onClick,
}: {
  userName: string;
  onClick: () => void;
}) {
  return (
    <div className="flex h-[40px] items-center gap-[30px]" onClick={onClick}>
      <div className="flex items-center gap-[10px]">
        <div className="h-[40px] w-[40px] rounded-full bg-tk_cyanLight text-center font-Montserrat font-bold leading-[40px] text-tk_cyanDark">
          {getFirstCapLetter(userName)}
        </div>
      </div>
    </div>
  );
}

function getFirstCapLetter(word: string): string {
  return word.charAt(0).toUpperCase();
}

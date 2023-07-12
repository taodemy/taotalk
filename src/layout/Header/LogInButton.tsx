export interface LogInButtonProps {
  userName: string;
  isSimplified: boolean;
}

export default function LogInButton({ userName, isSimplified }: LogInButtonProps) {
  return (
    <div className="flex h-[40px] items-center gap-[30px]">
      <div className="flex items-center gap-[10px]">
        <div className="h-[40px] w-[40px] rounded-full bg-tk_cyanLight text-center font-Montserrat font-bold leading-[40px] text-tk_cyanDark">
          {getFirstCapLetter(userName)}
        </div>
        {!isSimplified && (
          <div className="font-Montserrat font-semibold leading-[1.4em] tracking-[-0.04em] text-tk_greyDark">
            {' '}
            {userName}
          </div>
        )}
      </div>
      {!isSimplified && (
        <div className="font-Montserrat font-bold tracking-[-0.04em]">Sign Out →</div>
      )}
    </div>
  );
}

function getFirstCapLetter(word: string): string {
  return word.charAt(0).toUpperCase();
}

LogInButton.defaultProps = {
  isSimplified: false,
};

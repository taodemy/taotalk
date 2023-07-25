export interface LogInButtonProps {
  userName: string;
  isSimplified: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function LogInButton({ userName, isSimplified }: LogInButtonProps) {
=======
=======
>>>>>>> e5a5b3f (feat: implement sign in and signout using next auth)
export default function LogInButton({
  userName,
  onClick,
}: {
  userName: string;
  onClick: () => void;
}) {
<<<<<<< HEAD
>>>>>>> 247fdcd (feat: implement sign in and signout using next auth)
=======
>>>>>>> e5a5b3f (feat: implement sign in and signout using next auth)
  return (
    <div className="flex h-[40px] items-center gap-[30px]">
      <div className="flex items-center gap-[10px]">
        <div className="h-[40px] w-[40px] rounded-full bg-tk_cyanLight text-center font-Montserrat font-bold leading-[40px] text-tk_cyanDark">
          {getFirstCapLetter(userName)}
        </div>
        {!isSimplified && <div className="p2">{userName}</div>}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      {!isSimplified && <div className="p2 font-bold text-black">Sign Out →</div>}
=======
      <div className={styles.account_label__sign_out} onClick={onClick}>
        Sign Out →
      </div>
>>>>>>> 247fdcd (feat: implement sign in and signout using next auth)
=======
      <div className={styles.account_label__sign_out} onClick={onClick}>
        Sign Out →
      </div>
>>>>>>> e5a5b3f (feat: implement sign in and signout using next auth)
    </div>
  );
}

function getFirstCapLetter(word: string): string {
  return word.charAt(0).toUpperCase();
}

LogInButton.defaultProps = {
  isSimplified: false,
};

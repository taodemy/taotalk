import styles from './Header.module.scss';

export interface LogInButtonProps {
  userName: string;
  isSimplified: boolean;
}

export default function LogInButton({ userName, isSimplified }: LogInButtonProps) {
  return (
    <div className={styles.account_label}>
      <div className={styles.account_label__user_name_div}>
        <div className={styles.account_label__first_letter}>{getFirstCapLetter(userName)}</div>
        {!isSimplified && <div className={styles.account_label__user_name}> {userName}</div>}
      </div>
      {!isSimplified && <div className={styles.account_label__sign_out}>Sign Out →</div>}
    </div>
  );
}

function getFirstCapLetter(word: string): string {
  return word.charAt(0).toUpperCase();
}

LogInButton.defaultProps = {
  isSimplified: false,
};

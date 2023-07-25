import styles from './Header.module.scss';

export default function LogInButton({
  userName,
  onClick,
}: {
  userName: string;
  onClick: () => void;
}) {
  return (
    <div className={styles.account_label}>
      <div className={styles.account_label__user_name_div}>
        <div className={styles.account_label__first_letter}>{getFirstCapLetter(userName)}</div>
        <div className={styles.account_label__user_name}> {userName}</div>
      </div>
      <div className={styles.account_label__sign_out} onClick={onClick}>
        Sign Out →
      </div>
    </div>
  );
}

function getFirstCapLetter(word: string): string {
  return word.charAt(0).toUpperCase();
}

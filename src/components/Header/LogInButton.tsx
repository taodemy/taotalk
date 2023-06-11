import styles from './Header.module.scss';

export default function LogInButton({ userName }: { userName: string }) {
  return (
    <div className={styles.account_label}>
      <div className={styles.account_label__user_name_div}>
        <div className={styles.account_label__first_letter}>{getFirstCapLetter(userName)}</div>
        <div className={styles.account_label__user_name}> {userName}</div>
      </div>
      <div className={styles.account_label__sign_out}>Sign Out →</div>
    </div>
  );
}

function getFirstCapLetter(word: string): string {
  return word.charAt(0).toUpperCase();
}

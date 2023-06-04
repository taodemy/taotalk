import styles from './Header.module.scss';

export default function AccountLabel({ userName }) {
  return (
    <div className={styles.account_label}>
      <div className={styles.account_label__user_name_div}>
        <div className={styles.account_label__first_letter}>{userName.charAt(0).toUpperCase()}</div>
        <div className={styles.account_label__user_name}> {userName}</div>
      </div>
      <div className={styles.account_label__sign_out}>Sign Out →</div>
    </div>
  );
}

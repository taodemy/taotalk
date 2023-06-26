import styles from './Buttons.module.scss';

export interface ImageButtonProps {
  imgType: 'avatar' | 'profileCover';
  src?: string;
}
const ImageButton = ({ imgType, src }: ImageButtonProps) => {
  const imageButton = {
    avatar: (
      <button className={`${styles.avatarButton} ${styles.roundFull}`}>
        <img className={styles.objectCover} src={src} alt="avatar cover" />
      </button>
    ),
    profileCover: (
      <button className={`${styles.profileButton} ${styles.roundFull}`}>
        <img className={styles.objectCover} src={src} alt="profile cover" />
      </button>
    ),
  };

  return imageButton[imgType];
};

export default ImageButton;

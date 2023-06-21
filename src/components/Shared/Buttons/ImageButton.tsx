import styles from './Buttons.module.scss';

interface CoverImageProps {
  imgType?: 'playerCover';
  src?: string;
  InjectedComponent?: React.FC | null;
  onClick?: () => void;
}
const CoverImage = ({
  imgType = 'playerCover',
  src,
  InjectedComponent,
  onClick,
}: CoverImageProps) => {
  const imageButton = {
    playerCover: (
      <div onClick={onClick} className={styles.coverImage}>
        <button>
          <img src={src} alt="player cover" />
        </button>
        {InjectedComponent && <InjectedComponent />}
      </div>
    ),
  };

  return imageButton[imgType];
};

export default CoverImage;

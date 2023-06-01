import styles from './Header.module.css';

export default function AccountLabel({ userName }) {
  return (
    <>
      <div
        style={{
          borderRadius: '120px',
          padding: '40px',
          backgroundColor: '#C3DCE3',
          color: '#2B788B',
        }}
      >
        {userName.charAt(0).toUpperCase()}
      </div>
      <div> {userName}</div>
      <div>Sign Out &rarr; </div>
    </>
  );
}

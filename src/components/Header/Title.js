export default function Title({ content, isActive }) {
  if (isActive) {
    return <div>{content}</div>;
  } else {
    return <div style={{ color: '#757575' }}>{content}</div>;
  }
}

import './Avatar.scss'

const Avatar = ({ label, onClick, variant }) => {
    const classNames = `avatar ${variant}`;

  return (
    <button
      aria-label="Profile Dropdown" 
      className={classNames} 
      onClick={onClick}>
      {label}
    </button>
    
  )
}

export default Avatar
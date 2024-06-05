import './TopNav.scss'
import { logo } from './Logo'
import { signOutButton } from './SignOutButton'
import Avatar from '../Avatar/Avatar'

const TopNav = () => {
  return (
    <header>
        <div className="navContainer">
            <a href="/">
                {logo}
            </a>
            <div className="navRight">
                <div className="navProfile">
                    <Avatar 
                        label="TR"  
                        onClick={() => console.log('Avatar clicked')} 
                    />
                    <p>Hi Tony</p>
                </div>
                <a href="/">
                    {signOutButton}
                </a>
            </div>
        </div>

    </header>
  )
}

export default TopNav
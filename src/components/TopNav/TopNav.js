import './TopNav.scss'
import { logo } from './Logo'

const TopNav = () => {
  return (
    <header>
        <div className="navContainer">
            <a href="/">
                {logo}
            </a>
        </div>

    </header>
  )
}

export default TopNav
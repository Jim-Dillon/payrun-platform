import './TopNav.scss';
import { logo } from './Logo';
import { signOutButton } from './SignOutButton';
import Avatar from '../Avatar/Avatar';
import { Tooltip } from 'antd';

const TopNav = () => {
  const toolTipColour = '#535151';

  return (
    <header>
      <div className="navContainer">
        <a href="/">{logo}</a>
        <div className="navRight">
          <div className="navProfile">
            <Avatar label="TR" onClick={() => console.log('Profile clicked')} />
            <p>Hi Tony</p>
          </div>
          <Tooltip title="Sign out" color={toolTipColour}>
            <a href="/">{signOutButton}</a>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};

export default TopNav;

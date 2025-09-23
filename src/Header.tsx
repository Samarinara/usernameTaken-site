import { Link } from 'react-router-dom';
import SettingsToggles from './SettingsToggles';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">
        _usernameTaken
      </Link>
      <div className="settings-toggles">
        <SettingsToggles />
      </div>
    </header>
  );
}

export default Header;
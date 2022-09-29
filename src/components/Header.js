import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import helper from '../helper/helper';
import './Header.css';

function Header() {
  const [steamLogo, setSteamLogo] = useState(null);
  const [dlIcon, setDlIcon] = useState(null);

  useEffect(() => {
    const URL = async function getLogoURL() {
      setSteamLogo(await helper.getImageURL('logo_steam.svg'));
    }
    URL();
  });

  useEffect(() => {
    const URL = async function getLogoURL() {
      setDlIcon(await helper.getImageURL('downloadIcon.png'));
    }
    URL();
  });

  return (
    <header>
      <div className='header-cont'>
        <Link to='/replicate/'>
          <img alt='Steam Logo' src={ steamLogo }/>
        </Link>
        <div className="header-categories">
          <div className="category">STORE</div>
          <div className="category">COMMUNITY</div>
          <div className="category">ABOUT</div>
          <div className="category">SUPPORT</div>
        </div>
        <div className="login-cont">
          <div className="install-button">
            <img alt="Download Icon" src={ dlIcon } />
            &nbsp;
            Install Steam
          </div>
          <div className='login-text'>login</div>
          <div className='login-text'>|</div>
          <div className='login-text language'>language</div>
        </div>
      </div>
    </header>
  );
}

export default Header;

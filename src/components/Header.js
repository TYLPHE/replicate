import { Link } from "react-router-dom";
// import imageURL from "../images/imageURL";
import './Header.css';

function Header() {
  // const { steamLogo, downloadIcon } = imageURL;
  return (
    <header>
      <Link to='/replicate/'>
        <div>Steam</div>
        {/* <img alt='Steam Logo' src={steamLogo}/> */}
      </Link>
    </header>
  );
}

export default Header;

import imageURL from '../images/imageURL';
import Header from './Header';
function Homepage() {
  const { 
    steamLogo,
    steamCards, 
  } = imageURL;

  return (
    <div>
      <Header />
      <div>body</div>
      {/* <img alt='Steam Logo' src={steamLogo} /> */}
      {/* <img alt='Gift Cards' src={steamCards} /> */}
    </div>
  )
}

export default Homepage;

import helper from '../helper/helper';
import imageList from './imageList';

const imageURL = {}
async function getAllURL() {
  for (let key in imageList) {
    const url = await helper.getImageURL(imageList[key]);
    imageURL[key] = url;
  }
}
getAllURL();



export default imageURL;

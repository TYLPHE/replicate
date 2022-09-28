import { initializeApp } from 'firebase/app';
import { getDownloadURL, ref, getStorage } from 'firebase/storage'
const helper = {
  initialize: () => {
    const firebaseConfig = {
      apiKey: "AIzaSyCXf68hVh9ZdgM0Z9aLHoQGHaZNT3snmFk",
      authDomain: "replicate-2458b.firebaseapp.com",
      projectId: "replicate-2458b",
      storageBucket: "replicate-2458b.appspot.com",
      messagingSenderId: "617280841257",
      appId: "1:617280841257:web:e8fc9f93d1e188ff821e38"
    };
    return initializeApp(firebaseConfig);
  },
  getImageURL: async (location) => {
    const storage = getStorage(helper.initialize());
    const url = await getDownloadURL(ref(storage, `images/${location}`));
    return url;
  }
}

export default helper;

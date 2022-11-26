import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6bxUkd-BcKT82JjNalRPem0n5syJS0P4",
  authDomain: "crown-clothing-db-ec8f5.firebaseapp.com",
  projectId: "crown-clothing-db-ec8f5",
  storageBucket: "crown-clothing-db-ec8f5.appspot.com",
  messagingSenderId: "805740503897",
  appId: "1:805740503897:web:4b20eea4ca4f583b98e248"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
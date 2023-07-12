import { initializeApp } from 'firebase/app';

import { getDatabase } from 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCV-n8YTC6c2LX_t30SkhhljdotXKqPXNI',
  authDomain: 'homesquad-6c234.firebaseapp.com',
  databaseURL: 'https://homesquad-6c234-default-rtdb.firebaseio.com',
  projectId: 'homesquad-6c234',
  storageBucket: 'homesquad-6c234.appspot.com',
  messagingSenderId: '308562416993',
  appId: '1:308562416993:web:7676dea931b13a4c882120',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

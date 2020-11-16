import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhuoOGFVYd1kQ53vZDhj1wTTW0Hav0V0I",
    authDomain: "grupou-250ec.firebaseapp.com",
    databaseURL: "https://grupou-250ec.firebaseio.com",
    projectId: "grupou-250ec",
    storageBucket: "grupou-250ec.appspot.com",
    messagingSenderId: "972814810780",
    appId: "1:972814810780:web:fb4061eae05f42f962f759"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  

import firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyBiBsxZAErpF3FWUSwHkXXQEXASIh1iEO0",
    authDomain: "carspect-7c2d7.firebaseapp.com",
    projectId: "carspect-7c2d7",
    storageBucket: "carspect-7c2d7.appspot.com",
    messagingSenderId: "516370835857",
    appId: "1:516370835857:web:fd32fd96b7977a2111d230"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export function writeVehiclesData(model, regNr) {
    firebase.database().ref('Vehicles/' + regNr).set({
      model: model,
      regNr: regNr,
    });
  }

  export default firebase
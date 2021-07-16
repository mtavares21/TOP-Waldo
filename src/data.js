import React from "react"
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDdjsr3F6WO5DWqkRnONMN59AZxn_m8WM",
  authDomain: "waldo-39119.firebaseapp.com",
  projectId: "waldo-39119",
  storageBucket: "waldo-39119.appspot.com",
  messagingSenderId: "304422655857",
  appId: "1:304422655857:web:8bf691db487958d7a788d0"
};

firebase.initializeApp(firebaseConfig);

  

firebase.firestore().collection("images").doc("image1").set({
  src: "https://3hwuuuxcz5o651g144s0kw10-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/G3M_Wheres_Waldo.jpg",
  char: [
    { name: 'Waldo', coord: [986, 187] },
    { name: 'Oldlaw', coord: [115, 661] }  
  ]
})

firebase.firestore().collection("images").doc("image2").set({
  src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2011/11/12/19/48-Where's-Wally-WALKER-BOOKS.jpg?width=990&auto=webp&quality=75",
  char: [
    { name: 'Waldo', coord: [0,0] },
    { name: 'Oldlaw', coord: [0,0] },
    { name: 'Wizard Whitebeard', coord: [0,0]}
  ]
})

function getImage(image) {
 const docRef = firebase.firestore().collection("images").doc(image);

 const doc = docRef.get()
 .then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data()
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return doc.data()
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
return doc
}
// Set start timestamp
function startServerTimer(id) {
  firebase.firestore().collection("timers").doc(id).set({
    start: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
// Set stop timestamp
function stopServerTimer(id) {
  firebase.firestore().collection("timers").doc(id).update({
    stop: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
// Get diff from start to stop
function getServerTimer(id) {
  
}

export  { getImage, startServerTimer, stopServerTimer}

import firebase from "firebase/app";
import "firebase/firestore";
import image2 from "./image2.jpeg"
import image5 from "./image5.jpeg"
import image6 from "./image6.jpeg"

const firebaseConfig = {
  apiKey: "AIzaSyCDdjsr3F6WO5DWqkRnONMN59AZxn_m8WM",
  authDomain: "waldo-39119.firebaseapp.com",
  projectId: "waldo-39119",
  storageBucket: "waldo-39119.appspot.com",
  messagingSenderId: "304422655857",
  appId: "1:304422655857:web:8bf691db487958d7a788d0",
};

firebase.initializeApp(firebaseConfig);

function setServerImage(name, image) {
  firebase.firestore().collection("images").doc(name).set(image);
}

setServerImage("image1",{
    name:"image1",
    src:
      "https://3hwuuuxcz5o651g144s0kw10-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/G3M_Wheres_Waldo.jpg",
    char: [
      { name: "Waldo", coord: [968, 37]},
      { name: "Oldlaw", coord: [59, 540]},
    ],
  });

setServerImage("image2",{
  name:"image2",
    src:image2,
    char: [
      { name: "Waldo", coord: [518, 563]},
      { name: "Oldlaw", coord: [709, 709]},
      { name: "Wizard Whitebard", coord: [789, 581] },
    ],
  });

setServerImage("image3", {
  name:"image3",
    src:
      "https://4.bp.blogspot.com/-NjohvYgHUQU/Ttcs_ommPRI/AAAAAAAABA0/wm6M6HxbI28/s1600/Play+Wheres+Waldo+Online+Puzzle+Game+Department+Store+Shopping+Mall.jpg",
    char: [
      { name: "Waldo", coord: [505, 137] },
      { name: "Oldlaw", coord: [235, 554]},
      { name: "Wenda", coord: [353, 554]},
    ],
  })
  setServerImage("image4", {
    name:"image4",
    src:
      "https://4.bp.blogspot.com/-H9JDgPrgsfc/TtcrDPO5vvI/AAAAAAAABAc/1roVH5Ni83Y/s1600/Play+Wheres+Waldo+Online+Puzzle+Game+Medieval+Gluttons.jpg",
    char: [
      { name: "Waldo", coord: [466, 250] },
      { name: "Wizard Whitebard", coord: [1020, 652] }
    ],
  })
  setServerImage("image5", {
    name:"image5",
    src: image5,
    char: [
      { name: "Oldlaw", coord: [449, 72] },
      { name: "Wizard Whitebard", coord: [1147, 184] },
      { name: "Wenda", coord: [705, 629]},
    ],
  })
   setServerImage("image6", {
    name:"image1",
    src: image6,
    char: [
      { name: "Waldo", coord: [201, 656] },
      { name: "Wizard Whitebard", coord: [347, 106]},
      { name: "Wenda", coord: [908, 591]},
    ],
  })

function getImage(image) {
  const docRef = firebase.firestore().collection("images").doc(image);

  const doc = docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return doc.data();
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
  return doc;
}
// Loads images from server
function loadImages() {
  return firebase.firestore().collection("images").get();
}
// Set start timestamp
function startServerTimer(id) {
  firebase
    .firestore()
    .collection("timers")
    .doc(id)
    .set({
      start: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch((e) => console.log("Failed to set timer"));
}
// Set stop timestamp
function stopServerTimer(id) {
  return firebase
    .firestore()
    .collection("timers")
    .doc(id)
    .update({
      stop: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch((e) => console.log("Failed to update timer"));
}
// Get timer by id
async function getServerTimer(id) {
  const doc = await firebase.firestore().collection("timers").doc(id).get();
  return doc.exists ? doc.data() : console.log("error");
}
// Set Score
function setServerScore(image, name, time) {
  return firebase.firestore().collection(image+"scores").doc().set({
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    time: time,
    name: name,
  });
}
// Timers should be deleted after used
function deleteServerTimer(id) {
  firebase.firestore().collection("timers").doc(id).delete();
}
// Get Scores
function getServerScores(image) {
  const query = firebase
    .firestore()
    .collection(image+"scores")
    .orderBy("time", "asc")
    .limit(15);

  return query.get();
}

export {
  getImage,
  loadImages,
  startServerTimer,
  stopServerTimer,
  getServerTimer,
  deleteServerTimer,
  setServerScore,
  getServerScores,
};

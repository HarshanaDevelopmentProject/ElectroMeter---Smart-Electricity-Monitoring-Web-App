
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
    import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyD6u78rLY5WBuKQo0dQHog7B98iRJsVTWg",
    authDomain: "electricity-meter-90d1f.firebaseapp.com",
    projectId: "electricity-meter-90d1f",
    storageBucket: "electricity-meter-90d1f.appspot.com",
    messagingSenderId: "265567775838",
    appId: "1:265567775838:web:9c87ae8179490f4ad4d8cf",
    measurementId: "G-WJDPP73WSG"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);

    export let saveProjectName={
        name:'',
    }

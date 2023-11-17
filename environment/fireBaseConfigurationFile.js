

    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
    import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";



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

   export const realtimedb=getDatabase(app);

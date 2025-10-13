  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  import { getDatabase, ref, set, get, child, push, remove } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBrs6S82ksKPiPxlF4T1hyartpIS3A9UNc",
    authDomain: "web-swimeasy.firebaseapp.com",
    databaseURL: "https://biskvit-vkusni-bd-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "web-swimeasy",
    storageBucket: "web-swimeasy.firebasestorage.app",
    messagingSenderId: "952061702288",
    appId: "1:952061702288:web:1dec35903e94b4a4a7e815",
    measurementId: "G-8DXRCL2S8B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);

  // Function to add an event to a specific day
  export function addEventToDay(day, eventData) {
    const dayRef = ref(database, `events/${day}`);
    const newEventRef = push(dayRef);
    return set(newEventRef, eventData);
  }

  // Function to get events for a specific day
  export function getEventsForDay(day) {
    const dayRef = ref(database, `events/${day}`);
    return get(dayRef).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return {};
      }
    });
  }

  // Function to get all events
  export function getAllEvents() {
    const eventsRef = ref(database, 'events');
    return get(eventsRef).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return {};
      }
    });
  }

  // Function to remove an event
  export function removeEvent(day, eventKey) {
    const eventRef = ref(database, `events/${day}/${eventKey}`);
    return remove(eventRef);
  }

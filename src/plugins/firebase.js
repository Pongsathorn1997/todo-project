import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBUNF0VIqM9xp_apZOvvOVYze5mpgh_KHk',
  authDomain: 'todos-ed91a.firebaseapp.com',
  projectId: 'todos-ed91a',
  storageBucket: 'todos-ed91a.appspot.com',
  messagingSenderId: '579113931095',
  appId: '1:579113931095:web:181361f401a7b4f93aae12'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

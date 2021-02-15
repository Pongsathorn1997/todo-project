import firebase from 'firebase/app';
import store from '@/store/store';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBUNF0VIqM9xp_apZOvvOVYze5mpgh_KHk',
    authDomain: 'todos-ed91a.firebaseapp.com',
    projectId: 'todos-ed91a',
    storageBucket: 'todos-ed91a.appspot.com',
    messagingSenderId: '579113931095',
    appId: '1:579113931095:web:181361f401a7b4f93aae12'
};

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
firebase.auth().onAuthStateChanged((user) => {
    store.dispatch('userRegister', user);
    store.dispatch('userLogin', user);
});

firebase.getCurrentUser = () => new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user);
    }, reject);
});

export default firebase;


import config from './config'
//
import firebase from 'firebase/'

firebase.initializeApp(config);

 const firestore = firebase.firestore()

 export const seriesRef = firestore.collection('series')
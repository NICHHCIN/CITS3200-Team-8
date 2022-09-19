import { ChangeAnnouncements, ChangeLocation } from "../constants";
import firebase from 'firebase'

require('firebase/firestore')

export function getLocation() {
    return ((dispatch) => {
        firebase.firestore()
        .collection("locations")
        .doc(firebase.auth().currentLocation)
        .get()
        .then((snapshot) => {
            if (snapshot.exists) {
                dispatch({type:ChangeLocation, currentLocation: snapshot.data() })
            }
        })
    })
}

export function getAnnouncements() {
    return ((dispatch) => {
        firebase.firestore()
        .collection("locations")
        .doc(firebase.auth().currentLocation)
        .collection("cloud messaging")
        .orderBy("date","asc")
        .get()
        .then((snapshot) => {
            let announcements = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return {id, ...data}
            })
            dispatch({type:ChangeAnnouncements,announcements})
        })
    })
}
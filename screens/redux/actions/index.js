import { ChangeAnnouncements} from "../constants";
import firebase from 'firebase/compat'

require('firebase/firestore')

export function getAnnouncements() {
    return ((dispatch) => {
        firebase.firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then(function(doc){
            firebase.firestore()
            .collection('locations')
            .doc(doc.data().CurrentLocation)
            .collection('Announcements')
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
    })
}
import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'

import firebase from 'firebase/compat';
require('firebase/firestore')

export default function AnnouncementsScreen(props) {
    var [announcements, postAnnouncements] = useState([]);
    useEffect(() => {
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
                    const data = doc.data().Announcement;
                    return {...data}
                })
                postAnnouncements(announcements)
            })
        })
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.containerGallery}>
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={announcements}
                    renderItem={({ item }) => (
                        <View
                            style={styles.containerImage}>
                            <Text style={styles.container}>{Object.values(item)}</Text>
                        </View>

                    )}

                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInfo: {
        margin: 20
    },
    containerGallery: {
        flex: 1
    },
    containerImage: {
        flex: 1 / 3

    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    }
})
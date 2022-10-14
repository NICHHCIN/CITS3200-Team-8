import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import { CardViewWithIcon } from 'react-native-simple-card-view'

import firebase from 'firebase/compat';
require('firebase/firestore')

export default function AnnouncementsScreen() {
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
            .orderBy("date","desc")
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
                    paddingTop = {20}
                    alignItems = 'center'
                    numColumns={1}
                    horizontal={false}
                    data={announcements}
                    renderItem={({ item }) => (
                        <CardViewWithIcon
                            androidIcon={'megaphone' }
                            iosIcon={ 'megaphone' }
                            iconBgColor={ '#005582' }
                            iconColor={ '#FFFFFF' }
                            content={ Object.values(item) }
                        />

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
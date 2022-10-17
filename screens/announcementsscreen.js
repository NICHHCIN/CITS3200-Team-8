
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, RefreshControl } from 'react-native';
import { CardViewWithIcon } from 'react-native-simple-card-view';

import firebase from 'firebase/compat';
require('firebase/firestore')

export default function AnnouncementsScreen() {
    var [announcements, postAnnouncements] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then(function (doc) {
                firebase.firestore()
                    .collection('locations')
                    .doc(doc.data().CurrentLocation)
                    .collection('Announcements')
                    .orderBy("date", "desc")
                    .get()
                    .then((snapshot) => {
                        let announcements = snapshot.docs.map(doc => {
                            const data = doc.data().Announcement;
                            /*let dates = snapshot.docs.map(doc => {
                                const data2 = doc.data().date;*/
                            return { ...data }
                        })
                        postAnnouncements(announcements)
                    })
            })
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    useEffect(() => {
        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then(function (doc) {
                firebase.firestore()
                    .collection('locations')
                    .doc(doc.data().CurrentLocation)
                    .collection('Announcements')
                    .orderBy("date", "desc")
                    .get()
                    .then((snapshot) => {
                        let announcements = snapshot.docs.map(doc => {
                            const data = doc.data().Announcement;
                            /*let dates = snapshot.docs.map(doc => {
                                const data2 = doc.data().date;*/
                            return { ...data }
                        })
                        postAnnouncements(announcements)
                    })
            })
    }, []);
    return (
        <View style={styles.container}>


        
                <FlatList
                    paddingTop={20}
                    alignItems='center'
                    numColumns={1}
                    horizontal={false}
                    data={announcements}
                    renderItem={({ item }) => (
                        <CardViewWithIcon
                            width={400}
                            androidIcon={'megaphone'}
                            iosIcon={'megaphone'}
                            iconBgColor={'#005582'}
                            iconColor={'#FFFFFF'}
                            iconSize={15}
                            contentFontSize={16}
                            content={Object.values(item)}
                        />
                
                    )}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                />

        </View>
    );
}

const styles = StyleSheet.create({
            container: {
        flex: 2,
    },
    containerGallery: {
        flex: 3,
    },
    containerInfo: {
        margin: 20,
    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1,
    },
});

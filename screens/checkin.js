import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles/checkin.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { iOSUIKit } from 'react-native-typography'

import firebase from 'firebase/compat'
require('firebase/firestore')

export default function CheckInScreen() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  const [ checkInDate, setCheckInDate] = useState(new Date().toLocaleDateString());
  const [ checkOutDate, setCheckOutDate] = useState(new Date().toLocaleDateString());
  const expectedcheckout = "22/08/2022";
  
  var [location, postLocation] = useState([]);
  var [name, postName] = useState([]);
  useEffect(() => {
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(function(doc){
        let location = doc.data().CurrentLocation;
        let fname = doc.data().FirstName;
        let lname = doc.data().LastName;
        postLocation(location)
        postName(fname+ ' ' + lname)
      })
    })

  return (
    
    <View style={styles.container}>
      {/* <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}> */}
      <Text style={styles.title}>Check In/Out</Text>
      <Text style={styles.bodyText}>{name}</Text>
      {checkedIn ? (

        <View>
          {/* <Image source={require('../assets/checkedin.png')} style={styles.icons}/> */}
          <Ionicons style={styles.checkmark} name={'checkmark-circle'} color={'#27D676'}/>
          <Text style={styles.bodyText}>You Succesfully checked in on: <Text style={styles.boldText}>{checkInDate}</Text></Text>
          <Text style={styles.bodyText}>You are currently checked in at: <Text style={styles.boldText}>{location}</Text></Text>
          <Text style={styles.bodyText}>You are due to check out on: <Text style={styles.boldText}>{expectedcheckout} </Text></Text>
          <Button
            style={styles.button}
            color = "#C1C1C1"
            title="Check Out"
            onPress={() => {
              setCheckedIn(false);
              setCheckedOut(true);
              firebase.firestore()
              .collection('users')
              .doc(firebase.auth().currentUser.uid)
              .update({CheckedOut: true, CheckedIn: false});
              setCheckOutDate(new Date().toLocaleDateString());

            }}

          />
        </View>
      ) : (
        <View>
          <Ionicons style={styles.checkmark} name={'checkmark-circle'} color={'#F15454'}/>
          <Text style={styles.bodyText}>Checked Out: <Text style={styles.boldText}>{checkOutDate}</Text></Text>
          <Button 
            style={styles.button}
            color="#27D676" 

            title="Check In"

            onPress={() => {
              setCheckedIn(true);
              setCheckInDate(new Date().toLocaleDateString());
              firebase.firestore()
              .collection('users')
              .doc(firebase.auth().currentUser.uid)
              .update({CheckedIn: true, CheckedOut: false});
            }}
          />
        </View>
      )}
    </View>
  );
}


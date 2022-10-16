import { useNavigation } from '@react-navigation/core'
import React, {useState,useEffect} from 'react'
import { StyleSheet, TouchableOpacity, View, Alert, Text, Button, Linking, } from 'react-native'
import { auth } from '../firebase'
import {SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons'
import firebase from 'firebase/compat';
require('firebase/firestore')
import {
  Avatar,
  Title,
  Caption,
  // Text,
  TouchableRipple,
} from 'react-native-paper';

const ProfileScreen = () => {
  var [location, postLocation] = useState([]);
  useEffect(() => {
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(function(doc){
        let location = doc.data().CurrentLocation;
        postLocation(location)
      })
    })
  
  const handleSupport = () => {
    // Open a popup to redirect user to email link
    Alert.alert(
      'Support',
      'Please email us at admin@wacrh.com for any support issues.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Send Email', onPress: () => Linking.openURL('mailto:admin@wacrh.com.au')},
      ],
      {cancelable: false},
    );
  }
  


  const navigation = useNavigation()
  const [showBox, setShowBox] = useState(true);
  const showConfirmDialog = () => {
    return Alert.alert(
      "Are you sure?",
      "Are you sure you want to LogOut?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            setShowBox(false);
            handleSignOut();
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",

        },
      ]
    );
  };
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        {/* Heading that says welcome to WACRH */}
            
        <View style={{flexDirection: 'row', marginTop: 15}}>

        
          <Avatar.Image 
            source={require('../assets/profile.jpg')}
            size={100}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>Work Title</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
      <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={styles.infoText}>{location}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={styles.infoText}>+61412356789</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={styles.infoText}> {auth.currentUser?.email}</Text>
        </View>
      </View>

      

      <View style={styles.menuWrapper}>
        <TouchableRipple on onPress={handleSupport}>  
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>

          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon2 name="settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={showConfirmDialog}>
          <View style={styles.menuItem}>
            <Icon2 name="log-out-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};
//   return (
//     <View style={styles.container}>
//       <Text>Email: {auth.currentUser?.email}</Text>
//       <TouchableOpacity
//         onPress={handleSignOut}
//         style={styles.button}
//       >
//         <Text style={styles.buttonText}>Sign out</Text>
//       </TouchableOpacity>
//     </View>
//   )

// }

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },

  infoText: {
    marginLeft: 20,
    fontSize: 15,
    color: '#777777',
  },
});

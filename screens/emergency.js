import React from 'react';
import { Image, StyleSheet, Text, View, Button,  Linking } from 'react-native';

function getAccomodationAddress() {
  var accomodationAddress = "1234 Main St, Kalbarri, WA 6536";
  return accomodationAddress;
}

function getEmergencyContact() {
  var emergencyContact = "0412 345 678";
  return emergencyContact;
}

function getEmergencyMeetingPoint() {
  var emergencyMeetingPoint = "Kalbarri Visitor Centre";
  return emergencyMeetingPoint;
}

const Emergency = () => {
    return (
      <View style={styles.container}>
        <Image source = {require('../assets/istockphoto-1073610186-612x612.jpg')} style = {styles.icons}/>
        <Text style={styles.paragraph1}>
          Emergency Information
        </Text>
        <Text style={styles.paragraph}>
          Accomodation Address: {getAccomodationAddress()}
        </Text>
        {/* <Text style={styles.paragraph}>
          Emergency Contact: {getEmergencyContact()}
        </Text> */}
        <Button title="Call Emergency Contact" onPress={() => Linking.openURL('tel:0412345678')} />

        <Text style={styles.paragraph}>
            Emergency Meeting Point: {getEmergencyMeetingPoint()}
            </Text>
        </View>
        );
    }


export default Emergency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  icons: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },


  button: {
    backgroundColor: '',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  paragraph1: {
    margin: 34,
    fontSize: 28,
    fontFamily : 'serif',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});





        
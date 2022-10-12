import React from 'react';
import { Image, StyleSheet, Text, View, Button,  Linking, TouchableOpacity } from 'react-native';

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
        <Image source = {require('../assets/siren.png')} style = {styles.icons}/>
        <Text style={styles.paragraph1}>
          Emergency Information
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.paragraphBold}>Accomodation Address:</Text> {getAccomodationAddress()}
        </Text>
        {/* <Text style={styles.paragraph}>
          Emergency Contact: {getEmergencyContact()}
        </Text> */}
        

        <Text style={styles.paragraph}>
          <Text style={styles.paragraphBold}>Emergency Meeting Point: </Text> {getEmergencyMeetingPoint()}
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('tel:0412345678')}
          
          >
          
          <Text style={styles.buttonTextStyle}>
          CALL EMERGENCY CONTACT
          </Text>
        </TouchableOpacity>

            {/*<Button style={styles.button} title="Call Emergency Contact" onPress={() => Linking.openURL('tel:0412345678')} />*/}
        </View>
        );
    }


export default Emergency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f2f2' ,
    padding: 8,
  },
  icons: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: -100,
  },


  button: {
    backgroundColor: '#F15454',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonTextStyle: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },

  paragraph1: {
    marginTop: -20,
    margin: 25,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 25,
    fontSize: 18,
    textAlign: 'center',
    color: '#78909C',
  },

  paragraphBold: {
    fontWeight: 'bold',
  }
});





        
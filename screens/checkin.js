import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import React, {useState} from 'react';
  
export default function CheckInScreen() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  const [ checkInDate, setCheckInDate] = useState(new Date().toLocaleDateString());
  const [ checkOutDate, setCheckOutDate] = useState(new Date().toLocaleDateString());
  const [name, setName] = useState("John Doe");
  const location = "Port Hedland";
  const expectedcheckout = "22/08/2022";
  

  return (
    
    <View style={styles.container}>
      {/* <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.image}> */}
      <Text style={styles.title}>Check In/Out</Text>
      <Text style={styles.name}>{name}</Text>
      {checkedIn ? (

        <View>
          <Text style={styles.time}>You Succesfully checked in on: {checkInDate}</Text>
          <Text style={styles.time}>You are currently checked in at: {location}</Text>
          <Text style={styles.time}>You are due to check out on: {expectedcheckout} </Text>
          <Button
            color = "red"
            title="Check Out"
            onPress={() => {
              setCheckedIn(false);
              setCheckedOut(true);

              setCheckOutDate(new Date().toLocaleDateString());

            }}

          />
        </View>
      ) : (
        <View>
          <Text style={styles.time}>Checked Out: {checkOutDate}</Text>
          <Button color="green" 

            title="Check In"

            onPress={() => {
              setCheckedIn(true);
              setCheckInDate(new Date().toLocaleDateString());

            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },


  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  time: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

}
);
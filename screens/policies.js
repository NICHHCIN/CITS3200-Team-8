import React from 'react';
import { FlatList, StyleSheet, Text, View , TouchableOpacity,  ScrollView , SafeAreaView } from 'react-native';
import * as OpenAnything from "react-native-openanything";
import { Title } from 'react-native-paper';



 const  Policy = () => {
  return (
    <SafeAreaView  horizontal={true}  style={styles.container}>
     <ScrollView style={styles.scrollView}>

    <View style={styles.container}>
     

    <Text style={styles.textStyle}> {'\n'}</Text>
    <Text style={styles.textStyle}> {'\n'}</Text>
    <Text style={styles.textStyle}> {'\n'}</Text>




      <TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1X2v1_fYHMQJsfkhOzQpfhZqxxagyV_wT/view?usp=sharing')}>
      <Text  style={styles.textStyle}> Directors Welcome  {'\n'} </Text>
      </TouchableOpacity>




      <TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1UWIbtXo1oRLTQj7wf8O2BsbVp9aHbVRa/view?usp=sharing')}>
      <Text style={styles.textStyle}> Emergency Evacuation Procedures {'\n'}</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/11g1Y2wXOMvAncf3cEOxxYtb321LuoxzD/view?usp=sharing')}>
      <Text style={styles.textStyle}> In Case of Emergency contacts {'\n'} </Text>
      </TouchableOpacity>



      <Text style={styles.textStyle}> Student Accommodation Policy {'\n'}</Text>
      <Text style={styles.textStyle}> COVID Policy {'\n'}</Text>
      <Text style={styles.textStyle}> Professional Behaviour for Students Policy {'\n'}</Text>
      <Text style={styles.textStyle}> Acceptable Use of IT {'\n'}</Text>
      <Text style={styles.textStyle}> AHPRA Social Media Policy {'\n'}</Text>
      <Text style={styles.textStyle}>  Welcome to Milford Street Accommodation {'\n'} </Text>
      <Text style={styles.textStyle}> 	 Essential information{'\n'}</Text>
      <Text style={styles.textStyle}>   Vacating procedure {'\n'}</Text>
      <Text style={styles.textStyle}>  Unit inventory {'\n'}</Text>
      <Text style={styles.textStyle}>	 Cleaning Standards  {'\n'}</Text>
      <Text style={styles.textStyle}> Supermarket information {'\n'}</Text>
      <Text style={styles.textStyle}>  Geraldton tourist information {'\n'}</Text>
      <Text style={styles.textStyle}>  Bicycle information {'\n'}</Text>
      <Text style={styles.textStyle}>  Kalbarri tourist information {'\n'}</Text>




     



      
      {/* <StatusBar style="auto" /> */}


    </View>

    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  scrollView: {
    
    marginHorizontal: 20,
  },

  textStyle: {
    textDecorationLine: 'underline'
  }
});





export default Policy;
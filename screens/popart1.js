

//Image Icon Inside the React Native Button
//https://aboutreact.com/image-icon-inside-the-react-native-button/
 
//import React in our code
import React from 'react';
 
//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import * as OpenAnything from "react-native-openanything";
 
const App1 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
       <ScrollView style={styles.scrollView}>
       
      <View style={styles.container}>
     
      <Text style={styles.buttonTextStyle13}>
          Files

          </Text>
          <Text >
          {'\n'}

          </Text>
        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1UWIbtXo1oRLTQj7wf8O2BsbVp9aHbVRa/view?usp=sharing')}
          
          >
          <Image
            source={require('../assets/emerg.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Emergency Evacuation Procedures 
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/11g1Y2wXOMvAncf3cEOxxYtb321LuoxzD/view?usp=sharing')}>
          <Image
            source={require('../assets/emerg.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          In Case of Emergency contacts
          </Text>
        </TouchableOpacity>


      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
 





const styles = StyleSheet.create({

  buttonTextStyle13: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign:'left',
    marginLeft: "4%"
  },

  container: {
    flex: 1,
    margin: 10,
    marginTop: 10,
    padding: 20,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 18 ,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0EC310',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 18,
    margin: 5,
  },


  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },


  buttonFacebookStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0168a8',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 18,
    margin: 5,
  },


  buttonFacebookStyle3: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196f3',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 18,
    margin: 5,
  },

  buttonFacebookStyle4: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#969696',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 18,
    margin: 5,
  },


});
 
export default App1;

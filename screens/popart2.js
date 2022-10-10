

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
 
const App = () => {
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
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5} 
          onPress={() => OpenAnything.Pdf('https://drive.google.com/file/d/1X2v1_fYHMQJsfkhOzQpfhZqxxagyV_wT/view?usp=sharing')}>
          <Image
            source={require('../assets/welcome.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Directors Welcome
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
           source={require('../assets/welcome.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Welcome to Milford Street Accommodation 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/welcome.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Acceptable Use of IT
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
 
export default App;

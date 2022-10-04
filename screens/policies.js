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
       <Text style={styles.buttonTextStyle13}>
          
          </Text>
          <Text style={styles.buttonTextStyle13}>
          
          </Text>

       <Text style={styles.buttonTextStyle13}>
          Completed

          </Text>

          <Text style={styles.buttonTextStyle13}>
          
          </Text>
          <Text style={styles.buttonTextStyle13}>
          
          </Text>
          <Text style={styles.buttonTextStyle13}>
          Pending
          </Text>
      <View style={styles.container}>
     


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


       
        <TouchableOpacity
          style={styles.buttonFacebookStyle2}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/policy.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Student Accommodation Policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle2}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/policy.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          COVID Policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle2}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/policy.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Professional Behaviour for Students Policy
          </Text>
        </TouchableOpacity>



        



        <TouchableOpacity
          style={styles.buttonFacebookStyle2}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/policy.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          AHPRA Social Media Policy 
          </Text>
        </TouchableOpacity>


       




        <TouchableOpacity
          style={styles.buttonFacebookStyle4}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/prod.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Vacating procedure 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle4}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/prod.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Unit inventory  
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonFacebookStyle4}
          activeOpacity={0.5}>
          <Image
           source={require('../assets/prod.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Cleaning Standards  
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonFacebookStyle3}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/information.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Essential information 
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonFacebookStyle3}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/information.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Supermarket information 
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonFacebookStyle3}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/information.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Geraldton tourist information  
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonFacebookStyle3}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/information.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Bicycle information   
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonFacebookStyle3}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/information.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Kalbarri tourist information   
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

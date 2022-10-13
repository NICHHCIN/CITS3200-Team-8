

//Image Icon Inside the React Native Button
//https://aboutreact.com/image-icon-inside-the-react-native-button/
 
//import React in our code
import React,{useState, useEffect} from 'react';
import * as Progress from 'react-native-progress';
 
//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import * as OpenAnything from "react-native-openanything";

import { useNavigation } from '@react-navigation/core'


var statu=0.0;
const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


const App = () => {
  const navigation = useNavigation()
  const back = "\u2039"
  const [count, setCount] = useState(0);

  const onPress = async () => {
    await delay(1000);
    setCount(count+0.20);

   
  };

  const onPress0 = async () => {
    await delay(1000);
    setCount(count+0.20);

   
  };


  const onPress1 = async () => {
    
    await delay(3000);
    setCount(count+0.20);
  };

  const onPress2 = async () => {
    
    await delay(3000);
    setCount(count+0.20);
  };

  const onPress3 = async () => {
   
    
    setCount(count+0.20);
    await delay(3000);
    Alert.alert(
      'Module Completed'
   )

  };








  return (
    <SafeAreaView style={{flex: 1}}>
       <ScrollView style={styles.scrollView}>
       
      <View style={styles.container}>
      <TouchableOpacity 
       
       activeOpacity={0.5}
       onPress={() => navigation.navigate('Polic',{replace:true})}
       >
      <Text style={styles.buttonTextStyle13}>
          { back + "\n"}
          </Text>
          </TouchableOpacity>


          <Text style={styles.buttonTextStyle14}>
          Information

          </Text>




          <Text >
          {'\n'}

          </Text>

         
          
          <Progress.Bar progress={count} width={370} />


        
          <Text >
          {'\n'}

          </Text>



      <TouchableOpacity
          style={styles.buttonFacebookStyle3}
          activeOpacity={0.5}
          onPress={onPress}>
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
          activeOpacity={0.5}
          onPress={onPress0}>
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
          activeOpacity={0.5}
          onPress={onPress1}>
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
          activeOpacity={0.5}
          onPress={onPress2}>
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
          activeOpacity={0.5}
          onPress={onPress3}>
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

  buttonTextStyle14: {
    fontSize: 22,
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

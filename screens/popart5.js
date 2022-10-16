

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

import firebase from 'firebase/compat';
import { updateDoc } from 'firebase/firestore';
require('firebase/firestore') 

var statu=0.0;
const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


const App = () => {
  const navigation = useNavigation()
  const back = "\u2039"
  const [count, setCount] = useState(0);
  const [data, setData] = useState('0');

  useEffect(() => {
    firebase.firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then(function(doc){
      let data = doc.data().read;
      if (data == '0') {
        setData('00000000000000000')
        doc.update({read: '00000000000000000'});
      }
      else setData(data)
  })
    if (data[12]+data[13]+data[14]+data[15]+data[16] == '00000') {
      setCount(0)
    } 
    else if (data[12]+data[13]+data[14]+data[15]+data[16] == '10000' || data[12]+data[13]+data[14]+data[15]+data[16] == '00100' || data[12]+data[13]+data[14]+data[15]+data[16] == '01000' || data[12]+data[13]+data[14]+data[15]+data[16] == '00010' || data[12]+data[13]+data[14]+data[15]+data[16] == '00001') {
      setCount(0.2)
    }
    else if (data[12]+data[13]+data[14]+data[15]+data[16] == '01111' || data[12]+data[13]+data[14]+data[15]+data[16] == '11011' || data[12]+data[13]+data[14]+data[15]+data[16] == '10111' || data[12]+data[13]+data[14]+data[15]+data[16] == '11101' || data[12]+data[13]+data[14]+data[15]+data[16] == '11110') {
      setCount(0.8)
    }
    else if (data[12]+data[13]+data[14]+data[15]+data[16] == '01110' || data[12]+data[13]+data[14]+data[15]+data[16] == '01011' || data[12]+data[13]+data[14]+data[15]+data[16] == '00111' || data[12]+data[13]+data[14]+data[15]+data[16] == '11100' || data[12]+data[13]+data[14]+data[15]+data[16] == '10110' || data[12]+data[13]+data[14]+data[15]+data[16] == '11001' || data[12]+data[13]+data[14]+data[15]+data[16] == '11010' || data[12]+data[13]+data[14]+data[15]+data[16] == '10101' || data[12]+data[13]+data[14]+data[15]+data[16] == '10011' || data[12]+data[13]+data[14]+data[15]+data[16] == '01101') {
      setCount(0.6)
    }
    else setCount(0.4)
  })


  const onPress = async () => {
    if (data[12] == '0') {
      setCount(count+0.2)
      if (count == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+'1'+data[13]+data[14]+data[15]+data[16]
    });
  }
  };

  const onPress0 = async () => {
    if (data[13] == '0') {
      setCount(count+0.2)
      if (count == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+'1'+data[14]+data[15]+data[16]
    });
  }
  };


  const onPress1 = async () => {
    if (data[14] == '0') {
      setCount(count+0.2)
      if (count == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+'1'+data[15]+data[16]
    });
  }
  };

  const onPress2 = async () => {
    if (data[15] == '0') {
      setCount(count+0.2)
      if (count == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+'1'+data[16]
    });
  }
  };

  const onPress3 = async () => {
   
    if (data[16] == '0') {
      setCount(count+0.2)
      if (count == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+data[15]+'1'
    });
  }
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

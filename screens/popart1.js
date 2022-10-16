

//Image Icon Inside the React Native Button
//https://aboutreact.com/image-icon-inside-the-react-native-button/
 
//import React in our code
import React,{useState, useEffect} from 'react';
import * as Progress from 'react-native-progress';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 //import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,

  TouchableRipple,
} from 'react-native-paper';
import * as OpenAnything from "react-native-openanything";
import { useNavigation } from '@react-navigation/core';
import Policies from './policies';

import firebase from 'firebase/compat';
import { updateDoc } from 'firebase/firestore';
require('firebase/firestore') 

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

/*
function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Policies')}
    >
        <Text>Back</Text>
    </TouchableOpacity>
  );
}*/

const App1 = () => {
  const navigation = useNavigation()
  const back = "\u2039"

  const [count1, setCount1] = useState(0);
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
      if (data[0]+data[1] == '00') {
        setCount1(0)
      } 
      else if (data[0]+data[1] == '01') {
        setCount1(0.5)
      }
      else if (data[0]+data[1] == '10') {
        setCount1(0.5)
      }
      else setCount1(1)
    })

  const onPress =  () => {
    OpenAnything.Pdf('https://drive.google.com/file/d/11g1Y2wXOMvAncf3cEOxxYtb321LuoxzD/view?usp=sharing')
    if (data[0] == '0') {
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: '1'+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+data[15]+data[16]});
      setCount1(count1+0.5)
      if (count1 == 1){
        alert("Module Completed")
      }
    }
  };

  const onPress1 = async () => {
    OpenAnything.Pdf('https://drive.google.com/file/d/11g1Y2wXOMvAncf3cEOxxYtb321LuoxzD/view?usp=sharing')
    if (data[1] == '0') {
      setCount1(count1+0.5)
      if (count1 == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+'1'+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+data[15]+data[16]
    });
  }
  };

  


  return (
    <SafeAreaView style={{flex: 1}}>
       <ScrollView style={styles.scrollView}>

       
       




      <View style={styles.container}>

      {/*<GoToButton screenName="Policies"/>*/}

    
      <TouchableOpacity 
       
       activeOpacity={0.5}
       onPress={() => navigation.navigate('Policies',{replace:true})}
       
       >
      <Text style={styles.buttonTextStyle13}>
          { back + "\n"}
          </Text>
          </TouchableOpacity>


          <Text style={styles.buttonTextStyle14}>
          Emergency

          </Text>




          <Text >
          {'\n'}

          </Text>

         
          
          <Progress.Bar progress={count1} width={370} />


        
          <Text >
          {'\n'}

          </Text>
          

          

        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={onPress}
          
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
          onPress={onPress1}      
              >
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
 
export default App1;

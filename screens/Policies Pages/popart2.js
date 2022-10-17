

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
} from 'react-native';

import { useNavigation } from '@react-navigation/core'

import * as OpenAnything from "react-native-openanything";

import firebase from 'firebase/compat';
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
      setData(data)
  })
    if (data[2]+data[3]+data[4] == '000') {
      setCount(0)
    } 
    else if (data[2]+data[3]+data[4] == '001' || data[2]+data[3]+data[4] == '010' || data[2]+data[3]+data[4] == '100') {
      setCount(1/3)
    }
    else if (data[2]+data[3]+data[4] == '111') {
      setCount(1)
    }
    else setCount(2/3)
  })


  const onPress = async () => {
    OpenAnything.Pdf('https://drive.google.com/file/d/1X2v1_fYHMQJsfkhOzQpfhZqxxagyV_wT/view?usp=sharing');
    if (data[2] == '0') {
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+'1'+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+data[15]+data[16]
    });
      setCount(count+(1/3))
      if (count == 1){
        alert('Module Completed')
      }
  }
  };

  const onPress1 = async () => {
    
    if (data[3] == '0') {
      setCount(count+0)//(1/3))
      if (count == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+'1'+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+data[15]+data[16]
    });
  }
  };

  const onPress3 = async () => {
    OpenAnything.Pdf('https://drive.google.com/file/d/1pXv5wAhiVxdrR_NCjAmhoaEm0v6SpMI0/view?usp=sharing');
    
    if (data[4] == '0') {
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+data[3]+'1'+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+data[15]+data[16]
    });
      setCount(count+(1/3))
      if (count == 1){
        alert('Module Completed')
      }
    }

    if (count1 == 1){
      alert('Module Completed')
    }
};


  return (
    <SafeAreaView style={{flex: 1}}>
       <ScrollView style={styles.scrollView}>
       
      <View style={styles.container}>
      <TouchableOpacity 
       
       activeOpacity={0.5}
       //onPress={() => navigation.navigate('Policies')}
       onPress={() => navigation.navigate('Main')}
       
      >
      <Text style={styles.buttonTextStyle13}>
          { back + "\n"}
          </Text>
          </TouchableOpacity>


          <Text style={styles.buttonTextStyle14}>
          Welcome

          </Text>




          <Text >
          {'\n'}

          </Text>

         
          
          <Progress.Bar progress={count} width={360} />


        
          <Text >
          {'\n'}

          </Text>
          
      




      <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5} 
          onPress={onPress} 
          
          >
          <Image
            source={require('../../assets/welcome.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Directors Welcome
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={onPress1} 
          >
          <Image
           source={require('../../assets/welcome.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Welcome to Milford Street Accommodation 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={onPress3} 
          >
          <Image
            source={require('../../assets/welcome.png')}
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

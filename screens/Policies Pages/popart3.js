

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
import * as OpenAnything from "react-native-openanything";
import { useNavigation } from '@react-navigation/core'

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
    if (data[5]+data[6]+data[7]+data[8] == '0000') {
      setCount(0)
    } 
    else if (data[5]+data[6]+data[7]+data[8] == '1000' || data[5]+data[6]+data[7]+data[8] == '0010' || data[5]+data[6]+data[7]+data[8] == '0100' || data[5]+data[6]+data[7]+data[8] == '0001') {
      setCount(0.25)
    }
    else if (data[5]+data[6]+data[7]+data[8] == '1110' || data[5]+data[6]+data[7]+data[8] == '0111' || data[5]+data[6]+data[7]+data[8] == '1101' || data[5]+data[6]+data[7]+data[8] == '1011') {
      setCount(0.75)
    }
    else if (data[5]+data[6]+data[7]+data[8] == '1111') {
      setCount(1)
    }
    else setCount(0.5)
  })


  const onPress = async () => {
    OpenAnything.Pdf('https://drive.google.com/file/d/1y9r93E5WKt114x8_K-vyrpBjjS7QMEsb/view?usp=sharing');

    if (data[5] == '0') {

      setCount(count+0.25)
      if (count == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+data[3]+data[4]+'1'+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+data[15]+data[16]
    });
  }
  };

  const onPress1 = async () => {
    
    if (data[6] == '0') {
      setCount(count+0.25)
      if (count == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+'1'+data[7]+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+data[15]+data[16]
    });
  }
  };

  const onPress2 = async () => {
    
    if (data[7] == '0') {
      setCount(count+0.25)
      if (count == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+'1'+data[8]+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+data[15]+data[16]
    });
  }
  };

  const onPress3 = async () => {
   
    if (data[8] == '0') {
      setCount(count+0.25)
      if (count == 1){
        alert('Module Completed')
      }
    
      firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({read: data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+'1'+data[9]+data[10]+data[11]+data[12]+data[13]+data[14]+data[15]+data[16]
    });
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
       onPress={() => navigation.navigate('Policies',{replace:true})}
       >
      <Text style={styles.buttonTextStyle13}>
          { back + "\n"}
          </Text>
          </TouchableOpacity>


          <Text style={styles.buttonTextStyle14}>
          Policies

          </Text>




          <Text >
          {'\n'}

          </Text>

         
          
          <Progress.Bar progress={count} width={360} />


        
          <Text >
          {'\n'}

          </Text>
      <TouchableOpacity
          style={styles.buttonFacebookStyle2}
          activeOpacity={0.5}
          onPress={onPress} 
          >

          <Image
            source={require('../../assets/policy.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Student Accommodation Policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle2}
          activeOpacity={0.5}
          onPress={onPress1} >
          <Image
            source={require('../../assets/policy.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          COVID Policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle2}
          activeOpacity={0.5}
          onPress={onPress2} >
          <Image
            source={require('../../assets/policy.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Professional Behaviour for Students Policy
          </Text>
        </TouchableOpacity>



        



        <TouchableOpacity
          style={styles.buttonFacebookStyle2}
          activeOpacity={0.5}
          onPress={onPress3} >
          <Image
            source={require('../../assets/policy.png')}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          AHPRA Social Media Policy 
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

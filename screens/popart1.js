

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


  const onPress =  () => {
    console.log("here");
    OpenAnything.Pdf('https://drive.google.com/file/d/1UWIbtXo1oRLTQj7wf8O2BsbVp9aHbVRa/view?usp=sharing');
    setCount1(count1+0.50);

   
  };

  const onPress1 = async () => {
    OpenAnything.Pdf('https://drive.google.com/file/d/11g1Y2wXOMvAncf3cEOxxYtb321LuoxzD/view?usp=sharing')
    await delay(3000);
    setCount1(count1+0.50);
    await delay(3000);
    Alert.alert(
      'Module Completed'
   )
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

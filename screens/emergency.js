

//Image Icon Inside the React Native Button
//https://aboutreact.com/image-icon-inside-the-react-native-button/
 
//import React in our code
import {Linking} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons';
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
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
       <ScrollView style={styles.scrollView}>
       
      <View style={styles.container}>
     
      <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('tel:000')}
          >
          
          {/*<Ionicons style={styles.buttonImageIconStyle} name={"call"} color={'#FFFFFF'}/>*/}
          <Text style={styles.buttonTextStyle}>
          Emergency (Police/Ambulance/Fire) 
          </Text>
          <Text style={styles.buttonTextStyle3}>
             000
          </Text>
          {/*<Image
            source={require('../assets/phone2.png')}
            style={styles.buttonImageIconStyle}
  />*/}
        </TouchableOpacity>

        


        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('tel:048-015-9451')}
           >
          
          {/*<Ionicons style={styles.buttonImageIconStyle} name={"call"} color={'#FFFFFF'}/>*/}
          <Text style={styles.buttonTextStyle}>
          Student administration (Adam)
          </Text>
          <Text style={styles.buttonTextStyle3} >
        048-015-9541
          </Text>
          {/*<Image
            source={require('../assets/phone2.png')}
            style={styles.buttonImageIconStyle}
/>*/}
          
        </TouchableOpacity>
        




        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('tel:048-015-9134')}
           >
          
          {/*<Ionicons style={styles.buttonImageIconStyle} name={"call"} color={'#FFFFFF'}/>*/}
          <Text style={styles.buttonTextStyle}>
          Doctor (Nick)
          </Text>
          <Text style={styles.buttonTextStyle3}>
        048-015-9134
          </Text>
          {/*<Image
            source={require('../assets/phone2.png')}
            style={styles.buttonImageIconStyle}
/>*/}
        </TouchableOpacity>
        

        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('tel:044-015-9541')}
           >
          
          {/*<Ionicons style={styles.buttonImageIconStyle} name={"call"} color={'#FFFFFF'}/>*/}
          <Text style={styles.buttonTextStyle}>
          Plumber (John)
          </Text>
          <Text style={styles.buttonTextStyle3}>
        044-015-9541
          </Text>
          {/*<Image
            source={require('../assets/phone2.png')}
            style={styles.buttonImageIconStyle}
/>*/}
        </TouchableOpacity>

        

        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('tel:041-315-9541')}
           >
          
          {/*<Ionicons style={styles.buttonImageIconStyle} name={"call"} color={'#FFFFFF'}/>*/}
          <Text style={styles.buttonTextStyle}>
          Electrician (Sam) 
          </Text>
          <Text style={styles.buttonTextStyle3}>
        041-315-9541
          </Text>

          {/*<Image
            source={require('../assets/phone2.png')}
            style={styles.buttonImageIconStyle}
/>*/}
        </TouchableOpacity>
        



        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('tel:043-215-9541')}
           >
          
          {/*<Ionicons style={styles.buttonImageIconStyle} name={"call"} color={'#FFFFFF'}/>*/}
          <Text style={styles.buttonTextStyle}>
          Site Manager (William) 
          </Text>
          <Text style={styles.buttonTextStyle3}>
        043-215-9541
          </Text>

          {/*<Image
            source={require('../assets/phone2.png')}
            style={styles.buttonImageIconStyle}
/>*/}
        </TouchableOpacity>
        

        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('tel:041-311-5954')}
           >
         
          {/*<Ionicons style={styles.buttonImageIconStyle} name={"call"} color={'#FFFFFF'}/>*/}
          <Text style={styles.buttonTextStyle}>
          Cleaner (Byrne) 
          </Text>
          <Text style={styles.buttonTextStyle3}>
        041-311-5954
          </Text>

          {/*<Image
            source={require('../assets/phone2.png')}
            style={styles.buttonImageIconStyle}
/>*/}
        </TouchableOpacity>
        

        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('tel:048-015-9547')}
           >
         
          {/*<Ionicons style={styles.buttonImageIconStyle} name={"call"} color={'#FFFFFF'}/>*/}
          <Text style={styles.buttonTextStyle}>
          Technician (Thomas) 
          </Text>
          <Text style={styles.buttonTextStyle3}>
        048-015-9547
          </Text>

          {/*<Image
            source={require('../assets/phone2.png')}
            style={styles.buttonImageIconStyle}
/>*/}
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('tel:048-015-8547')}
          >

          {/*<Ionicons style={styles.buttonImageIconStyle} name={"call"} color={'#FFFFFF'}/>  */}
          <Text style={styles.buttonTextStyle}>
          Supervisor (Roberts)      
          </Text>
          <Text style={styles.buttonTextStyle3}>
        048-015-8547
          </Text>


          {/*<Image
            source={require('../assets/phone2.png')}
            style={styles.buttonImageIconStyle}
/>*/}
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

  buttonTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 15,
    fontSize: 18,
  },

   buttonTextStyle3: {
    fontSize: 20,
    //fontWeight: 'bold',
    marginBottom: 1,
    marginRight: 10,
    fontSize: 19,
    color: '#fff'
  },



  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0e5480',
    borderWidth: 0.5,
    borderColor: '#0e5480',
    height: 70,
    borderRadius: 30 ,
    margin: 5,
  },




  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0EC310',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 110,
    borderRadius: 18,
    margin: 5,
  },


  buttonImageIconStyle: {
    padding: 10,
    margin: 25,
    height: 32,
    width: 25,
    resizeMode: 'stretch',
    
    marginTop: -100,
  },


  // buttonTextStyle: {
  //   color: '#F15454#fff',
  //   marginBottom: 4,
  //   marginLeft: 15,
  //   fontSize: 18,
  // },
  



  buttonTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#5ca1cc',
    borderWidth: 0.5,
    borderColor: '#5ca1cc',
    height: 70,
    borderRadius: 30,
    margin: 5,
  },





});
 
export default App;



// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

// const DATA = [
//   {
//     id: 'a',
//     title: 'Emergency (Police/Ambulance/Fire)',
//     subCategory: [{id: '1', name: ' 000 '}],
//   },
//   {
//     id: 'b',
//     title: 'Student administration (Adam)',
//   },

//   {
//     id: 'c',
//     title: 'Docter (Nick)',
//   },
  
//   {
//     id: 'd',
//     title: 'Electrician (Sam)',
//   },
//   {
//     id: 'f',
//     title: 'Site Manager (William)',
//   },

//   {
//     id: 'g',
//     title: 'Clearner (Byrne)',
//   },

//   {
//     id: 'h',
//     title: 'Technician (Thomas)',
//   },
//   {
//     id: 'i',
//     title: 'Supervisor (Roberts)',
//   },




// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const App = () => {
//   const renderItem = ({ item }) => (
//     <Item title={item.title} />
//   );

//   function handleItemClick({index}) {
//     console.log(index);
//   };


 
  

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
        
//         keyExtractor={item => item.id}

//         onItemClick={handleItemClick}
        

//       />
//     </SafeAreaView>
//   );
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f0f2f3',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 20,
//   },
// });

// export default App;

//...



// import React from 'react';
// import { Image, StyleSheet, Text, View, Button,  Linking } from 'react-native';

// function getAccomodationAddress() {
//   var accomodationAddress = "1234 Main St, Kalbarri, WA 6536";
//   return accomodationAddress;
// }

// function getEmergencyContact() {
//   var emergencyContact = "0412 345 678";
//   return emergencyContact;
// }

// function getEmergencyMeetingPoint() {
//   var emergencyMeetingPoint = "Kalbarri Visitor Centre";
//   return emergencyMeetingPoint;
// }

// const Emergency = () => {
//     return (
//       <View style={styles.container}>
//         <Image source = {require('../assets/siren.png')} style = {styles.icons}/>
//         <Text style={styles.paragraph1}>
//           Emergency Information
//         </Text>
//         <Text style={styles.paragraph}>
//           Accomodation Address: {getAccomodationAddress()}
//         </Text>
//         {/* <Text style={styles.paragraph}>
//           Emergency Contact: {getEmergencyContact()}
//         </Text> */}
//         <Button title="Call Emergency Contact" onPress={() => Linking.openURL('tel:0412345678')} />

//         <Text style={styles.paragraph}>
//             Emergency Meeting Point: {getEmergencyMeetingPoint()}
//             </Text>
//         </View>
//         );
//     }


// export default Emergency;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#f0f2f2' ,
//     padding: 8,
//   },
//   icons: {
//     width: 200,
//     height: 200,
//     alignSelf: 'center',
//   },


//   button: {
//     backgroundColor: '',
//     width: '100%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },

//   paragraph1: {
//     margin: 34,
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });





        
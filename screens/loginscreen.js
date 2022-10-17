import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Image, Alert, KeyboardAvoidingView, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigation = useNavigation()
  const ContactAdmin  = () => {
    return (
    Alert.alert(
      "Contact Admin",
      "Do you want to contact admin?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => Linking.openURL('mailto:admin@wacrh.com.au') }
      ],
      { cancelable: false }
    )
    )

  }
      
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Main")
      }
    })

    return unsubscribe
  }, [])

  // const handleSignUp = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Registered with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      
      
      .catch(error => alert(error.message))
  }
  return (
    // add a logo here
    
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
      {/*<View style={styles.talkBubbleSquare}></View>*/}
      <Image source = {require('../assets/icon.png')} style = {styles.icons}/>
        <TextInput
          placeholder="Email"
          //make the text bold

          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
           
      </View>
      <View style={styles.greytext}>
        <TouchableOpacity
          onPress={ContactAdmin}
          style={styles.greytext}
        >

          <Text style={styles.greytext}>Contact Admin</Text> 

        </TouchableOpacity>
        
      </View>

      <View style={styles.greytext}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPassword")}
          style={styles.greytext}
        >

          <Text style={styles.greytext}>Forgot Password?</Text> 

        </TouchableOpacity>
        
      </View>

      {/* // a visit us link at the bottom of the page that links to the website www.wacrh.com.au  */}
      <View style={styles.visitus}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.wacrh.uwa.edu.au/')}
          style={styles.visitus}
        >

          <Text style={styles.visitus}>Visit Us</Text>

        </TouchableOpacity>
      </View>




    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  visitus: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,

  },

  greytext: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
        
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    color: '#FFA500',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#FFA500',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  icons: {
    width: 350,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },

  talkBubbleSquare: {
    width: 400,
    height: 300,
    backgroundColor: "#ff962b",
    borderRadius: 50,
    alignSelf: 'center',
  },

})
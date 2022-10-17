//THis page allows the user to update password and current phone number after verification of the current password using firebase authentication
import  React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

import { auth } from '../firebase';

import { useNavigation } from '@react-navigation/native';

import { useIsFocused } from '@react-navigation/native';


export default function SettingsScreen() {
    const back = "\u2039"
    const navigation = useNavigation()

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [newPassword, setNewPassword] = useState('')


    const isFocused = useIsFocused();

    const handleUpdatePassword = () => {
        auth.currentUser.updatePassword(newPassword)
            .then(() => {
                alert('Password updated!')
            })

    }

    useEffect(() => {
        if (isFocused) {
            const unsubscribe = auth.onAuthStateChanged(user => {
                if (user) {
                    setEmail(user.email)

                }
            })
            return unsubscribe
        }
    }, [isFocused])

    

    return (
               
        


        <View style={styles.heading}>
            <TouchableOpacity 
       
       activeOpacity={0.5}
       onPress={() => navigation.navigate('Main')}//,{replace:true})}
       
       >

      <Text style={styles.buttonTextStyle13}>
          { back + "\n"}
          </Text>
          </TouchableOpacity>


            <Text style={styles.title}>Settings</Text>

            <Text style={styles.text}>Current Email.</Text>

            <Text style={styles.email}>{auth.currentUser.email}</Text>

            <Text style={styles.text}>Enter Password.</Text>

            <TextInput

                style={styles.input}

                placeholder='Password'

                secureTextEntry={true}

                onChangeText={text => setPassword(text)}

                value={password}

            />

            <Text style={styles.text}>Enter New Password.</Text>

            <TextInput

                style={styles.input}

                placeholder='New Password'

                secureTextEntry={true}

                onChangeText={text => setNewPassword(text)}

                value={newPassword}

            />

        
        


            <TouchableOpacity

                style={styles.button}

                onPress={handleUpdatePassword}

            >

                <Text style={styles.buttonText}>Update Password</Text>

            </TouchableOpacity>

           
            
        </View>

    )
        
}

const styles = StyleSheet.create({

    //Heading should be at the top of the screen
    back : {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        zIndex: 1,
    },
    backText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
        
    heading: {

        flex: 1,


        justifyContent: 'center',

        alignItems: 'center',

        backgroundColor: '#fff',

    },
    
    title: {

        fontSize: 30,

        fontWeight: 'bold',

        marginBottom: 20,

    },

    text: {

        fontSize: 15,

        color: '#000',

        marginBottom: 5,

    },

    email: {
        
        //bold
        fontWeight: 'bold',

        fontSize: 15,
        
        color: '#FFA500',

        marginBottom: 5,
    },

    input: {

        width: 300,

        height: 40,

        padding: 10,

        borderWidth: 1,

        borderColor: '#ccc',

        borderRadius: 5,

        marginBottom: 10,

    },

    button: {

        width: 300,

        padding: 15,

        backgroundColor: '#FFA500',

        borderRadius: 5,

        marginBottom: 20,

    },

    buttonText: {

        fontSize: 20,

        color: '#fff',

        textAlign: 'center',

    },
    buttonTextStyle13: {
        fontSize: 27,
        fontWeight: "bold",
        textAlign:'left',
        marginLeft: "4%"
      },
    

});
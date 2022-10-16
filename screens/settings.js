//THis page allows the user to update password and current phone number after verification of the current password using firebase authentication
import  React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

import { auth } from '../firebase';

import { useNavigation } from '@react-navigation/native';

import { useIsFocused } from '@react-navigation/native';


export default function SettingsScreen() {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [newPassword, setNewPassword] = useState('')

    const [newPassword1, setNewPassword1] = useState('')

    const isFocused = useIsFocused();

    const handleUpdatePassword = () => {

        // Check if the email exists in the firebase database

        //confirm new password and new password1 are the same if not alert user to enter the same password
        
        if (newPassword != newPassword1) {
            alert('Passwords do not match')
        } else {

            auth

            .signInWithEmailAndPassword(email, password)

            .then(() => {

                auth.currentUser.updatePassword(newPassword)

                alert('Password has been updated!')

                navigation.navigate("Login")

            })

            .catch(error => alert(error.message))
        }
    }

    return (
               
        


        <View style={styles.heading}>
            <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backText}>Back</Text>
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

                onChangeText={text => setNewPassword1(text)}

                value={newPassword}

            />

        
            
            <Text style={styles.text}>Confirm New Password.</Text>

            <TextInput

                style={styles.input}

                placeholder='Confirm New Password'

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

});
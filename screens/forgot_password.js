/*This Page is for the user to enter their email address and send a password reset email to their email address.*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordScreen() {

    const navigation = useNavigation()
    
    const [email, setEmail] = useState('')
    
    const handleResetPassword = () => {
        // Check if the email exists in the firebase database
        
        auth
        .sendPasswordResetEmail(email)
        .then(() => {

            alert('Password reset email sent!')
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }
    
    return (
        <View style={styles.heading}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.text}>Enter Email.</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TouchableOpacity
                style={styles.button}

                onPress={handleResetPassword}
            >

                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    //Heading should be at the top of the screen
    heading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',



    },
    title: {

        fontSize: 30,
        fontWeight: 'bold',

    },


    text: {

        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    input: {
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        padding: 10,


    },

    button: {
        width: 300,
        backgroundColor: '#FFA500',
        borderRadius: 25,
        marginVertical: 10,

    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center',
        padding: 13,
    },
});

  
/*This Page is for the user to enter their email address and send a password reset email to their email address.*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordScreen() {

    const navigation = useNavigation()
    
    const [email, setEmail] = useState('')
    
    const handleResetPassword = () => {
        auth
        .sendPasswordResetEmail(email)
        .then(() => {
            alert('Password reset email sent!')
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }
    
    return (
        <View style={styles.container}>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
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
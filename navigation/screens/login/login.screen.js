import React from 'react';
import { ImageBackground, SafeAreaView, View, Image} from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { loginStyle } from './login.style';

export const LoginScreen = () => {
  const image = require('./assets/bg.jpg');
  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Image source = {require('./assets/icon.png')} style={loginStyle.logo} />
        <Card>
          <Card.Title
            title="Login"
            style={loginStyle.cardTitle}
          ></Card.Title>  
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address"></TextInput>
            <TextInput label="Password" secureTextEntry={true}></TextInput>
            <Button uppercase={false} style={loginStyle.cardButton}>
              Forgot Password
            </Button>
            <Button mode="contained" style={loginStyle.cardButton}>
              Login
            </Button> 
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

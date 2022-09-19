import { Formik } from 'formik';
import React from 'react';
import { SafeAreaView, View, Image} from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { loginStyle } from './login.style';
import {loginform} from './login.form'
import MainContainer from '../../MainContainer';

export default function LoginScreen() {

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
            <Formik
              initialValues={{email:"", password:""}}
              onSubmit={() => {
                <MainContainer/>
              }}
              validationSchema={loginform}>
              {({handleSubmit, handleChange}) => (
                <>
                  <TextInput label="Email" keyboardType="email-address"
                    onChangeText={handleChange('email')} testID="email">
                  </TextInput>
                  <TextInput label="Password" secureTextEntry={true}
                    onChangeText={handleChange('password')} testID="password">
                  </TextInput>
                  <Button uppercase={false} style={loginStyle.cardButton}>
                    Forgot Password
                  </Button>
                  <Button mode="contained" style={loginStyle.cardButton}
                    onPress={handleSubmit} testID="login">
                    Login
                  </Button>
                </>
              )}
            </Formik>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

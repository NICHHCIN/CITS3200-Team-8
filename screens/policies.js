import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Title } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  title: {
    alignItems: 'center',
  },
});

const Policies = () => {
  return (
    <View style={styles.container}>
        <Title style={styles.title}>Policies</Title>
        </View>
);}
export default Policies;
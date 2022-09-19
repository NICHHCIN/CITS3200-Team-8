//homescreen

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function HomeScreen() {
    return(
        <View style={{backgroundColor: '#f0f2f2' , flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Home Screen</Text>
        </View>

    )
        }

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})
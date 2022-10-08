import React from 'react';
import { StyleSheet, Text, View, Button,  Linking } from 'react-native';

function getUsername() {
    var username = "abcdef"; // link to database
    return username;
}

function getAccomodation() {
    var accomodation = "Kalbarri"; // link to database
    return accomodation;
}

function getCheckoutDate() {
    var checkoutDate = "22/08/2022";
    return checkoutDate;
}

function getProfilePicture() {
    var profilePricture = document.createElement("profilePicture");
    profilePricture.src = "https://banner2.cleanpng.com/20180722/gfc/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c0968c377.0307553315323166814291.jpg";
    var src = document.getElementById("x"); 
    src.appendChild(profilePicture);
}

const Profile = () => {
    return (
        <View>
            <Text>
                username
            </Text>
            <Text>
                accomodation \n
                checkoutDate
            </Text>
            {getProfilePicture()}
            add orange folder details below, link to database?
            <Text>
                Placement Details:
                <Text>
                    Map of {getAccomodation()} \n
                    Relevant Information \n
                    Office information
                </Text>
            </Text>
        </View>
    );
}

export default Profile

const styles = StyleSheet.create({
    orangeLinks: {
        color: 'orange',
        fontWeight: '800',
        fontSize: 15,
    },
})

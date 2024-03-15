//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const Details = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Details</Text>
            <Button title='Back' onPress={()=>navigation.navigate("Home")}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Details;

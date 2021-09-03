import React from 'react';
import { StyleSheet,Button,StatusBar,Image,SafeAreaView,Text, TouchableHighlight,View, TextInput, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';

export default function ConfirmPage() {
    return(
        <SafeAreaView style={styles.container}>
            <Icon name="chevron-with-circle-right"/>
            <Text style={styles.line1}>Booking Confirm</Text>
            <Text style={styles.line2}>We will call you for more</Text>
            <Text style={styles.line2}>information in 24 hours</Text>
            <Text style={styles.line3}>Thanks for booking</Text>
            <TouchableHighlight style={styles.buttonContainer}>
                <Text style={styles.loginText}>View More <Icon name="check"/></Text>
                
            </TouchableHighlight>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "antiquewhite"
    },
    line1:{
        fontSize:42,
        marginBottom:15
    },
    line2:{
        fontSize:22,
    },
    line3:{
        fontSize:22,
        marginBottom:20,
        marginTop:20
    },
    loginText:{
        color:"#ffffff",
        fontWeight:'bold',
        fontSize:20
    },
    buttonContainer:{
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 180,
        borderRadius: 40,
        backgroundColor:'#a52a2a'
    },





});



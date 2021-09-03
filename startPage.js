import React from 'react';
import { StyleSheet,Button,StatusBar,Image,SafeAreaView,Text, TouchableHighlight,View, TextInput, TouchableOpacity } from 'react-native';
//source={require('../images/001_villa.jpg')} 
export default function StartPage() {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title_logo}>LongStay Villa</Text>
            <Image style = {styles.image} source= {require('../images/001_villa.jpg')} />
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
                <Text style={styles.loginText}>GET STARTED</Text>
            </TouchableHighlight>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    title_logo:{
        flex:1,
        backgroundColor: '#ffffff',
        fontSize:52,
        fontWeight:'bold',
        color:"#a52a2a",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        flex:4,
        flexDirection: 'row',
    },
    buttonContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor:"#a52a2a",
    },
    loginText:{
        color: 'white',
        fontSize:30
    },
    container: {
        flex: 1,
        backgroundColor:"steelblue",
    },
    


});

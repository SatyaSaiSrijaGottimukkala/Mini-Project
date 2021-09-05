import React from 'react';
import { StyleSheet,Button,StatusBar,Image,SafeAreaView,Text, TouchableHighlight,View, TextInput, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmPage() {
    let navigation = useNavigation()
    var move = ()=>{
        navigation.navigate('Locations');
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
                <TouchableHighlight onPress={() => move()}>
                    <Icon style = {styles.cross} size={55} name="cross"/>
                </TouchableHighlight>
            </View>
            <View style={styles.box2}>
                <View style = {styles.imgbox}>
                    <Icon1 style = {styles.check} size={70} name="check"/>
                </View>
                <Text style={styles.line1}>Booking Confirm</Text>
                <Text style={styles.line2}>We will call you for more</Text>
                <Text style={styles.line2}>information in 24 hours</Text>
                <Text style={styles.line3}>Thanks for Booking!!</Text>
                <View>
                    <TouchableHighlight onPress={() => move()} style={[styles.buttonContainer,styles.button1]} >
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.loginText}>View More </Text>
                            <Icon2 style = {styles.img4} size={35} name="rightcircle"/>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f8f8ff"
    },
    box1:{
        flex:0.1,
        alignItems:'flex-end'
    },
    box2:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:100
    },
    line1:{
        fontSize:42,
        marginBottom:15,
        fontFamily:'Al Nile',
        color:'#696969'
    },
    line2:{
        fontSize:22,
        fontWeight:'300',
        fontFamily:'Avenir'
        //fontFamily:'AppleSDGothicNeo-Light'
    },
    line3:{
        fontSize:22,
        marginBottom:20,
        marginTop:20,
        fontWeight:'300',
        fontFamily:'Avenir'
    },
    loginText:{
        color:"#ffffff",
        fontWeight:'bold',
        fontSize:20,
        marginTop:4,
        marginLeft:15
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 40,
        backgroundColor:'#a52a2a'
    },
    button1:{
        width:200,
        height:60,
        marginTop:20
    },
    cross:{
        color:"#b22222",
        marginTop:15,
        marginRight:15,
    },
    imgbox:{
        backgroundColor:"#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
        height:130,
        width:130,
        borderRadius: 75,
        marginBottom:30,
        borderWidth:5,
        borderColor:'#ffffff'
        

    },
    check:{
        color:"#b22222",
    },
    img4:{
        color:"#ffffff",
        marginLeft:20
        
    }




});



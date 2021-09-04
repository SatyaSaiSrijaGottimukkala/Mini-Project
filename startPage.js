import React from 'react';
import { StyleSheet,Button,StatusBar,Image, SafeAreaView,Text, TouchableHighlight,View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default function StartPage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.head}>LongStay Villa</Text>
            </View>
            <View style ={styles.box2}>
                <Image style = {styles.img} source= {{uri:'https://training.pyther.com/yara/15-day/02-project-LongStay/004_villa.jpg'}} />
            </View>
            <View style={styles.box3}>
                <TouchableHighlight style={[styles.buttonContainer,styles.button1]}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.loginText}>GET STARTED</Text>
                        <Icon size = {30} style={styles.img1} name="arrowright"/>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff"
    },
    box1:{
        flex:1.2,
        justifyContent:'center',
        alignItems:'center'
    },
    box2:{
        flex:5, 
    },
    box3:{
        flex:1.4,
         alignItems:'flex-end'
    },
    head:{
        color:"#b22222",
        fontSize:53,
        fontWeight:'bold'
    },
    img:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
    buttonContainer:{
       backgroundColor:"#b22222",
       marginTop:35
       
    },
    button1:{
        width:230,
        height:75,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40
    },
    loginText:{
        color:"#ffffff",
        fontSize:20,
        marginRight:10,
        marginTop:3
    },
    img1:{
        color:"#ffffff",
        
    }

})

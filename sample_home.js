import  React, {useEffect, useState} from 'react';
import { View, Text,StyleSheet,Button ,Alert} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { useNavigation } from '@react-navigation/core';

import AlertView from './Modal';    //include this in file where we need alert button

export default function Home () {  
  const [alertVisible, setalertVisible]=useState(false) //include this in file where we need alert button

  
  const navigation= useNavigation();
   const onBook=()=>{                           //include this in file where we need alert button
     setalertVisible(true)                      //include this in file where we need alert button
     console.log("in home",alertVisible)        //include this in file where we need alert button
   }
    return (
      
      <View style={styles.container}>
        <View>
        <Button onPress={onBook}title="book"></Button></View> //include this in file where we need alert button
        <View>
        <AlertView visibility={alertVisible}></AlertView></View> //include this in file where we need alert button

        </View>  
    );
  }
  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 20  
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between' ,
      
    }  
})  

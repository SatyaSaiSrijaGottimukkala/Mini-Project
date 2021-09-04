import React, {useState, useEffect} from 'react';
import { Modal,View, StyleSheet,Button, Text ,TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/core';



export default function AlertView (value){
    console.log("in modal",value)
    console.log("value:", value['visibility'])
    const [alertVisible, setalertVisible]=useState(false)
    useEffect(()=>{
       if (value['visibility']===true )
       {
        setalertVisible(true)
        console.log("in true part", alertVisible)
       }
        else{
            setalertVisible(false)
            console.log("in else part", alertVisible)
        }
    })

    
    const navigation= useNavigation();
   const onYes=()=>{
       navigation.navigate('Logout')
        c=false
       setalertVisible(false)
       

      }
      const onCancel=()=>{
        //navigation.navigate('Home')

        setalertVisible(false)
        
       }
    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={alertVisible}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                         <Text style={styles.modelText} >Are you sure you want to book villa?</Text> 
                         <View style={{flexDirection:"row",marginLeft:100,marginTop:30}}>
                         <Button  
                            title="CANCEL" onPress={onCancel} color='red'></Button>
                            
                            <Button 
                            title="YES" onPress={onYes} color='red'> </Button>
                            
                         </View>
                    </View>
                </View>

            </Modal>
        </View>
    )}
const styles=StyleSheet.create({
    centeredView:{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1
    },
    modalView:{
        width: '90%',
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding : 15,
        alignItems: 'center',
        shadowColor:'black',
        shadowOffset:{
            width: 0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.85,
        elevation:5,
    },
    textStyle:{
        color:'grey',
        alignContent: 'center',
        fontSize:20,
        marginTop: 20
    },
    okStyle:{
        color: 'red',
        textAlign: "left",
        fontSize:20,
        flex:1,
        flexDirection:'row'
    },
    modelText:{
        textAlign:"center",
        //fontWeight:"bold",
        fontSize:15,
        shadowColor: "grey",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.3,
        shadowRadius:3.84,
        elevation:5,
    },
    buttonC:{
        flex:1,
        flexDirection:'row'
    }
})




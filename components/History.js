import React, { useState , useEffect} from "react";
import { Image,FlatList,
  SafeAreaView, StatusBar, Button,
   StyleSheet, Text, TouchableOpacity, 
   TouchableHighlight,Alert,
   View } from "react-native";
import {getLocationById, getLocations} from '../services/LocationData';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';


const Item = ({ item, onAddCart,onMore, onPress,onDelete, onEdit,style,toHome}) => (
    <SafeAreaView style={styles.container1}>
        <View style={styles.head1}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={toHome}>
            <Icon size={50} style = {styles.img1} name="chevron-left"/>
            </TouchableOpacity>
            <Text style={styles.text1}>Bookings History</Text>
        </View>
        <View style={styles.box}>
            <Image style={styles.img2} source={{uri: 'https:'+item.cover}}/>
        </View>
        <Text style={styles.description}>{item.desc}</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.price}>Prise :{item.price} / Per Day</Text>
            <Text style={styles.total}>Total :{item.total}</Text>
        </View>
        <Text style={styles.date}>Check In Date: Sep10 2021</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.date}>Check Out Date: Sep16 2021</Text>
            <Icon1 style ={styles.img3} name = "map-marker-alt" size={30}/>
            <Text style = {styles.place}>{item.place}</Text>
        </View>
        <View>
            <TouchableHighlight style={[styles.buttonContainer,styles.button1]} onPress={toHome} >
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.loginText}>Book More </Text>
                    <Icon2 style = {styles.img4} size={30} name="rightcircle"/>
                </View>
                
            </TouchableHighlight>
        </View>
        
       
        
    </SafeAreaView>

)
var arr = []
arr.push(getLocationById(2));

const History =  () => {
    const [selectedId, setSelectedId] = useState(null);
    const [count, doRender] = useState(0);
    const [customers, setCustomers] = useState([]);
    let navigation=useNavigation();
    
    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          toHome={()=>navigation.navigate("LocationList")}
        />
      );
    };
   
    return (
        <View style={styles.maincontainer}>
            <FlatList
                data={arr}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
         
        </View>
    );
  };
export default History;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor:"#ffffff"
    },
    container1:{
        flex:1,
        backgroundColor:"#ffffff",
        padding:10
    },
    head1:{
        flexDirection:"row",
    },
    img1:{
        color:'#b22222'
    },
    text1:{
        color:'#b22222',
        fontSize:24,
        marginLeft:20,
        marginTop:10
    },
    box:{
        flex:3,
        borderColor:"#deb887"

    },
    img2:{
        margin:10,
        height:270,
        width:370
    },
    description:{
        fontSize:20,
        margin:15
    },
    price:{
        marginLeft:15,
        fontSize:19
    },
    total:{
        marginLeft:15,
        fontSize:19
    },
    date:{
        marginLeft:15,
        fontSize:18,
        marginTop:13
    },
    img3:{
        marginLeft:40,
        marginTop:5
    },
    place:{
        fontSize:19,
        marginTop:7,
        marginLeft:10
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor:"#b22222",
        marginBottom:10,
        marginTop:70

    },
    buttonContainer1:{
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 180,
        borderRadius: 40,
        backgroundColor:'#a52a2a'
    },
    button1:{
        width:180,
        height:60,
        marginLeft:120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img4:{
        color:"#ffffff",
        marginLeft:20
        
    },
    loginText:{
        fontWeight:'bold',
        fontSize:17,
        color:'#ffffff',
        marginTop:5,
        marginLeft:15
    }


    
})
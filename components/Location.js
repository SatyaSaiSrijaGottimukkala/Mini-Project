import React, { useState , useEffect} from "react";
import { Image,FlatList,
  SafeAreaView, StatusBar, Button,
   StyleSheet, Text, TouchableOpacity, 
   TouchableHighlight,Alert,
   View } from "react-native";
import {getLocations} from '../services/LocationData';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Item = ({ item, move,move1,onAddCart,onMore, onPress,onDelete, onEdit,style }) => (

    <SafeAreaView style={styles.container1}>
        <View style={styles.box}>
            <Image style={styles.img} source={{uri: 'https:'+item.cover}}/>
        </View>
        <Text style={styles.description}>{item.desc}</Text>
        <Text style={styles.amount}>{item.price}</Text>
        <View style={{ flexDirection: "row" ,marginTop:10}}>
          <Icon1 style ={styles.img3} name = "map-marker-alt" size={30}/>
            <Text style={styles.place}>{item.place}</Text>
            <TouchableHighlight onPress={() => {move1()}} style={[styles.buttonContainer,styles.button1]} >
                <Text style={styles.loginText}>MORE</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {move()}} style={[styles.buttonContainer,styles.button2]} >
                <Text style={styles.loginText}>Book Villa</Text>
            </TouchableHighlight>
            
        </View>
        
        
    </SafeAreaView>

  
);

const VillaApp =  () => {
  let navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
  const [customers, setCustomers] = useState([]);
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        move={() =>
          navigation.navigate("ConfirmPage")
        }
        move1={()=>navigation.navigate("VillaDetails", { id: item.id})}
      />
    );
  };
 
  


  return (
    <View style={styles.maincontainer}>
    
          <FlatList
          
        data={getLocations()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
       
      </View>
  );
};

const styles = StyleSheet.create({
    container1:{
        flex:1,
        backgroundColor:"#fffafa",
        padding:10
    },
    box:{
        flex:2,
        borderColor:"#deb887"

    },
    img:{
        margin:10,
        height:200,
        width:370
    },
    description:{
        fontSize:20,
        fontFamily:'Avenir',
        marginLeft:10,
        margin:5

    },
    amount:{
        fontSize:22,
        marginLeft:10,
        color:"#a52a2a",
    },
    place:{
        fontSize:20,
        marginTop:10,
        marginLeft:5,
        fontFamily:'Avenir-Light',
        fontWeight:'400'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor:"#a52a2a",
        marginBottom:10

    },
    img3:{
      marginLeft:10,
      marginTop:5


    },
    button1:{
        marginLeft:60,
        marginRight:10,
        width:90,
        height:40,
    },
    button2:{
        width:120,
        height:40,
    },
    /*loginText:{
        color: 'white',
        fontSize:20,
        width:100,
        height:40,
        fontWeight:"800"
    },*/
  maincontainer: {
    flex: 1,
    backgroundColor:"#ffffff"
  },

loginText: {
    color: 'white',
    fontWeight:"800",
    fontSize:17
}, 
});

export default VillaApp;
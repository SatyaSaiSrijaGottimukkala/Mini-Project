import React, { useState , useEffect} from "react";
import { Image,FlatList,
  SafeAreaView, StatusBar, Button,
   StyleSheet, Text, TouchableOpacity, 
   TouchableHighlight,Alert,
   View } from "react-native";
import {getLocations} from '../services/locationData';

const Item = ({ item, onAddCart,onMore, onPress,onDelete, onEdit,style }) => (

    <SafeAreaView style={styles.container1}>
        <View style={styles.box}>
            <Image style={styles.img} source={{uri: 'https:'+item.cover}}/>
        </View>
        <Text style={styles.description}>{item.desc}</Text>
        <Text style={styles.amount}>{item.price}</Text>
        <View style={{ flexDirection: "row" }}>
            <Text style={styles.place}>{item.place}</Text>
            <TouchableHighlight style={[styles.buttonContainer,styles.button1]} >
                <Text style={styles.loginText}>MORE</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.buttonContainer,styles.button2]} >
                <Text style={styles.loginText}>Book Villa</Text>
            </TouchableHighlight>
            
        </View>
        
        
    </SafeAreaView>

  
);

const CustomerApp =  () => {
  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
  const [customers, setCustomers] = useState([]);
//console.log("DATA: "+JSON.stringify(DATA))
  const renderItem = ({ item }) => {
    //const backgroundColor = item.id === selectedId ? "#ffffff" :"#ffffff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
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
        fontSize:19,
        margin:5

    },
    amount:{
        fontSize:22,
        marginLeft:5,
        color:"#a52a2a"
    },
    place:{
        fontSize:20,
        margin:5
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor:"#a52a2a",
        marginBottom:10

    },
    button1:{
        marginLeft:90,
        marginRight:10,
        width:90,
        height:40,
    },
    button2:{
        width:120,
        height:40,
    },
    loginText:{
        color: 'white',
        fontSize:20,
        width:100,
        height:40
    },
  maincontainer: {
    flex: 1,
    backgroundColor:"#ffffff"
  },
  container: {
    flex: 1,
    alignItems:"center",
    backgroundColor:"#fbfbfb",
    marginTop: StatusBar.currentHeight || 1,
  },
  
buttonContainer1: {
  height: 45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  marginTop:30,
  width: 250,
  marginStart:65,
  borderRadius: 20,
  
},
loginButton: {
  backgroundColor: "#6200ee",
  fontWeight:"800"
},
loginButton1: {
  backgroundColor: "#ffffff",
  fontWeight:"800"
},
loginText: {
    color: 'white',
    fontWeight:"800"
},
  item: {
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 16,
   
  },
  title: {
    fontSize: 24,
   

  },
  details: {
    fontSize: 15,
    
  },
  
  bookCover: {
    
    height: 150,
    width: 90,
    flex: 0.9,
    marginEnd:10

  }
  
});

export default CustomerApp;

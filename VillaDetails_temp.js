import React, { useState , useEffect} from "react";
import { Image,FlatList,
  SafeAreaView, StatusBar, Button,
   StyleSheet, Text, TouchableOpacity, 
   TouchableHighlight,Alert,
   View } from "react-native";
import {getLocationById} from '../services/LocationData';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import { ListItem } from 'react-native-elements'


const a = () => {
    return (<View style={styles.head1}>
        <Icon size={40} style = {styles.img1} name="chevron-left"/>
        <Text style={styles.text1}>Details</Text>
        <Text style={styles.text2}>Price </Text>
    </View>);
    
}

const Item = ({ item, onAddCart,onMore, onPress,onDelete, onEdit,style }) => (
    <SafeAreaView style={styles.container1}>
        <View style={styles.head1}>
        <TouchableOpacity onPress={()=>console.log("back>>>>>>>")}style={{ flexDirection: "row"}}>
            <Icon size={40} style = {styles.img1} name="chevron-left"/>
        </TouchableOpacity>
            <Text style={styles.text1}>Details</Text>
            <Text style={styles.text2}>Price :{item.total}</Text>
        </View>
        <View style={styles.box}>
            <Image style={styles.img2} source={{uri: 'https:'+item.cover}}/>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={styles.text3}>Amiantus</Text>
        <Text style={styles.text4}>Details</Text>
        <Text style={styles.text5}>Reviews</Text>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={styles.text6}>BEDROOM</Text>
        <Text style={styles.text7}>05</Text>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={styles.text8}>TOTAL AREA</Text>
        <Text style={styles.text9}>7,600 sq ft</Text>
        </View>
        <Text style={styles.description}>{item.desc}</Text>
        
        <View style={{ flexDirection: "row"}}>
        <TouchableHighlight style={[styles.buttonContainer3,styles.button3]} >
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.loginText2}>SHARE THIS</Text>
                    <Icon3 style = {styles.img5} size={27} name="arrow-circle-up"/>
                </View> 
            </TouchableHighlight>
            <TouchableHighlight style={[styles.buttonContainer2,styles.button2]} >
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.loginText}>Book  </Text>
                    <Icon2 style = {styles.img4} size={27} name="rightcircle"/>
                </View> 
            </TouchableHighlight>
        </View>
        
       
        
    </SafeAreaView>

)


const VillaDetails = (props) => {
        const [selectedId, setSelectedId] = useState(null);
        const [count, doRender] = useState(0);
        const [customers, setCustomers] = useState([]);
        var arr = []
        arr.push(getLocationById(4));
        
        const renderItem = ({ item }) => {
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
                    data={arr}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
             
            </View>
        );
};

export default VillaDetails;

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
        color:'#b22222',
        marginLeft:2
    },
    text1:{
        color:'#b22222',
        fontSize:24,
        marginLeft:10,
        marginTop:6
    },
    text2:{
        color:'#b22222',
        fontSize:24,
        marginLeft:120,
        marginTop:6
        
    },
    text3:{
        color:'#696969',
        fontSize:19,
        marginLeft:20,
        marginTop:30
    },
    text4:{
        color:'#b22222',
        fontSize:19,
        marginLeft:70,
        marginTop:30
    },
    text5:{
        color:'#696969',
        fontSize:19,
        marginLeft:70,
        marginTop:30
    },
    text6:{
        color:'#708090',
        fontSize:15,
        marginLeft:24,
        marginTop:20
    },
    text7:{
        color:'#708090',
        fontSize:15,
        marginLeft:240,
        marginTop:20
    },
    text8:{
        color:'#708090',
        fontSize:15,
        marginLeft:24,
        marginTop:50
    },
    text9:{
        color:'#708090',
        fontSize:16,
        marginLeft:170,
        marginTop:50
    },
    box:{
        flex:3,
        borderColor:"#deb887"

    },
    img2:{
        margin:10,
        height:300,
        width:370,
        marginTop:30
    },
    description:{
        fontSize:25,
        margin:15,
        marginTop:30,
        marginLeft:25,
        alignItems:'center',
        justifyContent: 'center'
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
    img5:{
        color:"#ffffff",
        marginLeft:5,
        marginTop:0
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
        marginTop:70,
        position:'absolute',
        left:0

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
    buttonContainer2:{
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor:"#b22222",
        marginBottom:10,
        marginTop:70

    },
    buttonContainer3:{
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor:"#696969",
        marginBottom:10,

    },
    button1:{
        width:180,
        height:60,
        marginLeft:120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button2:{
        width:160,
        height:60,
        marginLeft:50,
        marginTop:15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button3:{
        width:160,
        height:60,
        marginTop:15,
        marginLeft:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img4:{
        color:"#ffffff",
        marginLeft:10
        
    },
    loginText:{
        fontWeight:'bold',
        fontSize:18,
        color:'#ffffff',
        marginTop:2,
        marginLeft:25
    },
    loginText2:{
        fontWeight:'bold',
        fontSize:15,
        color:'#ffffff',
        marginTop:5,
        marginLeft:4
    }



    
})

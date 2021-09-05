import React, { useState , useEffect} from "react";
import { Image,FlatList,SafeAreaView, StatusBar, Button,StyleSheet, Text, TouchableOpacity,TouchableHighlight,Alert,View } from "react-native";
import { Searchbar } from 'react-native-paper';
import {getLocationByPlace} from '../services/locationData';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';


const Item = ({ item,locationDetail,onPress,style }) => (
    <View style={styles.container1}>
        <View style={styles.box}>
            <TouchableHighlight onPress={()=>{locationDetail()}}>
                <Image style={styles.img2} source={{uri: 'https:'+item.cover}}/>
            </TouchableHighlight>
        </View>
    </View>

)

const Search =  () => {
    let navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    var move = ()=>{
        navigation.navigate('Locations');
    }

    const onChangeSearch = query => {
        setSearchQuery(query);
    }
    
    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          locationDetail={()=>navigation.navigate('Detail', { id: item.id})}
        />
      );
    };
    
    return (
        <View style={styles.maincontainer}>
            <View style={styles.maincontainer1}>
                <TouchableHighlight onPress={() => move()}>
                    <Icon size={40} style = {styles.left} name="chevron-left"/>
                </TouchableHighlight>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.search}
                />
                <Icon2 style={styles.filter} size={35} name="filter"/>
             </View>
            <FlatList
                data={data = getLocationByPlace(searchQuery)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                style={styles.flist}
            />
         
        </View>
    );
  };
export default Search;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor:"#ffffff",
    },
    maincontainer1: {
        flex:0.11,
        flexDirection:'row',
    },
    left:{
        flex:0.5,
        color:'#b22222',
        marginTop:13,
        height:50,
        width:50,
    },
    search:{
        flex:5,
        height:50,
        borderRadius:35,
        marginTop:10,
        backgroundColor:'#f5f5f5',
        marginLeft:5
    },
    filter:{
        flex:0.8,
        marginTop:16,
        color:'#696969',
        marginLeft:5,
        height:50,
        width:50,
    },
    flist:{
        flex:1,

    },
    container1:{
        padding:6
    },
    box:{
        borderColor:"#deb887",
        borderWidth:1

    },
    img2:{
        height:250,
        width:375
    },

    
})

import React,{useState,useEffect} from 'react';
import {View, SafeAreaView, StyleSheet,TouchableHighlight} from 'react-native';
import {
  Avatar,
  Title,
  Text,
  TouchableOpacity
} from 'react-native-paper';
import { ListItem } from 'react-native-elements'
//Icon add in the above list
import { getCustomers,deleteCustomer } from "../services/CustomerVilla";
import Iconn from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome5';





const list1 = [
  {
    title: 'All My Bookings',
    icon: 'bars'
  },
  {
    title: 'Pending Visits',
    icon: 'parachute-box'
  },
  {
    title: 'Pending Payments',
    icon: 'receipt'
  },
  {
    title: 'Feedback',
    icon: 'star'
  },
   // more items
];





const ProfileScreen = ({navigation}) => {

var cus = getCustomers();
var item = cus[0];
const [cnt, setcnt] = useState(0);
const [customers, setCustomers] = useState([]);
loadCustomer = () =>{
  let list = getCustomers();
  setCustomers(list)
  cus = list;
 // console.log("cus",cus)
  setcnt(cnt+1);
}
useEffect(()=>{
    console.log("came to profile")
  const unsubscribe = navigation.addListener('focus', () => {
      loadCustomer();
  });
  return unsubscribe;
},[navigation]);


  return (
    <SafeAreaView style={styles.container}>
       <TouchableHighlight  onPress={()=>{navigation.navigate("LocationList")}}>
            <Iconn size={50} style = {styles.img1,{color:"#B2002D"}} name="chevron-left"/>
            </TouchableHighlight>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image 
            source={{
              uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
            }}
            size={100}
          />
          <View style={{marginLeft: 60}}>
            <Title style={[styles.title, {
              marginTop:10,
              marginRight: 145,
              marginBottom: 5,
              color:"#777777",
              fontSize:25
            }]}>{cus[0].name}</Title>
            { /* <Caption style={styles.caption}>@j_doe</Caption> */ }
      <Text style={{color:"#777777", marginLeft: 0,marginTop: 5}}>{cus[0].email}</Text>
      <View style={styles.buttonContainer}>
      <TouchableHighlight style={{flexDirection: 'row',color:"#777777", marginRight: 130,marginTop: 15,width: 140, borderRadius: 20,borderWidth: 0.25, height: 35, backgroundColor: "#FFFFFF",  borderColor: '#777777',justifyContent: 'center',alignSelf: 'center',
    alignItems:'center'}} 
    
    onPress={() =>
        navigation.navigate("EditProfile", { id: item.id, name: item.name, email: item.email, phone: item.phone, address: item.address,city: item.city })}>
      <Text style={styles.loginText,{ "fontFamily":"Montserrat-Bold",color:"#777777"}}>EDIT PROFILE</Text>
      </TouchableHighlight>

      </View>  
      </View>
      </View>
      </View>
      <View>
  {
    list1.map((item, i) => (
      <ListItem key={i} bottomDivider>
     <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>  
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  buttonContainer: {
    
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#DCDCDC",
  },
  loginText: {
    color: '#777777',
  },
});

import * as React from 'react';
import { View, Text,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Login from './components/Login';
import Student from './components/Tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import profile from './components/profile1';
//import editprofile from './components/EditProfile';
import VillaDetails from './components/VillaDetails';
import StartPage from './components/StartPage';
import Login from './components/LoginVilla';
import History from './components/History';
import LocationList from './components/Location';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'
import SearchPage from './components/SearchPage';
import more from './components/More'
import ProfileScreen from './components/Profile';
import EditProfile from './components/EditProfile';
import ConfirmPage from './components/ConfirmPage';
//import {NativeModules} from 'react-native';

const MyTheme = {

dark: false,

colors: {

primary: 'rgb(255, 45, 85)',

background: 'rgb(242, 242, 242)',

card: 'rgb(255, 255, 255)',

text: 'rgb(28, 28, 30)',

border: 'rgb(199, 199, 204)',

notification: 'rgb(255, 69, 58)',

}

};

const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

 function Tabs() {
  
  return (
      <Tab.Navigator Theme={MyTheme}>
        <Tab.Screen name="LocationList" component={LocationList} options={{
          tabBarShowLabel:false,
          headerShown: false,
          ShowLabel:false,
          tabBarIcon: ({focused})=>(
            <SafeAreaView style ={{alignItems:'center', justifyContent:'center', top:10}}>
                    <Icon name="home" size={30}
                    style={{
                      color:focused?'#b2002d':'#748c94'
                    }}/>
                <Text style={{
                      color:focused?'#b2002d':'#748c94', fontSize:12
                    }}>Home</Text>
            </SafeAreaView>
          ),
        }}/>
        <Tab.Screen name="SearchPage" component={SearchPage} options={{
          tabBarShowLabel:false,
          headerShown: false,
          tabBarIcon: ({focused})=>(
            <View style ={{alignItems:'center', justifyContent:'center', top:10}}>
                    <Icon name="search1" size={30}
                    style={{
                      color:focused?'#b2002d':'#748c94'
                    }}/>
                <Text style={{
                      color:focused?'#b2002d':'#748c94', fontSize:12
                    }}>Location</Text>
            </View>
          ),
        }}/>
        <Tab.Screen name="History" component={History} options={{
          tabBarShowLabel:false,
          headerShown: false,
          tabBarIcon: ({focused})=>(
            <View style ={{alignItems:'center', justifyContent:'center', top:10}}>
                    <Icon name="hearto" size={30}
                    style={{
                      color:focused?'#b2002d':'#748c94'
                    }}/>
                <Text style={{
                      color:focused?'#b2002d':'#748c94', fontSize:12
                    }}>Bookings</Text>
            </View>
          ),
        }}/>
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
          tabBarShowLabel:false,
          headerShown: false,
          tabBarIcon: ({focused})=>(
            <View style ={{alignItems:'center', justifyContent:'center', top:10}}>
                    <Icon name="user" size={30}
                    style={{
                      color:focused?'#b2002d':'#748c94'
                    }}/>
                <Text style={{
                      color:focused?'#b2002d':'#748c94', fontSize:12
                    }}>Profile</Text>
            </View>
          ),
        }}/>
        <Tab.Screen name="more" component={more} options={{
          tabBarShowLabel:false,
          headerShown: false,
          tabBarIcon: ({focused})=>(
            <View style ={{alignItems:'center', justifyContent:'center', top:10}}>
                    <Icon2 name="menu" size={30}
                    style={{
                      color:focused?'#b2002d':'#748c94'
                    }}/>
                <Text style={{
                      color:focused?'#b2002d':'#748c94', fontSize:12
                    }}>More</Text>
            </View>
          ),
        }}/>
      </Tab.Navigator>
  );
} 

//NativeModules.Device.getDeviceName((err, name) => console.log("name of my device", name));
function App() {
  return (
   <NavigationContainer Theme={MyTheme}>
      <Stack.Navigator Theme={MyTheme}>
      <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="VillaDetails" component={VillaDetails} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmPage" component={ConfirmPage}options={{ headerShown: false }}/>


      </Stack.Navigator>
   </NavigationContainer>
  );
}
export default App;

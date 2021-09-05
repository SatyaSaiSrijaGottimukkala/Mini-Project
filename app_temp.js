import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Login from './components/Login';
import CustomerApp from './components/CustomerList';
import Menu from './components/AppMenu';
import AddCustomers from './components/AddCustomer';
import EditCustomers from './components/EditCustomer';
import LocalStorage from './components/LocalStorageAsync';
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
import { DefaultTheme } from '@react-navigation/native';

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



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <Menu/>
      <Text>Home Screen</Text>
      <LocalStorage/>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <Menu/>
      <Text>About Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

 function Tabs() {
  
  return (
      <Tab.Navigator>
        <Tab.Screen name="LocationList" component={LocationList} options={{
          tabBarShowLabel:false,
          position:'absolute',
          ShowLabel:false,
          tabBarIcon: ({focused})=>(
            <View style ={{alignItems:'center', justifyContent:'center', top:10}}>
                    <Icon name="home" size={30}
                    style={{
                      color:focused?'#b2002d':'#748c94'
                    }}/>
                <Text style={{
                      color:focused?'#b2002d':'#748c94', fontSize:12
                    }}>Home</Text>
            </View>
          ),
        }}/>
        <Tab.Screen name="SearchPage" component={SearchPage} options={{
          tabBarShowLabel:false,
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


function App() {
  return (
   <NavigationContainer Theme={MyTheme}>
      <Stack.Navigator Theme={MyTheme}>
      <Stack.Screen name="StartPage" component={StartPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="VillaDetails" component={VillaDetails} />

      </Stack.Navigator>
   </NavigationContainer>
  );
}
export default App;

/*<Stack.Screen name="Customers" component={CustomerApp} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={Student} />
      <Stack.Screen name="Add Customer" component={AddCustomers} />
      <Stack.Screen name="Edit Customer" component={EditCustomers} />*/

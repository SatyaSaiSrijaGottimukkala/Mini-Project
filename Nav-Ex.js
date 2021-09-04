import * as React from 'react';
import { Button,View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Login from './components/Login';
import CustomerApp from './components/CustomerList';
import Menu from './components/AppMenu';
import AddCustomer from './components/AddCustomer';
import EditCustomer from './components/EditCustomer';
import LocalStorage from './components/LocalStorage';
import Student from './components/Student';
//import HomeScreen1 from './components/HomeScreen';
import Nav from './components/Nav';
import DrawerNavigator from './components/DrawerNav';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


function HomeScreen() {
  return (
    <View style={{ backgroundColor: "antiquewhite",flex: 1,alignItems: 'center'}}>
      <Menu />
      <Text>Home Screen</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ backgroundColor: "antiquewhite",flex:1,alignItems: 'center'}}>
      <Menu />
      <Text>About CustomerApp</Text>
    </View>
  );
}

const Stack = createStackNavigator();
function customerStack() {
  return(
    <Stack.Navigator>
        <Stack.Screen name="Customers" component={CustomerApp} />
        <Stack.Screen name="EditCustomer" component={EditCustomer} />

      </Stack.Navigator>
  );
}

/*function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logout" component={Login} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Customers" component={CustomerApp} />
        <Stack.Screen name="AddCustomer" component={AddCustomer} />
        <Stack.Screen name="EditCustomer" component={EditCustomer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;*/

/*function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
        <Menu  navigation={navigation}/>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
        <Menu  navigation={navigation}/>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function ProducstsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
        <Menu  navigation={navigation}/>
      <Button onPress={() => navigation.goBack()} title="This is Product" />
    </View>
  );
}*/

const Drawer = createDrawerNavigator();
//const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" 
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffdab9',
          width: 240,
        },
        drawerActiveTintColor:'#800000',
      }}>
      <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="CustomerList" component={customerStack} />
        <Drawer.Screen name="AddCustomer" component={AddCustomer} />
      </Drawer.Navigator>
      
  
     
      </NavigationContainer>
  );
}

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Icon name="home" size={30}/>
      <Text>Home!</Text>
    </View>
  );
}

function BookingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bookings!</Text>
    </View>
  );
}

function LocationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Location!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Student() {
  return (
      <Tab.Navigator>
        <Tab.Screen name=" " component={HomeScreen} options={{
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
        <Tab.Screen name="  " component={LocationScreen} options={{
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
        <Tab.Screen name="   " component={BookingsScreen} options={{
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
        <Tab.Screen name="    " component={ProfileScreen} options={{
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
        <Tab.Screen name="     " component={MoreScreen} options={{
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




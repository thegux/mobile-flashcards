import React from 'react';
import 'react-native-gesture-handler';
import { Platform, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'
import Constants from 'expo-constants';
import NewDeck from './components/Decks/NewDeck'
import DeckContainer from './components/Decks/DeckContainer'
import Deck from './components/Decks/Deck'
import NewCard from './components/Cards/NewCard'
import Card from './components/Cards/Card'
import {white, blue, gray, black} from './utils/colors'


//Navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


//Custom Status Bar
function CustomStatusBar ({backgroundColor, ...props}) {
  return(
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

//Nesting Navigation
function Decks() {
  return (
    <Stack.Navigator initialRouteName="Decks" 
                     screenOptions={{
                      headerStatusBarHeight: 0,
                      headerTintColor: black,
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },}
                    }>

        <Stack.Screen name="Decks" component={DeckContainer}/>
        <Stack.Screen name="Deck" component={Deck}/>
        <Stack.Screen name="Card" component={Card}/>
        <Stack.Screen name="New Card" component={NewCard}/>

    </Stack.Navigator>
  );
}


//Main Component handling Routes with Tabs
export default function App() {
  return (
    <View style={{flex: 1}}>

      <CustomStatusBar backgroundColor={blue}  barStyle='light-content'/>

      <NavigationContainer>

              <Tab.Navigator screenOptions={({route}) => ({
                    tabBarIcon: ({size}) => {
                      if(route.name === 'Decks'){
                        return <Ionicons name='ios-albums' size={size} color={blue}/>
                      } else if (route.name === 'New Deck') {
                        return <Ionicons name='ios-add-circle' size={size} color={blue}/>
                      }
                    },
                    navigationOptions: {
                      header: null
                    },
                    tabBarOptions: {
                      activeTintColor: Platform.OS === 'ios' ? blue : white,
                      style: {
                        height: 56,
                        backgroundColor: blue,
                        shadowRadius: 6,
                        shadowOpacity: 1,
                        shadowColor: 'rgba(0,0,0,0.24)',
                        shadowOffset: {
                            width: 0,
                            height: 3
                        }
                      }
                    }
                  })}
                  >

                <Tab.Screen name="Decks" component={Decks} />
                <Tab.Screen name="New Deck" component={NewDeck} />

              </Tab.Navigator>

      </NavigationContainer>

    </View>
  );
}



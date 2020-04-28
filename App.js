import React from 'react';
import 'react-native-gesture-handler';
import { Platform, View, StatusBar, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'
import Constants from 'expo-constants';
import NewDeck from './components/Decks/NewDeck'
import DeckContainer from './components/Decks/DeckContainer'
import Deck from './components/Decks/Deck'
import NewCard from './components/Cards/NewCard'
import Quiz from './components/Quiz/Quiz'
import {white, blue, gray, black} from './utils/colors'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/decks'


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
                      headerStyle: {
                        backgroundColor: blue,
                      },
                      headerStatusBarHeight: 0,
                      headerTintColor: white,
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },}
                    }>

        <Stack.Screen name="Decks" component={DeckContainer}/>
        <Stack.Screen name="Deck" component={Deck} options={({ route }) => ({ title: route.params.deckTitle })}/>
        <Stack.Screen name="Quiz" component={Quiz}/>
        <Stack.Screen name="New Card" component={NewCard}/>

    </Stack.Navigator>
  );
}


//Main Component handling Routes with Tabs
export default function App() {

  return (
    <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>

          <CustomStatusBar backgroundColor={blue}  barStyle='light-content'/>

          <NavigationContainer>

                  <Tab.Navigator screenOptions={({route}) => ({
                        tabBarIcon: ({size, color}) => {
                          if(route.name === 'Decks'){
                            return <Ionicons name='ios-albums' size={size} color={color}/>
                          } else if (route.name === 'New Deck') {
                            return <Ionicons name='ios-add-circle' size={size} color={color}/>
                          }
                        },
                        navigationOptions: {
                          header: null
                        },
                        tabBarOptions: {
                          activeTintColor: gray,
                          style: {
                            height: 56,
                            color: gray,
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

                    <Tab.Screen name="Decks" component={Decks}/>
                    <Tab.Screen name="New Deck" component={NewDeck}/>

                  </Tab.Navigator>

          </NavigationContainer>

        </View>
      </Provider>
  );
}

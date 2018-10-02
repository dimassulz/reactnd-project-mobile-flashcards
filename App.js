import React from 'react';
import {createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import ListDeck from './components/ListDeck';
import NewDeck from './components/NewDeck';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import { cinza, laranja } from './utils/colors';
import ViewDeck from "./components/ViewDeck";
import StatusBarDeck from "./components/StatusBarDeck";

const MainTabs = createBottomTabNavigator({
        List: {
            screen: ListDeck,
            navigationOptions: {
                tabBarLabel: "Decks",
                tabBarIcon: ({focused, tintColor}) => {
                    return <Ionicons name="ios-albums-outline" size={25} color={tintColor}/>;
                }

            }
        },
        New: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: "New Deck",
                tabBarIcon: ({focused, tintColor}) => {
                    return <Ionicons name="ios-add-outline" size={25} color={tintColor}/>;
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: '#aaa'
        }
    }
);

const NavigationStack = createStackNavigator({
    Home: {
        screen: MainTabs,
        navigationOptions: {
            header: null
        }
    },
    ViewDeck: {
        screen: ViewDeck,
        navigationOptions: ({ navigation }) => ({
            title: `Deck ${navigation.state.params.deck.title}`
        })
    }
});

export default class App extends React.Component {
    render() {
        return (<View style={{ flex: 1 }}>
            <StatusBarDeck backgroundColor="red" barStyle="light-content" />
            <NavigationStack />
        </View>)
    }
}

import React from 'react';
import {createBottomTabNavigator} from 'react-navigation'
import {ListDeck, NewDeck} from './components'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { cinza, laranja } from './utils/colors';

const MainTabs= createBottomTabNavigator({
        List: {
            screen: ListDeck,
            navigationOptions: {
                tabBarLabel: "Baralhos",
                tabBarIcon: ({focused, tintColor}) => {
                    return <Ionicons name="ios-albums-outline" size={25} color={tintColor}/>;
                }

            }
        },
        New: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: "Novo Baralho",
                tabBarIcon: ({focused, tintColor}) => {
                    return <Ionicons name="ios-add-outline" size={25} color={tintColor}/>;
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: laranja,
            inactiveTintColor: cinza
        }
    }
);

export default class App extends React.Component {
    render() {
        return <MainTabs/>
    }
}

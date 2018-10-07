import React , {Component} from 'react';
import { View } from 'react-native';
import StatusBarDeck from "./components/StatusBarDeck";
import { setNotification } from './utils/notifications';
import {NavigationStack} from './utils/NavigationStack'

export default class App extends Component {
    componentDidMount() {
        setNotification();
    }
    render() {
        return (<View style={{ flex: 1 }}>
            <StatusBarDeck backgroundColor="red" barStyle="light-content" />
            <NavigationStack />
        </View>)
    }
}

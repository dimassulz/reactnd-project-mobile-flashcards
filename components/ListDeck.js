import React, {Component} from "react";import PropTypes from 'prop-types'import DeckItem from './DeckItem';import ViewDeck from './ViewDeck';import {StyleSheet, ScrollView} from "react-native";import {getListAllDecks} from '../utils/api';const propTypes = {    navigation: PropTypes.object.isRequired,};class ListDeck extends Component {    constructor(props) {        super(props);        this.state = {            decks: {},        };        this.pressNavigation = this.pressNavigation.bind(this);    };    pressNavigation(deck) {        this.props.navigation.navigate('ViewDeck', {deck});    };    componentDidMount() {        getListAllDecks().then((decks) =>            this.setState({decks})        );        this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => {            getListAllDecks().then((decks) =>                this.setState({decks})            );        });    };    componentWillUnmount() {        this.willFocusSubscription.remove();    };    render() {        const {decks} = this.state;        return (            <ScrollView style={css.container}>                {Object.keys(decks).map(title => (                    <DeckItem                        key={title}                        deck={decks[title]}                        onPress={this.pressNavigation}                    />                ))}            </ScrollView>        )    }}ListDeck.propTypes = propTypes;const css = StyleSheet.create({    container: {        flex: 1,        paddingTop: 33    },});export default ListDeck;
import PropType from 'prop-types';import React, {Component} from 'react';import {    Alert,    KeyboardAvoidingView,    StyleSheet,    Text,    TextInput,    TouchableOpacity} from 'react-native';import {saveDeck} from "../utils/api";import Ionicons from "react-native-vector-icons/Ionicons";const propTypes = {    navigation: PropType.object.isRequired,};class NewDeck extends Component {    state = {        title: ''    };    onPressSaveDeck = () => {        const {title} = this.state;        const {navigate} = this.props.navigation;        if (title === '') {            Alert.alert('⛔ O preenchimento do campo Titulo é obrigatório!');            return        }        saveDeck(title).then(() =>            Alert.alert(                '✅ Baralho adicionado com sucesso!',                undefined,                [                    {                        text: 'OK', onPress: () => {                            navigate('ListDeck');                            navigate('ViewDeck', { deck: { title, questions: [] } });                            this.setState({ title: '' });                        }                    },                ],                { cancelable: false }            )        );    };    render() {        const {title} = this.state;        return (            <KeyboardAvoidingView behavior="padding" style={css.container}>                <Text style={{ fontSize: 25 }}>Título</Text>                <TextInput                    style={css.input}                    value={title}                    onChangeText={title => this.setState({ title })}                />                <TouchableOpacity style={css.btn} onPress={this.onPressSaveDeck}>                    <Text style={css.btnName}><Ionicons name="ios-add-circle" size={25} color={'#FFF'} /> Salvar Baralho </Text>                </TouchableOpacity>            </KeyboardAvoidingView>        );    }}NewDeck.propTypes = propTypes;const css = StyleSheet.create({    container: {        flex: 1,        padding: 30,    },    input: {        alignSelf: 'center',        paddingTop: 20,        paddingBottom: 20,        fontSize: 25,        width: 380,        borderColor: 'red',        borderWidth: 1,        backgroundColor: '#FFF',        color: '#222'    },    btn: {        marginTop: 20,        marginBottom: 20,        padding: 0,        width: 380,        height: 60,        alignSelf: 'center',        justifyContent: 'center',        alignItems: 'center',        backgroundColor: 'red',        borderWidth: 1,        borderColor: '#FFF'    },    btnName: {        color: 'white',        fontSize: 20,        textAlign: 'center',    }});export default NewDeck;
import PropType from 'prop-types';import React, {Component} from 'react';import {    Alert,    StyleSheet,    Text,    TextInput,    TouchableOpacity,    View} from 'react-native';import {addCardOnDeck} from "../utils/api";const propTypes = {    navigation: PropType.object.isRequired,};class NewCard extends Component {    state = {        question: '',        answer: ''    };    onPressSaveCard = () => {        const {question, answer} = this.state;        const {title} = this.props.navigation.state.params;        if (question === '') {            Alert.alert('⛔ O preenchimento do campo Pergunta é obrigatório!');            return        }        if (answer === '') {            Alert.alert('⛔ O preenchimento do campo Resposta é obrigatório!');            return        }        addCardOnDeck(title, {            question,            answer        }).then(() =>            Alert.alert(                '✅ Pergunta adicionada com sucesso!',                undefined,                [                    {                        text: 'OK', onPress: () => {                            this.props.navigation.goBack()                        }                    },                ],                { cancelable: false }            )        );    };    render() {        const {question, answer} = this.state;        return (            <View style={css.container}>                <Text style={{fontSize: 25, alignSelf:'center'}}>Pergunta</Text>                <TextInput                    style={css.input}                    value={question}                    onChangeText={question => this.setState({question})}                />                <Text style={{fontSize: 25, alignSelf:'center'}}>Resposta</Text>                <TextInput                    style={css.input}                    value={answer}                    onChangeText={answer => this.setState({answer})}                />                <TouchableOpacity style={css.btn} onPress={this.onPressSaveCard}>                    <Text style={css.btnName}>Salvar</Text>                </TouchableOpacity>            </View>        );    }}NewCard.propTypes = propTypes;const css = StyleSheet.create({    container: {        flex: 1,        padding: 30,    },    input: {        alignSelf: 'center',        paddingTop: 20,        paddingBottom: 20,        fontSize: 25,        width: 380,        borderColor: 'red',        borderWidth: 1,        backgroundColor: '#FFF',        color: '#222'    },    btn: {        marginTop: 20,        marginBottom: 20,        padding: 0,        width: 380,        height: 60,        alignSelf: 'center',        justifyContent: 'center',        alignItems: 'center',        backgroundColor: 'red',        borderWidth: 1,        borderColor: '#FFF'    },    btnName: {        color: 'white',        fontSize: 20,        textAlign: 'center',    }});export default NewCard;
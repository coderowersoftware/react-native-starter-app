/**
 * Created by garima.kaila on 2017-04-14.
 */


import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    StyleSheet
}  from 'react-native';

var FormControl = require('../../components/layout/FormControl');
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "../buttons/Button";

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""

        }
    }

    componentWillReceiveProps(props) {

    }

    render() {
        let strLblUsername = "Username or Email";
        let strLblPassword = "Password";
        let strLblConfirmPassword = "Confirm Password";
        return (<View>
            <FormControl>
                <Text>{strLblUsername}</Text>
                <TextInput
                    autoFocus={true}
                    value={this.state.username}
                    onChangeText={username => this.setState({username})}
                    onSubmitEditing={()=>{
                            this.refs.password.focus();
                        }}
                    style={styles.textInput}
                />
            </FormControl>
            <FormControl>
                <Text>{strLblPassword}</Text>
                <TextInput
                    secureTextEntry={true}
                    ref="password"
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    onSubmitEditing={this._submitForm}
                    style={styles.textInput}
                />
            </FormControl>
            <FormControl>
                <Text>{strLblConfirmPassword}</Text>
                <TextInput
                    secureTextEntry={true}
                    ref="password"
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    onSubmitEditing={this._submitForm}
                    style={styles.textInput}
                />
            </FormControl>
            <FormControl>
                <Button
                    label="Sign Up"
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                    onPress={this._submitForm.bind(this)}>
                    <View style={styles.inline}>
                        <Icon name="user" size={30} color="#fff"/>
                        <Text style={styles.buttonWhiteText}> Create Account </Text>
                    </View>
                </Button>

            </FormControl>

        </View>);

    }

    _submitForm = () => {
        const {username, password} = this.state
        alert(username + " , " + password);
        // do some stuff here…
    };

}
const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: '#3B5699'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    inline: {
        flexDirection: 'row'
    }
});

module.exports = SignupForm;

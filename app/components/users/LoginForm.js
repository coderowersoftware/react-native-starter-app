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
import Store from '../../store/Store';
var {
    authenticate
} = require('../../actions/login-actions');


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            usernameIsInvalid: false,
            passwordIsInvalid: false,


        }
    }

    componentWillReceiveProps(props) {

    }

    render() {
        let strLblUsername = "Username or Email";
        let strLblPassword = "Password";
        return (<View>
            <FormControl>
                <Text style={[{color: this.state.usernameIsInvalid?"red":"black"}]}>{strLblUsername}</Text>
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
                <Text style={[{color: this.state.passwordIsInvalid?"red":"black"}]}>{strLblPassword}</Text>
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
                    label="Sign In"
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                    onPress={this._submitForm.bind(this)}>
                    <View style={styles.inline}>
                        <Icon name="sign-in" size={30} color="#fff"/>
                        <Text style={styles.buttonWhiteText}> Login </Text>
                    </View>
                </Button>

            </FormControl>

        </View>);

    }

    _submitForm = () => {
        const {username, password} = this.state;

        if (!this._validateUsernameField() && !this._validatePasswordField()) {
            Store.dispatch(authenticate(username, password));
        }
    };
    _validatePasswordField = () => {
        let isInValid = this.state.password.trim().length < 1;
        this.setState({passwordIsInvalid: isInValid});
        return isInValid;
    };
    _validateUsernameField = () => {
        if (!this._validateEmail(this.state.username)) {
            // not a valid email
            this.setState({usernameIsInvalid: true});
            return true;
        } else {
            this.setState({usernameIsInvalid: false});
            return false;
        }
    };
    _validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
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

module.exports = LoginForm;

/**
 * Created by garima.kaila on 2017-04-16.
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import GoogleSignIn from 'react-native-google-sign-in';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from './Button';

import Store from '../../store/Store';
var {
    loginSuccess
} = require('../../actions/login-actions');


const CLIENT_ID = '141822293497-ldn829khpl2qlmtek7qq3ckalm4u8gmg.apps.googleusercontent.com';
class GoogleSignInButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {}
        };
    }

    componentDidMount() {
        Store.subscribe(() => {
            this.setState({
                userDetails: Store.getState().login.userDetails
            });
        });
    }

    render() {

        if (this.state.userDetails.id && this.state.userDetails.id.length > 0) {
            let image = this.state.userDetails.image;
            let name = this.state.userDetails.name + " (" + this.state.userDetails.email + ")";
            return (<View>
                <Text>
                   Already logged in as
                </Text>
                {/* <Image
                 style={{width: 50, height: 50}}
                 source={{uri: image}}
                 />*/}
                <Text>
                    {name}
                </Text>
            </View>)
        } else {
            return (<View>
                <Button
                    styles={{button: styles.transparentButton}}
                    onPress={this._press.bind(this)}
                >
                    <View style={styles.inline}>
                        <Icon name="google-plus" size={30} color="#3B5699"/>
                        <Text style={[styles.buttonBlueText, styles.buttonBigText]}> Connect </Text>
                        <Text style={styles.buttonBlueText}>with Google+</Text>
                    </View>
                </Button>
            </View>)
        }

    }

    _press = async() => {
        await GoogleSignIn.configure({
            clientID: CLIENT_ID,
            scopes: ['openid', 'email', 'profile'],
            shouldFetchBasicProfile: true,
        });

        const user = await GoogleSignIn.signInPromise();
        setTimeout(() => {
            let userInfo = {provider:"google",id: user.userID, email: user.email, name: user.name, image: user.photoUrlTiny}
            Store.dispatch(loginSuccess(userInfo));
        }, 1500);
    }
}
const styles = StyleSheet.create({
    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    }
});

module.exports = GoogleSignInButton;
/**
 * Created by garima.kaila on 2017-04-16.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from './Button';

import Store from '../../store/Store';
var {
    loginSuccess
} = require('../../actions/login-actions');


const CLIENT_ID = '631502754148-qooj2e4ljac1u9qpi5bm4n14fbgtorji.apps.googleusercontent.com';
class GoogleSignInButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {}
        };
    }

    componentDidMount() {
        this._setupGoogleSignin()
        Store.subscribe(() => {
            this.setState({
                userDetails: Store.getState().login.userDetails
            });
            //alert(JSON.stringify(Store.getState().login.userDetails, null, '  '));
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
{/*                <TouchableHighlight onPress={async () => {
          await GoogleSignIn.configure({
            clientID: CLIENT_ID,
            scopes: ['openid', 'email', 'profile'],
            shouldFetchBasicProfile: true,
          });

          const user = await GoogleSignIn.signInPromise();
          setTimeout(() => {
              let userInfo = {id:user.userID,email:user.email,name:user.name,image:user.photoUrlTiny}
               Store.dispatch(loginSuccess(userInfo));
            alert(JSON.stringify(userInfo, null, '  '));
          }, 1500);
        }}>

                    <View style={styles.inline}>
                        <Icon name="google-plus" size={30} color="#3B5699"/>
                        <Text style={styles.loginButton}>Google Sign-In </Text>
                    </View>

                </TouchableHighlight>*/}
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

    async _setupGoogleSignin() {
        try {
            await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                iosClientId:'631502754148-qooj2e4ljac1u9qpi5bm4n14fbgtorji.apps.googleusercontent.com',
                webClientId:'631502754148-qooj2e4ljac1u9qpi5bm4n14fbgtorji.apps.googleusercontent.com',
                offlineAccess: true
            });

            const user = await GoogleSignin.currentUserAsync();
            console.log(user);
            this.setState({user});
        }
        catch(err) {
            console.log("Play services error", err.code, err.message);
        }
    }

    _signIn() {
        console.log('clicked');
        GoogleSignin.signIn()
            .then((user) => {
                console.log(user);
                let userInfo = {provider:"google",id: user.userID, email: user.email, name: user.name, image: user.photoUrlTiny}
                Store.dispatch(loginSuccess(userInfo));
                alert(JSON.stringify(userInfo, null, '  '));
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();
    }

    _press = async() => {
        this._signIn()
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
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

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';


import Store from '../../store/Store';
var {
    loginSuccess
} = require('../../actions/login-actions');
import Button from './Button';
import Icon from 'react-native-vector-icons/FontAwesome';

class FacebookSignInButton extends React.Component {
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

            //   alert("hello " + JSON.stringify(Store.getState().login.userDetails, null, '  '));
        });
    }

    render() {
        var _this = this;
        if (this.state.userDetails.id && this.state.userDetails.id.length > 0) {
            let image = this.state.userDetails.image;
            let name = this.state.userDetails.name + " (" + this.state.userDetails.email + ")";
            return (<View>
                <Text>
                    Welcome!!
                </Text>
                {/* <Image
                 style={{width: 50, height: 50}}
                 source={{uri: image}}
                 />*/}
                <Text>
                    {name}
                </Text>
            </View>);
        } else {
            let button = (
                <View style={styles.inline}>
                    <Icon name="facebook-official" size={30} color="#3B5699"/>
                    <Text style={[styles.buttonBlueText, styles.buttonBigText]}> Connect </Text>
                    <Text style={styles.buttonBlueText}>with Facebook</Text>
                </View>
            )
            return (
                <FBLogin
                    buttonView={button }
                    onClickColor="#ccc"
                    containerStyle={styles.transparentButton}
                    ref={(fbLogin) => { this.fbLogin = fbLogin }}
                    loginBehavior={FBLoginManager.LoginBehaviors.Native}
                    permissions={["email","user_friends"]}
                    onLogin={function(user){
                    console.log(user);
                     setTimeout(() => {
                            let userInfo = {provider:"facebook",id:user.credentials.userId,email:user.profile.email,name:user.profile.name,image:user.profile.picture.data.url}
                            Store.dispatch(loginSuccess(userInfo));
                    },1500);
                 //   alert(JSON.stringify(userInfo, null, '  '));
                }}
                    onLoginFound={function(e){console.log(e)}}
                    onError={function(e){console.log(e)}}
                    onLoginNotFound={function(e){console.log(e)}}
                    onLogout={function(e){console.log(e)}}
                    onCancel={function(e){console.log(e)}}
                    onPermissionsMissing={function(e){console.log(e)}}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    transparentButton: {
        marginTop: 10,
        borderColor: '#3B5699',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
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

module.exports = FacebookSignInButton;
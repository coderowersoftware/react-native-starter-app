/**
 * Created by garima.kaila on 2017-04-21.
 */

import React, {Component} from 'react';
import {
    Button,
    View,
    StyleSheet
}  from 'react-native';

import {
    NavigationActions
} from 'react-navigation';

var SignupForm = require('../../components/users/SignupForm');

var GoogleSignInButton = require('../../components/buttons/GoogleSignInButton');
var FacebookSignInButton = require('../../components/buttons/FacebookSignInButton');

var Container = require('../../components/layout/Container');


var Footer = require('../../components/layout/Footer');
var FormControl = require('../../components/layout/FormControl');

class SignUpScreen extends React.Component {
    static navigationOptions = {
        title: 'User Sign Up',
        tabBarLabel: 'Sign Up',
        headerVisible:false
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        /* tabBarIcon: ({ tintColor }) => (
         <Image
         source={require('./chats-icon.png')}
         style={[styles.icon, {tintColor: tintColor}]}
         />
         ),*/
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Container>
                    <FormControl>
                        <Button
                            onPress={() => this.props.navigation.navigate('Login')}
                            title="Already have account"
                        />
                    </FormControl>
                    <SignupForm></SignupForm>
                    {/*<FormControl>
                        <Button
                            onPress={() => this.props.navigation.navigate('SignUp')}
                            title="Sign Up!"
                        />
                    </FormControl>*/}
                </Container>
                <Footer></Footer>
            </View>
        );
    }

/*    render() {
        return (
            <View>

                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                    title="Already have account"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Movies', { user: 'Lucy' })}
                    title="Chat with Lucy"
                />
            </View>


        );
    }*/
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
module.exports = SignUpScreen;
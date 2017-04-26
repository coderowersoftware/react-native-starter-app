/**
 * Created by garima.kaila on 2017-04-21.
 */

import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    View
}  from 'react-native';

var LoginForm = require('../../components/users/LoginForm');

var GoogleSignInButton = require('../../components/buttons/GoogleSignInButton');
var FacebookSignInButton = require('../../components/buttons/FacebookSignInButton');

var Container = require('../../components/layout/Container');


var Footer = require('../../components/layout/Footer');
var FormControl = require('../../components/layout/FormControl');

import {
    NavigationActions
} from 'react-navigation';

import Store from '../../store/Store';
class LoginScreen extends React.Component {

    componentDidMount() {
        Store.subscribe(() => {
            if (Store.getState() &&
                Store.getState().login &&
                Store.getState().login.userDetails &&
                Store.getState().login.userDetails.id > 0) {

                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'Movies'})
                    ]
                });
                this.props.navigation.dispatch(resetAction);
            }
        });
    }

    static navigationOptions = {
        title: 'User Login',
        tabBarLabel: 'Log in',
        headerVisible: false
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Container>
                    <LoginForm></LoginForm>
                    <FormControl>
                        <GoogleSignInButton></GoogleSignInButton>
                    </FormControl>
                    <FormControl>
                        <FacebookSignInButton></FacebookSignInButton>
                    </FormControl>
                    <FormControl>
                        <Button
                            onPress={() => this.props.navigation.navigate('SignUp')}
                            title="Not joined yet? Sign Up!"
                        />
                    </FormControl>
                </Container>
                <Footer></Footer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
module.exports = LoginScreen;
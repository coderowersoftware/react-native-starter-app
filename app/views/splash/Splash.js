/**
 * Created by garima.kaila on 2017-04-21.
 */

import React, { Component } from 'react';
import {
    View,
    Text
}  from 'react-native';

import {
    NavigationActions
} from 'react-navigation';

class SplashScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerVisible:false
    };

    render() {
        const { navigate } = this.props.navigation;
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'LoginNavigator'})
            ]
        });
        setTimeout(() => {this.props.navigation.dispatch(resetAction);}, 10);
        return (
            <View>
                <Text>Hello, Chat App!</Text>
            </View>
        );
    }
}
module.exports = SplashScreen;


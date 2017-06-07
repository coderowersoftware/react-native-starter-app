/**
 * Created by garima.kaila on 2017-04-21.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Button
}  from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';

import MoviesList from "./views/movies/MoviesList";
import SplashScreen from "./views/splash/Splash";
import LoginScreen from "./views/users/Login";
import SignUpScreen from "./views/users/SignUp";
import AboutScreen from "./views/about/About";
import BarcodeScanner from "./views/scanner/ScanScreen";
import Notification from "./views/notification/Firebase";
import Storage from "./views/storage/StorageView";
import Speak from "./views/speak/Speak";

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const LoginNavigator = TabNavigator({
    Login: {
        screen: LoginScreen,
    },
    SignUp: {
        screen: SignUpScreen,
    },
}, {
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});

const App = StackNavigator({
    //Splash: {screen: SplashScreen},
    LoginNavigator: {screen: LoginNavigator},
    Movies: {screen: MoviesList}
});

const ReactNativeStarterApp = DrawerNavigator({
    Home: {screen: App},
    About: {screen: AboutScreen},
    Scanner: {screen: BarcodeScanner},
    Notification: {screen: Notification},
    Storage: {screen: Storage},
    Speak: {screen: Speak}
})


module.exports = ReactNativeStarterApp;


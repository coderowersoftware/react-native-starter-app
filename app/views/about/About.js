/**
 * Created by garima.kaila on 2017-04-21.
 */
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';
let tracker = new GoogleAnalyticsTracker('UA-100119564-1');

import React, {Component} from 'react';
import {
    Text,
    StyleSheet
}  from 'react-native';

import {
    NavigationActions
} from 'react-navigation';

class AboutScreen extends React.Component {

    static navigationOptions = {
        title: 'About',
    };

    render() {
		tracker.trackScreenView('About');
        return (
            <Text>About</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
module.exports = AboutScreen;
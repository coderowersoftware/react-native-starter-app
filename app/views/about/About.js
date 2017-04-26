/**
 * Created by garima.kaila on 2017-04-21.
 */

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
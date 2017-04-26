/**
 * Created by garima.kaila on 2017-04-14.
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet
}  from 'react-native';

class FormControl extends React.Component {
    render() {
        return (
            <View style={styles.labelContainer}>
                { this.props.children }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    labelContainer: {
        marginBottom: 10
    }
});
module.exports = FormControl;
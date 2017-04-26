/**
 * Created by garima.kaila on 2017-04-14.
 */

//var React = require('react-native');
import React, { Component } from 'react';
import {
    View
}  from 'react-native';

class Container extends React.Component {

    render() {
        return (
            <View style={{padding: 15, flex: 1}} >
                {this.props.children}
            </View>
        );
    }

}

module.exports = Container;
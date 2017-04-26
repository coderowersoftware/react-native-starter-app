/**
 * Created by garima.kaila on 2017-04-14.
 */

import React, { Component } from 'react';
import {
    TextInput
}  from 'react-native';



class SearchInput extends React.Component {

    render() {
        return (
            <TextInput
                placeholder="Search"
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10}}
                onChangeText={this.props.onChangeText} />
        );
    }

}

module.exports = SearchInput;
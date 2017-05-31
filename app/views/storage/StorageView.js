/**
 * Created by garima.kaila on 2017-05-31.
 */


import React, {Component} from 'react';
import {
    AsyncStorage,
    TouchableHighlight,
    View,
    Text
}  from 'react-native';

import {
    NavigationActions
} from 'react-navigation';
var STORAGE_KEY = "@counter";
var self;
class StorageView extends React.Component {
    async getCache(key) {
        try {
            let value = await AsyncStorage.getItem(key);
            return value;
        }
        catch (e) {
            console.log('caught error', e);
            // Handle exceptions
        }
    }


    constructor(props) {
        super(props);
        self = this;
        self.getCache(STORAGE_KEY).then((val) => {

            if (val !== null) {
                value = val;
                self.setState({
                    data: value
                });
            }
        });

        this.state = {
            data: 0
        };
    }

    onPress() {
        let value = 0;
        self.getCache(STORAGE_KEY).then((val) => {

            if (val !== null) {
                value = val;
                self.setState({
                    data: value
                });
            }
            value = value +1;
            AsyncStorage.setItem(STORAGE_KEY,value.toString() );
        });
    }

    render() {
        return (
            <View >
                <View>
                    <Text>{this.state.data}</Text>
                    <TouchableHighlight
                        underlayColor="#ccc"
                        onPress={this.onPress}
                    >
                        <Text>Update Counter</Text>

                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
module.exports = StorageView;
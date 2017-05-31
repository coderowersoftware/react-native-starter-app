/**
 * Created by garima.kaila on 2017-05-31.
 */


import React, {Component} from 'react';
import {
    AsyncStorage,
    View,
    Text
}  from 'react-native';

import {
    NavigationActions
} from 'react-navigation';
var STORAGE_KEY = "@setting";
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

    async setCache(key, value) {
        try {
            let value = AsyncStorage.setItem(key, value);
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
        let value = "";
        this.getCache(STORAGE_KEY).then((val) => {
            value = val;
            if (value !== null) {
                value = "from storage" + value;
                this.setState({
                    data: value
                });
            } else {
                AsyncStorage.setItem(STORAGE_KEY, "Hello storage");


            }
        });


        this.state = {
            data: value
        };
    }

    render() {
        return (
            <View >
                <View>
                    <Text>{this.state.data}</Text>
                </View>
            </View>
        );
    }
}
module.exports = StorageView;
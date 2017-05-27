'use strict';

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Permissions from 'react-native-permissions'
var self = null

class ScanScreen extends React.Component {

    constructor(props) {
        super(props);
        self = this
        this.state = {
            data: ''
        };
    }
    barcodeReceived(e) {
        self.setState({
            data: e.data
        })
        console.log('Barcode: ' + e.data);
        console.log('Type: ' + e.type);
    }
    componentDidMount() {
        this._requestPermission()
    }

    _requestPermission() {
        Permissions.requestPermission('camera')
            .then(response => {
                //returns once the user has chosen to 'allow' or to 'not allow' access
                //response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
                this.setState({photoPermission: response})
            });
    }

    render() {
        return (
        <View style={styles.container}>
            <QRCodeScanner style={{flex:1}} onRead={this.barcodeReceived.bind(this)}/>
            <View style={styles.statusBar}>
                <Text style={styles.statusBarText}>{this.state.data}</Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBarText: {
        fontSize: 20,
    },
});

module.exports = ScanScreen;
/*
/!**
 * Created by garima.kaila on 2017-04-14.
 *!/

import React, { Component } from 'react';

import {
    Text
}  from 'react-native';



var style = {
    ios: {
        background: 'blue',
        color: 'white',
        padding: 10,
        cursor: 'pointer'
    }
};

class Button extends React.Component {

    render() {
        return <Text style={style.ios} onPress={this.props.onPress}>{this.props.children}</Text>
    }

}

module.exports = Button;*/

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

const Button = (props) => {

    function getContent(){
        if(props.children){
            return props.children;
        }
        return <Text style={props.styles.label}>{props.label}</Text>
    }

    return (
        <TouchableHighlight
            underlayColor="#ccc"
            onPress={props.onPress}
            style={[
				props.noDefaultStyles ? '' : styles.button,
				props.styles ? props.styles.button : '']}
        >
            { getContent() }
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
});

export default Button;
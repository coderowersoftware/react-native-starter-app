/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Image,
    Button,
    Animated,
    ScrollView,
    ToolbarAndroid,
    View
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';
var Container = require('./app/components/layout/Container');
//var Button = require('./app/components/buttons/Button');
var Footer = require('./app/components/layout/Footer');

var MoviesList = require('./app/views/movies/MoviesList');

var GoogleSignInButton = require('./app/components/buttons/GoogleSignInButton');
var FacebookSignInButton = require('./app/components/buttons/FacebookSignInButton');

import Icon from 'react-native-vector-icons/FontAwesome';

import StarterApp from "./app/App"

import Store from './app/store/Store';
/*

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#9999ff',
        height: 56,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'blue'
    },
    container: {
        flex: 1,
        paddingTop: 65,
        backgroundColor: 'steelblue'

    },
});


export default class StarterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {}
        };
    }

    componentDidMount() {
        Store.subscribe(() => {
            this.setState({
                userDetails: Store.getState().login.userDetails
            });

            //   alert("hello " + JSON.stringify(Store.getState().login.userDetails, null, '  '));
        });
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <ToolbarAndroid
                    title='Starter App'
                    style={styles.toolbar}
                    actions={[{title: (this.state.userDetails.id && this.state.userDetails.id.length > 0)?"Welcome "+this.state.userDetails.name + " (" + this.state.userDetails.email + ")":"", show: 'always'}]}
                    onActionSelected={this.onActionSelected}/>
                <Container>
                    <GoogleSignInButton></GoogleSignInButton>
                    <FacebookSignInButton></FacebookSignInButton>
                    <MoviesList></MoviesList>
                </Container>
                <Footer></Footer>
            </View>
        );
    }

}
*/

/*

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
        <Icon name="rocket" size={30} color="#900" />/!* <Image
                source={require('./app/notif-icon.png')}
                style={[styles.tabIcon, {tintColor: tintColor}]}
            />*!/
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const StarterApp = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});
*/

AppRegistry.registerComponent('StarterApp', () => StarterApp);

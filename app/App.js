/**
 * Created by garima.kaila on 2017-04-21.
 */


import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';

import MoviesList from "./views/movies/MoviesList";
import SplashScreen from "./views/splash/Splash";
import LoginScreen from "./views/users/Login";
import SignUpScreen from "./views/users/SignUp";
import AboutScreen from "./views/about/About";


const LoginNavigator = TabNavigator({
    Login: {
        screen: LoginScreen,
    },
    SignUp: {
        screen: SignUpScreen,
    },
}, {
    tabBarOptions: {
        activeTintColor: '#e91e63',
    }
});

const App = StackNavigator({
    //Splash: {screen: SplashScreen},
    LoginNavigator: {screen: LoginNavigator},
    Movies: {screen: MoviesList}
});

const StarterApp = DrawerNavigator({
    Home: {screen: App},
    About: {screen: AboutScreen}
})


module.exports = StarterApp;


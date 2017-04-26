/**
 * Created by garima.kaila on 2017-04-16.
 */

import Store from '../../store/Store';
var Movies = require('../../components/movies/Movies');
var SearchInput = require('../../components/SearchInput');

var {
    fetchMovies
} = require('../../actions/movies-actions');

import React, {Component} from 'react';
import {
    View,
}  from 'react-native';
var Footer = require('../../components/layout/Footer');

class MoviesList extends React.Component {
    static navigationOptions = {
        title: 'Movies',
    };
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    onChangeText(text) {
        if (text.length >= 2) {
            Store.dispatch(fetchMovies(text));
        } else {
            this.setState({
                movies: []
            });
        }
    }

    componentDidMount() {
        Store.subscribe(() => {
            this.setState({
                movies: Store.getState().movies.items
            });
        });
    }

    onActionSelected() {

    }

    render() {
        return (
            <View>
                <SearchInput onChangeText={this.onChangeText.bind(this)}/>
                <Movies movies={this.state.movies}/>
            </View>
        );
    }

}

module.exports = MoviesList;
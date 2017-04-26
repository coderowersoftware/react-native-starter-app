/**
 * Created by garima.kaila on 2017-04-14.
 */


import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text
}  from 'react-native';

var MovieItem = require('./MovieItem');


class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentWillReceiveProps(props) {
        console.log('props', props)
        this.setState({
            movies: props.movies
        });
    }

    render() {
        console.log('this.state', this.state)
        movies =  (<View><Text>No Movie Found</Text></View>);
        if(this.state.movies.length>0) {
            movies =  this.state.movies.map((movie, index) => {

                return (<MovieItem title={movie.Title} year={movie.Year} poster={movie.Poster} type={movie.Type}
                                   key={index}/>);
            });
        }
        return (
            <ScrollView>
                {movies}
            </ScrollView>
        );
    }

}

module.exports = Movies;

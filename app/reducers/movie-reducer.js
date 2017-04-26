/**
 * Created by garima.kaila on 2017-04-14.
 */

var {
    FETCH_MOVIES,
    RECEIVE_MOVIES
} = require('../actions/types');



const initialState = {
    items: []

};

const movieReducer = function (state = initialState, action) {
    switch (action.type) {

        case RECEIVE_MOVIES: {
            console.log('INSIDE REDUCER', action.movies)
            return Object.assign({}, state, {
                items: action.movies
            });

        }
    }
    return state;
}
export default movieReducer ;

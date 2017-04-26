/**
 * Created by garima.kaila on 2017-04-14.
 */

var {
    LOGIN,
    AUTHENTICATE
} = require('../actions/types');
const initialState = {
    userDetails: {
        id: "",
        email: "",
        name: "",
        image: "",
        provider: ""
    }

};

const loginReducer = function (state = initialState, action) {
    switch (action.type) {

        case LOGIN: {
            console.log('INSIDE Login REDUCER', action.userDetails)
            return Object.assign({}, state, {
                userDetails: action.userDetails
            });
            break;
        }

    }
    return state;
}
export default loginReducer ;

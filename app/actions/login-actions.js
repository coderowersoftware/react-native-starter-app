/**
 * Created by garima.kaila on 2017-04-14.
 */
var {
    LOGIN,
    AUTHENTICATE
} = require('./types');
import {API_URL} from "../GLOBAL";

var reducers = {

    authenticate: function (username, password) {
        console.log('INSIDE Login REDUCER', username, password);
        return (dispatch) => fetch(API_URL + '/auth/sign_in', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password: password,
            })
        }).then((response) => {
            alert("Unable to Authenticaate :"+response.status);
        }).catch((error) => {
            console.error(error);
        });


    },
    loginSuccess: function (userDetails) {
        return {
            type: LOGIN,
            userDetails
        };
    }


};

module.exports = reducers;
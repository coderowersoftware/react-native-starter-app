/**
 * Created by garima.kaila on 2017-04-21.
 */
import {GoogleAnalyticsTracker} from 'react-native-google-analytics-bridge';
let tracker = new GoogleAnalyticsTracker('UA-100119564-1');

import SpeechAndroid from 'react-native-android-voice';


import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    ToastAndroid,
    Button,
    View
}  from 'react-native';

import {
    NavigationActions
} from 'react-navigation';

var instructions = {
    on: {
        resemble: ["on", "onn", "switch on", "switchon", "switch onn", "switchonn", "turn on", "turnon", "turn onn", "turnonn",
            "चालू", "ऑन", "स्विच ऑन", "स्विचन", "स्विच ऑन", "स्विचनन", "ऑन ऑन", "टर्नोन", "ऑन ऑन", "टर्नॉन","जलाना","जलाओ"],
        action: "command",
        param: "lightsON"
    },
    wait: {resemble: ["then", "wait", "hold", "stop",
        "तब", "प्रतीक्षा","प्रतीक्षा करें", "पकड़", "रोको","रोकें","रुकिए", "रुक","रुको","रूक"],
        action: "wait",
        param: 5000},
    off: {
        resemble: ["of", "off", "switch of", "switchof", "switch off", "switchoff", "turn of", "turnof", "turn off", "turnoff",
            "ऑफ़", "ऑफ", "स्विच ऑफ़", "स्विचफ", "स्विच ऑफ़", "स्विचऑफ", "टर्न ऑफ", "टर्नऑफ", "टर्नऑफ़", "टर्नऑफ","बंद","बंद करें",
            "बुझाओ","बुझाओ","बजाओ","बाजाओ","बाजो" ,"बत्ती बुझाओ"],
        action: "command",
        param: "lightsOFF"
    }
};

var URL = 'http://192.168.43.144/';
class SpeakScreen extends React.Component {

    tokenizer(spokenText) {
        var tokens;
        if (spokenText.length > 0) {
            tokens = spokenText.split(" ");
        }
        return tokens;
    }

    recognizerAndLogicalComander(tokens) {
        var waitEncountered;
        tokens.forEach((token) => {
            for (var instruction in instructions) {
                var inst = instructions[instruction];
                if ((inst.resemble).indexOf(token) > -1) {
                    if (inst.action == "command") {
                        if (waitEncountered) {
                            setTimeout(() => {
                                fetch(URL + inst.param);
                            }, waitEncountered.param);
                            waitEncountered = undefined;
                        } else {
                            fetch(URL + inst.param);
                        }
                    }
                    if (inst.action == "wait") {
                        waitEncountered = inst;
                    }
                }
            }
        });
    }

    async _buttonClick(lang) {
        try {
            //More Locales will be available upon release.
            var spokenText = await SpeechAndroid.startSpeech("Hello, How can I help you?", lang);

            var tokens = this.tokenizer(spokenText);
            // recognitions
            if (tokens.length > 0) {
                this.recognizerAndLogicalComander(tokens);
            }
            ToastAndroid.show("Instructions received: " + spokenText, ToastAndroid.LONG);
        } catch (error) {
            switch (error) {
                case SpeechAndroid.E_VOICE_CANCELLED:
                    ToastAndroid.show("Voice Recognizer cancelled", ToastAndroid.LONG);
                    break;
                case SpeechAndroid.E_NO_MATCH:
                    ToastAndroid.show("No match for what you said", ToastAndroid.LONG);
                    break;
                case SpeechAndroid.E_SERVER_ERROR:
                    ToastAndroid.show("Google Server Error", ToastAndroid.LONG);
                    break;
            }
        }
    }

    static navigationOptions = {
        title: 'Speak',
    };

    render() {
        tracker.trackScreenView('Speak');
        return (
            <View>
                <Text>Speak your wish!!</Text>
                <Button
                    onPress={() => this._buttonClick(SpeechAndroid.ENGLISH)}
                    title="English"
                />
                <Text>.</Text>

                <Button
                    onPress={() => this._buttonClick(SpeechAndroid.HINDI)}
                    title="हिंदी में"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});
module.exports = SpeakScreen;
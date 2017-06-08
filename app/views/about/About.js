/**
 * Created by garima.kaila on 2017-04-21.
 */
import {GoogleAnalyticsTracker} from 'react-native-google-analytics-bridge';
let tracker = new GoogleAnalyticsTracker('UA-100119564-1');

import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Image
}  from 'react-native';

import {
    NavigationActions
} from 'react-navigation';

class AboutScreen extends React.Component {

    static navigationOptions = {
        title: 'About',
    };


    render() {
        tracker.trackScreenView('About');
        return (
            <View>

                <Image source={require('./img/logo.png')}/>

                <Text><Text style={styles.titleText}>E-mail :</Text> <Text style={styles.text}>info@coderower.com</Text></Text>
                <Text><Text style={styles.titleText}>Phone:</Text> <Text
                    style={styles.text}>+91-9711141179</Text></Text>
                <Text><Text style={styles.titleText}>Visit:</Text> <Text
                    style={styles.text}>www.coderower.com</Text></Text>

                <Text style={styles.titleText}>About Us</Text>
                <Text></Text>
                <ScrollView automaticallyAdjustContentInsets={false}
                            horizontal={false}
                            scrollEnabled={true}
                            contentContainerStyle={{height: 700}}
                >
                    <Text>
                        Everything we do, we believe in breaking the boundaries so that we and our customers can achieve
                        new
                        heights of success in the business.
                    </Text>
                    <Text> Our team of brightest minds understand, think ahead and act in a very smart way to identify
                        and
                        break the boundaries and limitations of the business by providing best solutions, applications
                        and
                        software specifically designed for you and your business needs.
                    </Text>
                    <Text>
                        We believe a happy employee will take care of our customer and make them happy.
                        Our goal is to provide an environment where our brightest minds can enjoy their work, feel the
                        work
                        they are doing for you.
                    </Text>
                    <Text> We are the enthusiastic young people who believe in challenges and we are guided by very
                        experienced mentors & leaders. This makes us AwSoMeS at our work to cross the boundaries which
                        takes our customers to new heights of success.
                    </Text>
                    <Text>
                        We have experts that know your industry and understand your business prospective.
                    </Text>
                    <Text> We know the technology that suits your business requirements.</Text>
                    <Text> We are AGILE and work with you build applications that boost your business and add values to
                        it.</Text>
                    <Text>
                        We specializes in building complex, business-critical software for companies across multiple
                        industries.</Text>
                    <Text>
                        We have well designed in-house developed products that are customizable for your business needs
                    </Text>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 20

    }
});
module.exports = AboutScreen;
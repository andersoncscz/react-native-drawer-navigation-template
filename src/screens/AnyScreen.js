/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { headerText, contentText, instructions } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> { headerText } </Text>
                <Text style={styles.instructions}> { contentText } </Text>
                <Text style={styles.instructions}> { instructions } </Text>
                <ActionButton 
                    buttonColor="#03A9F4"
                    fixNativeFeedbackRadius={true}>
                    <ActionButton.Item buttonColor='#536DFE' title="Share with Friends" onPress={() => console.log("Share tapped!")} >
                        <Icon solid name="share-alt" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#F44336' title="Open Mail" onPress={() => {}}>
                        <Icon solid name="envelope" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#7B1FA2' title="Liked Items" onPress={() => {}}>
                        <Icon solid name="heart" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },    

});

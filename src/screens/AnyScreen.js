import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, DatePickerAndroid, Platform } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomStatusBar from '../components/CustomStatusBar';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    openDatePicker = async () => {
        try {
            //DatePickerAndroid.mode='calendar';
            const {action, year, month, day} = await DatePickerAndroid.open({
              date: new Date(2019, 1, 15),
              mode:'default'
            });
            if (action !== DatePickerAndroid.dismissedAction) {
              // Selected year, month (0-11), day
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }        
    }

    render() {

        const { headerText } = this.props.navigation.state.params;

        return (
            <View style={styles.mainContainer}>
                <CustomStatusBar />
                <SafeAreaView style={styles.container}>
                    <Text style={styles.welcome}> { headerText } </Text>
                    <Text style={styles.instructions}> {'... some content here ...'} </Text>
                    <Text style={styles.instructions}> {'React is awesome :)'} </Text>
                    <ActionButton 
                        buttonColor="#03A9F4"
                        fixNativeFeedbackRadius={true}>
                        <ActionButton.Item buttonColor='#03A9F4' title="Share with Friends" onPress={() => alert("Share tapped!")} >
                            <Icon solid name="share-alt" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#03A9F4' title="Open Calendar" onPress={() => this.openDatePicker()}>
                            <Icon solid name="calendar" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#03A9F4' title="Liked Items" onPress={() => {}}>
                            <Icon solid name="heart" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                    </ActionButton>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,     
    },

    container: {
        flex: 1,
        justifyContent: 'center',
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
    }

});

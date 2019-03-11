import React from 'react';
import { StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from 'react-navigation';
import Ripple from 'react-native-material-ripple';

//Screens that will send to drawer navigator in RouterSettings.js
import AnyScreen from '../screens/AnyScreen';




//Each stack below can have its only settings, like icons, title, and callback functions for the icons on the header
export const HomeStack = createStackNavigator({
    Home: {
        screen: AnyScreen,
        params: { headerText: 'Home Screen!' },
        navigationOptions: ({ navigation }) => (stackNavigationConfig({
            onPressLeft: navigation.openDrawer,
            onPressRight: () => alert('Home options Tapped!'),
            headerTitle: 'Home Screen',
            leftIcon: 'bars',
            rightIcon: 'ellipsis-v'
        })),        
    }
})



export const MyAccountStack = createStackNavigator({
    MyAccount: {
        screen: AnyScreen,
        params: { headerText: 'MyAccount Screen!' },
        navigationOptions: ({ navigation }) => (stackNavigationConfig({
            onPressLeft: navigation.openDrawer,
            onPressRight: () => alert('MyAccount options Tapped!'),
            headerTitle: 'MyAccount Screen',
            leftIcon: 'bars',
            rightIcon: 'ellipsis-v'            
        })),        
    }
})


export const ChatStack = createStackNavigator({
    Chat: {
        screen: AnyScreen,
        params: { headerText: 'Chat Screen!' },
        navigationOptions: ({ navigation }) => (stackNavigationConfig({
            onPressLeft: navigation.openDrawer,
            onPressRight: () => alert('Chat options Tapped!'),
            headerTitle: 'Chat Screen',
            leftIcon: 'bars',
            rightIcon: 'ellipsis-v'    
        })),        
    }
})


export const ShoppingStack = createStackNavigator({
    Shopping: {
        screen: AnyScreen,
        params: { headerText: 'Shopping Screen!' },
        navigationOptions: ({ navigation }) => (stackNavigationConfig({
            onPressLeft: navigation.openDrawer,
            onPressRight: () => alert('Shopping options Tapped!'),
            headerTitle: 'Shopping Screen',
            leftIcon: 'bars',
            rightIcon: 'ellipsis-v'    
        })),        
    }
})


export const AnalyticsStack = createStackNavigator({
    Analytics: {
        screen: AnyScreen,
        params: { headerText: 'Analytics Screen!' },
        navigationOptions: ({ navigation }) => (stackNavigationConfig({
            onPressLeft: navigation.openDrawer,
            onPressRight: () => alert('Analytics options Tapped!'),
            headerTitle: 'Analytics Screen',
            leftIcon: 'bars',
            rightIcon: 'ellipsis-v'    
        })),        
    }
})


export const SettingsStack = createStackNavigator({
    Settings: {
        screen: AnyScreen,
        params: { headerText: 'Settings Screen!' },
        navigationOptions: ({ navigation }) => (stackNavigationConfig({
            onPressLeft: navigation.openDrawer,
            onPressRight: () => alert('Settings options Tapped!'),
            headerTitle: 'Settings Screen',
            leftIcon: 'bars',
            rightIcon: 'ellipsis-v'    
        })),        
    }
})


const StackHeaderButton = ({ onPress, iconName }) => {
    return (
        <Ripple 
            rippleColor={'#fff'}
            rippleContainerBorderRadius={100}
            style={{ justifyContent:'center', alignItems: 'center' }}
            onPress={onPress} >
            <Icon name={iconName} size={20} color={ '#fff' } style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 20, paddingRight: 20 } } />
        </Ripple>
    )
}


const stackNavigationConfig = ({ onPressLeft, onPressRight, headerTitle, leftIcon, rightIcon }) => {
    return {
        headerStyle: {
            backgroundColor: "#03A9F4",
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5',           
            marginTop: Platform.select({
                ios: 0,
                android: StatusBar.currentHeight
            })
        },
        headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
            textAlign: 'center',
            flex: 1                 
        },
        headerTintColor: "#fff",            
        title: headerTitle, // Title to appear in status bar
        headerLeft: leftIcon ? <StackHeaderButton onPress={onPressLeft} iconName={leftIcon} /> : null,
        headerRight: rightIcon ? <StackHeaderButton onPress={onPressRight} iconName={rightIcon} /> : null,
    }
}

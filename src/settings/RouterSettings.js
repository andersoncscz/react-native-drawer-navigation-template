import React from 'react';

import AnyScreen from '../screens/AnyScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default ROUTE_CONFIG = {

    Home: {
        screen: AnyScreen,
        params: { 
            headerText: 'Home Screen!',
            contentText: '...some content...',
            instructions: 'React is Awesome!!!',
        },
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            drawerIcon: ({ tintColor }) => (<Icon name="home" size={20} color={ tintColor } />)
        }),        
    },
    

    MyAccount: {
        screen: AnyScreen,
        params: { 
            headerText: 'My Account Screen!',
            contentText: '...some content...',
            instructions: 'React is Awesome!!!',
        },        
        navigationOptions: ({ navigation }) => ({
            title: 'My Account',
            drawerIcon: ({ tintColor }) => (<Icon solid name="user-circle" size={20} color={ tintColor } />)
        }),                
    },


    Chat: {
        screen: AnyScreen,
        params: { 
            headerText: 'Chat Screen!',
            contentText: '...some content...',
            instructions: 'React is Awesome!!!',
        },        
        navigationOptions: ({ navigation }) => ({
            title: 'Chat',
            drawerIcon: ({ tintColor }) => (<Icon solid name="comments" size={20} color={ tintColor } />)
        }),                
    },
    

    Shopping: {
        screen: AnyScreen,
        params: { 
            headerText: 'Shopping Screen!',
            contentText: '...some content...',
            instructions: 'React is Awesome!!!',
        },        
        navigationOptions: ({ navigation }) => ({
            title: 'Shopping',
            drawerIcon: ({ tintColor }) => (<Icon name="shopping-cart" size={20} color={ tintColor } />)
        }),                
    },


    Analytics: {
        screen: AnyScreen,
        params: { 
            headerText: 'Analytics Screen!',
            contentText: '...some content...',
            instructions: 'React is Awesome!!!',
        },        
        navigationOptions: ({ navigation }) => ({
            title: 'Analytics',
            drawerIcon: ({ tintColor }) => (<Icon name="chart-pie" size={20} color={ tintColor } />)
        }),                
    },


    Settings: {
        screen: AnyScreen,
        params: { 
            headerText: 'Settings Screen!',
            contentText: '...some content...',
            instructions: 'React is Awesome!!!',
        },        
        navigationOptions: ({ navigation }) => ({
            title: 'Settings',
            drawerIcon: ({ tintColor }) => (<Icon name="cog" size={20} color={ tintColor } />)
        }),                
    }     

}
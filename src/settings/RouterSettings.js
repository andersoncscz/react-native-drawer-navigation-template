import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { 
    HomeStack, 
    MyAccountStack, 
    ChatStack, 
    ShoppingStack, 
    AnalyticsStack, 
    SettingsStack 
} from '../settings/StackNavigatorSettings';

export default ROUTE_CONFIG = {
    
    Home: {
        screen: HomeStack,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            drawerIcon: ({ tintColor }) => drawerIcon({ iconName: 'home', size: 20, tintColor, solid: true }) // Text shown in the item of drawer navigator
        }),  
    },

    MyAccount: {
        screen: MyAccountStack,
        navigationOptions: ({ navigation }) => ({
            title: 'My Account',
            drawerIcon: ({ tintColor }) => drawerIcon({ iconName: 'user-circle', size: 20, tintColor, solid: true })
        }),                
    },


    Chat: {
        screen: ChatStack, 
        navigationOptions: ({ navigation }) => ({
            title: 'Chat',
            drawerIcon: ({ tintColor }) => drawerIcon({ iconName: 'comments', size: 20, tintColor, solid: true })
        }),                
    },
    

    Shopping: {
        screen: ShoppingStack,
        navigationOptions: ({ navigation }) => ({
            title: 'Shopping',
            drawerIcon: ({ tintColor }) => drawerIcon({ iconName: 'shopping-cart', size: 20, tintColor, solid: true })
        }),                
    },


    Analytics: {
        screen: AnalyticsStack,     
        navigationOptions: ({ navigation }) => ({
            title: 'Analytics',
            drawerIcon: ({ tintColor }) => drawerIcon({ iconName: 'chart-pie', size: 20, tintColor, solid: true })
        }),                
    },


    Settings: {
        screen: SettingsStack,       
        navigationOptions: ({ navigation }) => ({
            title: 'Settings',
            drawerIcon: ({ tintColor }) => drawerIcon({ iconName: 'cog', size: 20, tintColor, solid: true })
        }),                
    }     

}

const drawerIcon = ({ iconName, tintColor, size, solid }) => {
    return (
        <Icon name={iconName} size={size} solid={solid} color={tintColor} />
    )
}
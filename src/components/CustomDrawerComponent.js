import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';

import { DrawerItems } from 'react-navigation';

const backgroundImagePath = require("../images/nav_drawer_menu_header3_bg.jpg");
const avatarImagePath = require('../images/profile_picture2.jpg');

export const customDrawerComponent = props => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <ImageBackground 
                style={[styles.container, styles.backgroundImageDrawer]}
                source={backgroundImagePath}>                 
                <View style={styles.avatarContainer}>
                    <Image source={avatarImagePath} style={styles.avatarImage} />
                </View> 
                <View style={[styles.container, styles.avatarInfoContainer]}>
                    <Text style={styles.avatarInfo}> Anderson Cruz </Text>
                    <Text style={styles.avatarInfo}> andersoncscz@hotmail.com </Text>
                </View>
            </ImageBackground>
            <DrawerItems {...props}  />
        </SafeAreaView>            
    </ScrollView>
);



const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },


    avatarContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 12,
        height: (Dimensions.get('window').width / 100) * 50,
    },


    backgroundImageDrawer: {
        width: '100%', 
        height: '100%',
    },


    avatarImage: {
        height: (Dimensions.get('window').width / 100) * 20,
        borderRadius: 100,
        aspectRatio: 1,
    },


    avatarInfoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 12,
        paddingBottom: 14,
    },    


    avatarInfo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

});
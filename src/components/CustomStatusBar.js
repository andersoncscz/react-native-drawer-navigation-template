import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import { Header } from 'react-navigation';


export default CustomStatusBar = () => (
    <View>
        <StatusBar backgroundColor={'rgba(0, 0, 0, 0.2)'} translucent />
        { Platform.OS === 'android' ? <View style={styles.backStatus} /> : null }
    </View>                            
);


const styles = StyleSheet.create({

    backStatus: {
        position: 'absolute',
        left: 0,
        top: (StatusBar.currentHeight + Header.HEIGHT)*-1,
        backgroundColor:'rgba(2, 136, 209, 1)', 
        height: StatusBar.currentHeight, 
        width: '100%',
    }

});

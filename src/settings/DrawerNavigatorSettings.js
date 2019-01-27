
import { Dimensions } from 'react-native';

export default DRAWER_CONFIG = {

    navDrawerConfig: {
        
        drawerWidth: (Dimensions.get('window').width / 100) * 80 ,
        drawerBackgroundColor: '#FFF',
        drawerType: 'slide',
        contentComponent: {},
        
        contentOptions: {
            labelStyle: {
                fontSize: 18
            },
        
            inactiveTintColor: '#616161',
            activeTintColor: '#FFF',
            activeBackgroundColor: '#616161',
            itemsContainerStyle: {
              marginVertical: 0,
            },
        
            iconContainerStyle: {
              opacity: 1
            }
        }        
    },

    statusbarBackGroundColor: '#616161',
};
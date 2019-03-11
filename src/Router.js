import { 
    createDrawerNavigator,
    createAppContainer 
} from 'react-navigation';

import ROUTER_CONFIG from './settings/RouterSettings';

import DRAWER_CONFIG from './settings/DrawerNavigatorSettings';
import { customDrawerComponent } from './components/CustomDrawerComponent';

DRAWER_CONFIG.contentComponent = customDrawerComponent;

const AppContainer = createDrawerNavigator(ROUTER_CONFIG, DRAWER_CONFIG);
export default createAppContainer(AppContainer);
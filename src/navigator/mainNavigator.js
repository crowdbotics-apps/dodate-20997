import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile123070Navigator from '../features/UserProfile123070/navigator';
import Tutorial123069Navigator from '../features/Tutorial123069/navigator';
import NotificationList123041Navigator from '../features/NotificationList123041/navigator';
import Settings123040Navigator from '../features/Settings123040/navigator';
import Settings123032Navigator from '../features/Settings123032/navigator';
import UserProfile123030Navigator from '../features/UserProfile123030/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile123070: { screen: UserProfile123070Navigator },
Tutorial123069: { screen: Tutorial123069Navigator },
NotificationList123041: { screen: NotificationList123041Navigator },
Settings123040: { screen: Settings123040Navigator },
Settings123032: { screen: Settings123032Navigator },
UserProfile123030: { screen: UserProfile123030Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

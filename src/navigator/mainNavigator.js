import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList91325Navigator from '../features/ArticleList91325/navigator';
import ArticleList91324Navigator from '../features/ArticleList91324/navigator';
import ArticleList91323Navigator from '../features/ArticleList91323/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList91325: { screen: ArticleList91325Navigator },
ArticleList91324: { screen: ArticleList91324Navigator },
ArticleList91323: { screen: ArticleList91323Navigator },

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

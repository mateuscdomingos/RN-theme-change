import React from 'react';
import {
    createAppContainer,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';

import Menu from './components/Menu'
import Home from './pages/Home'
import commonStyles from './commonStyles'

const MenuRoutes = {
    Home: {
        name: 'Home',
        screen: props =>
            <Home {...props} />,
        navigationOptions: {
            title: 'Home'
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Home',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontWeight: 'normal',
            color: commonStyles.colors.mainText,
            fontSize: commonStyles.fontSize.menu
        },
        activeLabelStyle: {
            color: commonStyles.colors.primary,
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)
const MainRoutes = {
    Home: {
        name: 'Home',
        screen: MenuNavigator
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null // Will hide header for all screens of current stack navigator,
    }
})

const App = createAppContainer(MainNavigator);

export default App;
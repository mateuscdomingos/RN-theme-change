import React from 'react';
import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
import IconMenu from './components/IconMenu';

import Menu from './components/Menu'
import Home from './pages/Home'
import Details from './pages/Details'
import commonStyles from './commonStyles'

const MenuRoutes = {
    Home: {
        name: 'Home',
        screen: props =>
            <Home {...props} />,
        navigationOptions: {
            title: 'Home',
            drawerIcon: (props) => (
                <IconMenu name='home' info={props} />
            )
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Home',
    contentComponent: Menu
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)
const MainRoutes = {
    Home: {
        name: 'Home',
        screen: MenuNavigator
    },
    Details: {
        name: 'Details',
        screen: Details
    }
}

const MainNavigator = createStackNavigator(MainRoutes, {
    initialRouteName: 'Home',
    headerMode: 'none'
})

const App = createAppContainer(MainNavigator);

export default App;
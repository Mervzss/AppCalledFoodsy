import { createMaterialTopTabNavigator} from 'react-navigation'
// import React from 'react'

import RestaurantListView from './RestaurantListView'
import RestaurantMapView from './RestaurantMapView'

//Custom GlobalColors imports
import theme from '../../../theme/color-styles'

export default MainTabs = createMaterialTopTabNavigator(
    {
        RestList: RestaurantListView,
        RestMap: RestaurantMapView
    },
    {
        tabBarPosition: 'top',
        initialRouteName: 'RestList',
        tabBarOptions: {
            style: {
                backgroundColor: theme.APP_BACKGROUND,
                elevation: 0
            },
            tabStyle: {
                backgroundColor: theme.APP_BACKGROUND,
                height: 50,
            },
            labelStyle: {
                fontSize: 14,
                fontWeight: 'bold'
            },
            activeTintColor: theme.APP_COLOR,
            activeBackgroundColor: theme.APP_BACKGROUND,
            inactiveBackgroundColor: theme.APP_BACKGROUND,
            inactiveTintColor: theme.TEXT_FADE,
        },
    }
)
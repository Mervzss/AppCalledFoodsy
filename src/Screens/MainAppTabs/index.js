import { createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation'
import React from 'react'


import SelectedItemView from './SelectedItemView'
import MainTabs from './TabView'

import Icons from 'react-native-vector-icons/FontAwesome5'

//Custom GlobalColors imports
import theme from '../../../theme/color-styles'

export default RestNearbyContainer = createStackNavigator(
    {
        Contain: MainTabs,
        SelectItem: SelectedItemView
    },
    {
        initialRouteName: 'Contain',
        navigationOptions: {
            title: 'Restaurants Nearby',
            headerStyle: {
                backgroundColor: theme.APP_COLOR,
            },
            headerTintColor: 'white',
            headerLeft: <Icons name='bars' size={30} color={theme.APP_BACKGROUND} style={{ paddingLeft: 15 }} />,
            headerRight: <Icons name='shopping-cart' size={30} color={theme.APP_BACKGROUND} style={{ paddingRight: 15 }} />,
            headerTitleStyle: {
                width: '100%',
                marginHorizontal:0,
                textAlign: 'center',
            },
        }
    }
)

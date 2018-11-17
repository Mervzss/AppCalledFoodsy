import {createMaterialTopTabNavigator} from 'react-navigation'

import FoodMenuView from './FoodMenuView'
import PlaceDetailsView from './PlaceDetailsView'
import PlaceReviewView from './PlaceReviewView'

import theme from '../../../../theme/color-styles'

export default MiniTabReview = createMaterialTopTabNavigator(
    {
        FoodMenu: FoodMenuView,
        Details: PlaceDetailsView,
        Review: PlaceReviewView
    },
    {
        initialRouteName: 'FoodMenu',
        tabBarOptions: {
            style: {
                backgroundColor: theme.APP_BACKGROUND,
                elevation: 0,
                borderBottomColor: theme.TEXT_FADE,
                borderBottomWidth:1
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
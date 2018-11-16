import {createMaterialTopTabNavigator, createStackNavigator,} from 'react-navigation'
import React from 'react'

import RestaurantListView from './RestaurantListView'
import RestaurantMapView from './RestaurantMapView'

import Icons from 'react-native-vector-icons/FontAwesome5'

export class MainTabClass extends React.Component{
    render(){
        return(
            <MainTabs/>
        )
    }
}

const MainTabs = createMaterialTopTabNavigator(
    {
    RestList: RestaurantListView,
    RestMap: RestaurantMapView
    },
    {
        tabBarPosition:'top',
        initialRouteName:'RestList',
        tabBarOptions:{
            style:{
                backgroundColor:'white',
                borderColor:'white',
                elevation: 0
            },
            tabStyle:{
                backgroundColor:'white',
                height:40,
                borderColor:'transparent',
                
            },
            labelStyle:{
                fontSize:14,
                fontWeight:'bold'
            },
            
            // activeBackgroundColor:'black',
            activeTintColor:'45a449',
            activeBackgroundColor:'white',
            inactiveBackgroundColor:'white',
            inactiveTintColor:'#333333',
            
        },

        
    }
    )

    export default RestNearbyContainer = createStackNavigator(
        {
            Contain: MainTabClass
        },
        {
            initialRouteName:'Contain',
            navigationOptions:{
                title:'Restaurants Nearby',
                headerStyle:{
                    backgroundColor:'#00C457',

                },
                headerTintColor:'white',
                headerLeft: <Icons name='bars' size={30} color='white' style={{paddingLeft:15}}/>,
                headerRight: <Icons name='shopping-cart' size={30} color='white' style={{paddingRight:15}}/>,
                headerTitleStyle:{
                    alignSelf:'center',
                    textAlign:'center',
                    paddingLeft:42
                },
                headerBackTitleStyle:{
                    alignSelf:'center',
                    textAlign:'center',
                }
            }
        }
    )

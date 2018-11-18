import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import theme from '../../../../theme/color-styles'
class FoodMenuView extends Component {
    static navigationOptions ={
        title: 'FOOD MENU'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>No Menu Today</Text>
            </View>
        )
    }
}
export default FoodMenuView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:theme.APP_BACKGROUND,
        paddingTop:10
    },
});
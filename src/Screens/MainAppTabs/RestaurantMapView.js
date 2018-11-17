import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Custom GlobalColors imports
import theme from '../../../theme/color-styles'

class RestaurantMapView extends Component {
    static navigationOptions ={
        title: 'Restaurant Map'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>RestaurantMapView</Text>
            </View>
        )
    }
}
export default RestaurantMapView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:theme.APP_BACKGROUND,
        paddingTop:10
    },
});
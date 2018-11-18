import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import theme from '../../../../theme/color-styles'

class PlaceDetailView extends Component {
    static navigationOptions ={
        title: 'PLACE DETAILS'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>No Reviews</Text>
            </View>
        )
    }
}
export default PlaceDetailView;

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
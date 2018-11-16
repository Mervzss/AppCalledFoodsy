import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class RestaurantListView extends Component {
    static navigationOptions ={
        title: 'Restaurant List'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>RestaurantListView</Text>
            </View>
        )
    }
}
export default RestaurantListView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'white',
        paddingTop:10
    },
    textInput:{
        fontSize: 16,
        fontWeight:'bold',
        backgroundColor:'#e9e9e9',
        width:'70%',
        height:52
    }

});
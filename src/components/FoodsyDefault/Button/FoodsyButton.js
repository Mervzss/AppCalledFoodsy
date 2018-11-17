import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

//Custom GlobalColors imports
import theme from '../../../../theme/color-styles'

export const FoodsyButton = props => {
    return (
        <TouchableOpacity style={props.long ? { width: '70%', paddingBottom:12 } : { width: '60%', paddingBottom:12 }} onPress={props.onPress}>
            <View style={[styles.touchButton, props.style]}>
                <Text style={[styles.textButton, props.styleText]}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchButton:{
        backgroundColor:theme.APP_COLOR,
        borderRadius: 30,
        width:'100%',
        height:55,
        alignItems:'center',
        justifyContent:'center'
    },
    textButton:{
        color:'white',
        fontSize:20,
        margin:8
    }
  });
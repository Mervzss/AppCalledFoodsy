import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import { FoodsyText } from '../Text/FoodsyText'

export const FoodsyButtonText = props => {
    return (
        <View style={{ width: '70%' }}>
            <FoodsyText>{props.title}</FoodsyText>


            <View style={styles.alignIcon}>
                <TouchableOpacity onPress={props.onPress} style={{width:25}}>
                    <Icons name='arrow-left' size={25} color='#333333' />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    alignIcon: {
        transform: [
            { translateX: 0 },
            { translateY: -37 }
        ]
    }
});
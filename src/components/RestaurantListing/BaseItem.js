import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { FoodsyText, FoodsySmallText } from '../FoodsyDefault'

//Custom GlobalColors imports
import theme from '../../../theme/color-styles'

export const BaseItem = props => {
    return (
        <View style={styles.imageHolder}>
            <Image source={props.image} style={{ width: '100%', height: 200 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <TouchableOpacity onPress={props.onItemPressed}>
                    <View style={styles.descContainer}>
                        <FoodsyText style={{ marginTop: 10 }}>{props.name}</FoodsyText>
                        <FoodsySmallText>{props.type}</FoodsySmallText>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.readyTag}>
                        <Text style={{ color: theme.APP_COLOR, fontSize: 13 }}>Ready in {props.time}min</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageHolder: {
        width: '90%',
        paddingBottom:15,
        alignSelf:'center'
    },
    descContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 2
    },
    readyTag: {
        width: 140,
        height: 42,
        borderColor: theme.APP_COLOR,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }

});
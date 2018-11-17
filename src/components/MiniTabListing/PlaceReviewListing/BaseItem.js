import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { FoodsyText, FoodsySmallText } from '../../../components/FoodsyDefault'

import Icons from 'react-native-vector-icons/FontAwesome5'

import theme from '../../../../theme/color-styles'

export const BaseItem = props => {
    const renderStars = () => {
        const stars = []
        let i = 0
        do {
            i < props.stars ?
                stars.push(<Icons name='star' size={20} color={theme.STAR_COLOR} key={i} />)
                : stars.push(<Icons name='star' size={20} color={theme.TEXT_FADE} key={i} />)

            i += 1;
        } while (i < 5);
        return stars
    }
    return (
        <View style={styles.inReview}>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ width: 50, height: 50 }}>
                    <Image source={props.picture}
                        style={{ width: 50, height: 50, borderRadius: 50 }}

                    />
                </View>
                <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 10 }}>
                        <FoodsyText style={{ fontSize: 16 }}>{props.name}</FoodsyText>
                        <FoodsySmallText>{props.date}</FoodsySmallText>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 2 }}>
                        {
                            renderStars()
                        }
                    </View>
                </View>

            </View>

            <FoodsySmallText style={{ paddingTop: 5, textAlign:'left' }}>{props.comment}</FoodsySmallText>
        </View>
    )
}

const styles = StyleSheet.create({
    inReview: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 5
    }
});
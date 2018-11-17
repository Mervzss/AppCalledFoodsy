import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

import Icons from 'react-native-vector-icons/FontAwesome5'
import ForgotBurger from '../../../../assets/hamburger.png'

import { FoodsyText, FoodsyInput, FoodsyButton, FoodsySmallText } from '../../../components/FoodsyDefault'

//Custom GlobalColors imports
import theme from '../../../../theme/color-styles'

class ForgotPassView extends Component {
    render() {
        return (

            <View style={styles.container}>

                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icons name='times' size={30} color={theme.TEXT_BASE_COLOR} />
                </TouchableOpacity>

                <Image source={ForgotBurger} style={{ width: 250, height: 250 }} />
                <FoodsyText>FORGOT YOUR PASSWORD?</FoodsyText>

                <View style={{ height: 15 }} />

                <View style={{ width: '60%', paddingBottom: 15 }}>
                    <FoodsySmallText style={{ fontSize: 16, }}>
                        Enter your email below to receive
                        the instruction to reset your
                        password
                </FoodsySmallText>

                </View>

                <View style={{ height: 10 }} />

                <FoodsyInput placeholder='EMAIL ADDRESS' textAlign='center' />
                <FoodsyButton title='SEND PASSWORD' long={true} />

            </View>
        )
    }
}
export default ForgotPassView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: theme.APP_BACKGROUND,
        paddingTop: 20
    },

});
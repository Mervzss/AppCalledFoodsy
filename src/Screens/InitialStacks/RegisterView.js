import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import { FoodsyButtonText, FoodsyInput, FoodsyButton, FoodsyText } from '../../components/FoodsyDefault'

//Custom GlobalColors imports
import theme from '../../../theme/color-styles'

class RegisterView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* HEAD TEXT */}
                <FoodsyButtonText title='REGISTER NOW' onPress={() => this.props.navigation.goBack()} />

                <View style={{ height: 10 }} />

                {/* INPUTS */}
                <FoodsyInput placeholder='USERNAME' textAlign='center' />
                <FoodsyInput placeholder='EMAIL ADDRESS' textAlign='center' />
                <FoodsyInput placeholder='PASSWORD' textAlign='center' />
                <FoodsyInput placeholder='CONFIRM PASSWORD' textAlign='center' />

                {/* SEparator */}
                <View style={{ height: 15 }} />

                <FoodsyButton title='SIGNUP' long={true} />


                <View style={{ flexDirection: 'column', width: '100%', margin: 20 }}>
                    <FoodsyText style={{ fontSize: 16, margin: 3 }}>OR</FoodsyText>
                </View>

                <FoodsyButton style={{ backgroundColor: theme.FB_COLOR }} styleText={{ fontSize: 16 }} title='CONNECT WITH FACEBOOK' long={true} />
                <View style={{ height: 5 }} />
                <FoodsyButton style={{ backgroundColor: theme.TWITTER_COLOR }} styleText={{ fontSize: 16 }} title='CONNECT WITH TWITTER' long={true} />
            </View>
        )
    }
}
export default RegisterView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: theme.APP_BACKGROUND,
        paddingTop: 15
    },
});
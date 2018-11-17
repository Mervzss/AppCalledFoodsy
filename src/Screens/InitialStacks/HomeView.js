import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import Logo from '../../../assets/company_logo.png'
import { FoodsyButton } from '../../../src/components/FoodsyDefault'

//Custom GlobalColors imports
import theme from '../../../theme/color-styles'

class HomeView extends Component {
    render() {
        return (

            <View style={styles.container}>

                <Image source={Logo} style={{ width: '100%', height: 250 }} resizeMode='center' />

                <FoodsyButton title='SIGN UP' onPress={() => this.props.navigation.navigate('Register')} />
                <FoodsyButton title='LOG IN' onPress={() => this.props.navigation.navigate('SignUp')} style={{ backgroundColor: '#333333' }} />

            </View>

        )
    }
}
export default HomeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.APP_BACKGROUND
    },
});
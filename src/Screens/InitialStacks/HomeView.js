import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import Logo from '../../../assets/company_logo.png'
import { FoodsyButton } from '../../../src/components/FoodsyDefault'

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
    },
    textStyle: {
        fontSize: 22,
        textAlign: 'center',
        color: "#454647",
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    touchButton: {
        backgroundColor: '#00C457',
        borderRadius: 25,
        width: '100%',
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        margin: 10
    }
});
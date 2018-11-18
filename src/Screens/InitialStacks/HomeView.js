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
                <Image source={{uri:'https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=a0801ec4c751ce57fd80f1dbb394d5a4&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb'}}
                style={{ width: '100%', height: 410 }} resizeMode='cover'/>
                <View style={{ width: '100%', padding:10, paddingBottom:15, alignItems:'center' }}>
                    <Image source={Logo} style={{ width: '70%', height: 90 }} resizeMode='contain' />   
                </View>
                

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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: theme.APP_BACKGROUND
    },
});
import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'

import { FoodsyButtonText, FoodsyInput, FoodsyButton, FoodsyText } from '../../components/FoodsyDefault'

//Custom GlobalColors imports
import theme from '../../../theme/color-styles'

class SignInView extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/* HEADTEXT */}
                <FoodsyButtonText title='SIGN IN' onPress={() => this.props.navigation.goBack()} />

                <View style={{ height: 10 }} />

                {/* INPUTS */}
                <FoodsyInput placeholder='EMAIL ADDRESS' textAlign='center' />
                <FoodsyInput placeholder='PASSWORD' textAlign='center' />

                <View style={{ height: 15 }} />

                {/* BUTTONS */}
                <FoodsyButton title='LOGIN' long={true} onPress={() => this.props.navigation.navigate('Main')}/>

                {/* NESTED SEPARATOR */}
                <View style={{ flexDirection: 'column', width: '100%', margin: 10 }}>
                    <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'center' }}>
                        <View>
                            <FoodsyText style={{ fontSize: 16, margin: 3 }}>Forgot Password?</FoodsyText>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
                                <FoodsyText style={{ fontSize: 16, margin: 3, color: '#bae25f' }}>Click here</FoodsyText>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FoodsyText style={{ fontSize: 16, margin: 3 }}>OR</FoodsyText>
                </View>

                <FoodsyButton style={{ backgroundColor: theme.FB_COLOR }} styleText={{ fontSize: 16 }} title='CONNECT WITH FACEBOOK' long={true} />
                <View style={{ height: 5 }} />
                <FoodsyButton style={{ backgroundColor: theme.TWITTER_COLOR }} styleText={{ fontSize: 16 }} title='CONNECT WITH TWITTER' long={true} />


                <Image source={{uri:'https://images.unsplash.com/photo-1450152021501-598b36b17449?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=3c913463c5114330541ae8953fee85b7&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgbhttps://images.unsplash.com/photo-1450152021501-598b36b17449?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=3c913463c5114330541ae8953fee85b7&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb'}}
                    style={{ width: '100%', flex:1}} resizeMode='cover'/>
            </View>
        )
    }
}
export default SignInView;

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
import React, { Component } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { FoodsyButtonText, FoodsyInput, FoodsyButton, FoodsyText } from '../../components/FoodsyDefault'
class SignInView extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/* HEADTEXT */}
                <FoodsyButtonText title='SIGN IN' onPress={() => this.props.navigation.goBack()} />

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

                <FoodsyButton style={{ backgroundColor: '#193ee1' }} styleText={{ fontSize: 16 }} title='CONNECT WITH FACEBOOK' long={true} />
                <View style={{ height: 5 }} />
                <FoodsyButton style={{ backgroundColor: '#3dbcf3' }} styleText={{ fontSize: 16 }} title='CONNECT WITH TWITTER' long={true} />
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
        backgroundColor: 'white',
        paddingTop: 10
    },
    textInput: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#e9e9e9',
        width: '70%',
        height: 52
    }

});
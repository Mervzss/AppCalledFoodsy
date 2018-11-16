import React from 'react'
import { TextInput, View, StyleSheet} from 'react-native'

export const FoodsyInput = props =>{
    return(
        <View style={{width:'100%', alignItems:'center',paddingBottom:15}}>
            <TextInput style={styles.textInput} {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput:{
        fontSize: 16,
        fontWeight:'bold',
        backgroundColor:'#e9e9e9',
        width:'70%',
        height:52,
    }

});
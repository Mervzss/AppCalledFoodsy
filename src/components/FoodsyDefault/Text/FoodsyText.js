import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const FoodsyText = props =>{
    return(
        <Text style={[styles.textStyle, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20,
      fontWeight:'bold',
      textAlign: 'center',
      color:"#333333",
      margin: 10,
    },
  });
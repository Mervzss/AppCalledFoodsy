import React from 'react'
import {Text, StyleSheet,} from 'react-native'

//Custom GlobalColors imports
import theme from '../../../../theme/color-styles'

export const FoodsySmallText = props =>{
    return(
        <Text style={[styles.textStyle, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 14,
      fontWeight:'bold',
      textAlign: 'center',
      color: theme.TEXT_FADE,
    },
  });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../constant'

export default function RadioButton({style,selected}) {
    return (
        <View style={[{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: color.backgrdColor,
            alignItems: 'center',
            justifyContent: 'center',
        }, style]}>
            {
                selected ?
                    <View style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: color.backgrdColor,
                    }} />
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({})
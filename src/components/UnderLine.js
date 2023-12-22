import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../constant'

export default function UnderLine({marginTop}) {
    return (
        <View style={{ backgroundColor: color.underline, height: 1, marginTop: marginTop }} />
    )
}

const styles = StyleSheet.create({})
import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { blue, gray, black } from '../../utils/colors'
import { TitleText } from '../Styled'

export default function ListItemCentered({name, amount, onPress, style={}}){
    return (
        <TouchableOpacity onPress={onPress} style={styles.listItemCentered}>
            <TitleText>{name}</TitleText>
            <Text>{amount === 1 ? `${amount} card` : `${amount} cards` }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemCentered: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        color: blue,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: gray,
    },
})

import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { blue, gray, black } from '../../utils/colors'
import { TitleText } from '../Styled'

export default function ListItemCentered({name, amount, onPress, style={}}){
    return (
        <TouchableOpacity onPress={onPress} style={styles.listItemCentered}>
            <TitleText>{name}</TitleText>
            <Text>{amount} cards</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemCentered: {
        padding: 20,
        paddingTop: 40,
        paddingBottom: 40,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems:'center',
        textAlign: 'center',
        color: blue,
        borderBottomWidth: 1,
        borderBottomColor: gray,
    },
})



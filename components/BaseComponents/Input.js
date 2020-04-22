import React, {useState} from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function Input({option}){
    const [text, setText] = useState('');
    return(
        <TextInput style={styles.textInput} placeholder={option} onChangeText={(text) => setText(text)}/>
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        margin: 20,
        marginTop: 0,
        padding: 20,
        paddingBottom: 10,
        paddingTop:10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'rgb(209, 216, 222)',
    }
})
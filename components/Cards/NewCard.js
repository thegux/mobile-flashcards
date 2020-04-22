import React, {useState} from 'react'
import { Text } from 'react-native'
import {ContainerCentered, ButtonLightText, TitleText, PrettyButton, Input} from '../Styled'
import { blue } from '../../utils/colors'

function NewCard(){
    const {question, setQuestion} = useState('')
    const {answer, setAnswer} = useState('')
        return(
            <ContainerCentered>
                <TitleText>New Question</TitleText>
                <Input placeholder="Question" value={question} onChangeText={setQuestion}/>
                <Input placeholder="Answer" value={answer} onChangeText={setAnswer} />
                <PrettyButton style={{backgroundColor: blue}}>
                    <ButtonLightText>Create Question</ButtonLightText>
                </PrettyButton>
            </ContainerCentered>
        )
}


export default NewCard
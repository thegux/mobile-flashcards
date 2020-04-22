import React from 'react'
import { Text } from 'react-native'
import Input from '../BaseComponents/Input'
import {ContainerCentered, ButtonLightText, TitleText, PrettyButton} from '../Styled'
import { blue } from '../../utils/colors'

function NewCard(){
        return(
            <ContainerCentered>
                <TitleText>New Question</TitleText>
                <Input option={"Question"}/>
                <Input option={"Answer"}/>
                <PrettyButton style={{backgroundColor: blue}}>
                    <ButtonLightText>Create Question</ButtonLightText>
                </PrettyButton>
            </ContainerCentered>
        )
}


export default NewCard
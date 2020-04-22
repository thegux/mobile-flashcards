import React, { useState } from 'react'
import { Text } from 'react-native'
import {ContainerCentered, ButtonLightText, TitleText, PrettyButton, Input} from '../Styled'
import { blue } from '../../utils/colors'

function NewDeck(){
    const {title, setTitle} = useState('')
        return(
            <ContainerCentered>
                <TitleText>What is the title of the new deck?</TitleText>
                <Input placeholder="Deck's Title" value={title} onChangeText={setTitle}/>

                <PrettyButton style={{backgroundColor: blue}}>
                    <ButtonLightText>Create Deck</ButtonLightText>
                </PrettyButton>

            </ContainerCentered>
        )
    }


export default NewDeck
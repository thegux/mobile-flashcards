import React from 'react'
import { Text } from 'react-native'
import Input from '../BaseComponents/Input'
import {ContainerCentered, ButtonLightText, TitleText, PrettyButton} from '../Styled'
import { blue } from '../../utils/colors'

function NewDeck(){
        return(
            <ContainerCentered>
                <TitleText>What is the title of the new deck?</TitleText>
                <Input option={"Deck's Title"}/>

                <PrettyButton style={{backgroundColor: blue}}>
                    <ButtonLightText>Create Deck</ButtonLightText>
                </PrettyButton>

            </ContainerCentered>
        )
    }


export default NewDeck
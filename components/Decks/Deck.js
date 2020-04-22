import React, { Component } from 'react'
import { Text } from 'react-native'
import TextButton from '../BaseComponents/TextButton'
import {TitleText, ContainerCentered, PrettyButton, ButtonLightText} from '../Styled'
import { blue } from '../../utils/colors'

class Deck extends Component {
    render() {
        return (
            <ContainerCentered>

                <TitleText>Deck Title</TitleText>
                
                <Text>3 Questions</Text>

                <PrettyButton style={{backgroundColor: blue}} onPress={() => this.props.navigation.navigate('New Card')}>
                    <ButtonLightText>Add Card</ButtonLightText>
                </PrettyButton>

                <PrettyButton style={{backgroundColor: blue}} onPress={() => this.props.navigation.navigate('Card')}>
                    <ButtonLightText>Start Quiz</ButtonLightText>
                </PrettyButton>
                
                <TextButton>Delete Deck</TextButton>
            
            </ContainerCentered>
        )
    }
}

export default Deck
import React, { Component } from 'react'
import { Text } from 'react-native'
import TextButton from '../BaseComponents/TextButton'
import {TitleText, ContainerCentered, PrettyButton, ButtonLightText} from '../Styled'
import { blue } from '../../utils/colors'
import {deleteDeck} from '../../utils/api'
import { connect } from 'react-redux'
import {removeDeck} from '../../actions/decks'

function Deck (props) {

        const {deckTitle, questions} = props.route.params
        const amount = questions.length
        return (
            <ContainerCentered>

                <TitleText>{deckTitle}</TitleText>

                <Text>{amount === 1 ? `${amount} question` : `${amount} questions`}</Text>

                <PrettyButton style={{backgroundColor: blue}}
                              onPress={() => props.navigation
                                        .navigate('New Card', {deckTitle: deckTitle})}>
                    <ButtonLightText>Add Card</ButtonLightText>
                </PrettyButton>

                <PrettyButton style={{backgroundColor: blue}} onPress={() => props.navigation.navigate('Card')}>
                    <ButtonLightText>Start Quiz</ButtonLightText>
                </PrettyButton>

                <TextButton onPress={() => remove(props.navigation, props.dispatch, deckTitle)} >Delete Deck</TextButton>

            </ContainerCentered>
        )

}


function remove(navigation, dispatch, deckTitle){
    dispatch(removeDeck(deckTitle))
    deleteDeck(deckTitle)
    navigation.navigate('Decks')
}

export default connect()(Deck)

import React, { Component } from 'react'
import { Text } from 'react-native'
import TextButton from '../BaseComponents/TextButton'
import {TitleText, ContainerCentered, PrettyButton, ButtonLightText} from '../Styled'
import { blue } from '../../utils/colors'
import {deleteDeck} from '../../utils/api'
import { removeDeck } from '../../actions/decks'
import { connect } from 'react-redux'
import ErrorBoundary from '../ErrorHandling/ErrorBoundary'

class Deck extends Component {

    shouldComponentUpdate(nextProps){
        return nextProps.deck !== undefined && nextProps.deck !== {}
    }

    remove = (deckTitle) => {
        this.props.dispatch(removeDeck(deckTitle))
        deleteDeck(deckTitle)
        this.props.navigation.navigate('Decks')
    }

    render(){
        const deckTitle = this.props.deck.title
        const amount = this.props.deck.questions.length
        const questions = this.props.deck.questions

        return (

          <ErrorBoundary>

            <ContainerCentered>

                <TitleText>{deckTitle}</TitleText>

                <Text>{amount === 1 ? `${amount} card` : `${amount} cards`}</Text>

                <PrettyButton style={{backgroundColor: blue}}
                              onPress={() => this.props.navigation
                                        .navigate('New Card', {deckTitle: deckTitle})}>
                    <ButtonLightText>Add Card</ButtonLightText>
                </PrettyButton>

                <PrettyButton disabled={amount < 1}
                              style={{backgroundColor: blue}}
                              onPress={() => this.props.navigation.navigate('Quiz', {questions: questions})}>
                    <ButtonLightText>{amount < 1 ? 'No questions to start quiz' : 'Start Quiz'}</ButtonLightText>
                </PrettyButton>

                <TextButton onPress={() => this.remove(deckTitle)} >Delete Deck</TextButton>

            </ContainerCentered>
            
          </ErrorBoundary>
        )
    }

}




function mapStateToProps(decks, props){
    const deckTitle = props.route.params.deckTitle
    const deck = Object.keys(decks).map((d) => decks[d]).filter((d) => d.title === deckTitle)[0]

    return{
        props,
        deck,
    }
}

export default connect(mapStateToProps)(Deck)

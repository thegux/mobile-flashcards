import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import ListItemCentered from '../BaseComponents/ListItemCentered'
import {fetchDecks, clearAsyncStorage} from '../../utils/api'
import {connect} from 'react-redux'
import {ContainerCentered} from '../Styled'
import {receiveDecks} from '../../actions/decks'
import ErrorBoundary from '../ErrorHandling/ErrorBoundary'

class DeckContainer extends Component {

    componentDidMount(){
        const {dispatch} = this.props
        fetchDecks().then((decks) => decks !== null && dispatch(receiveDecks(decks)))
    }

    renderDecks = (deck) => {
        return <ListItemCentered
                    name={deck.item.title}
                    onPress={() => this.props.navigation
                            .navigate('Deck',
                            { deckTitle: deck.item.title,
                              questions: deck.item.questions})}
                    amount={deck.item.questions.length}/>
    }

    render(){
      const {decksArray} = this.props;
        return(
              <ErrorBoundary>
                  <ContainerCentered>

               <FlatList
                         data={decksArray}
                         renderItem={this.renderDecks}
                         keyExtractor={(item, index) => index.toString()}/>
                </ContainerCentered>
              </ErrorBoundary>

        )
    }
}

function mapStateToProps(decks){
  let decksArray
  {decks && decks !== undefined
    ? decksArray = Object.keys(decks).map((p) => decks[p])
    : decksArray = []
  }

      return{
        decksArray
    }
}




export default connect(mapStateToProps)(DeckContainer)

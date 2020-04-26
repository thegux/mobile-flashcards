import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import ListItemCentered from '../BaseComponents/ListItemCentered'
import {fetchDecks, clearAsyncStorage} from '../../utils/api'
import {connect} from 'react-redux'
import {receiveDecks} from '../../actions/decks'

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
      const {decks} = this.props;
        return(
            <View>
               <FlatList 
                         data={decks}
                         renderItem={this.renderDecks}
                         keyExtractor={(item, index) => index.toString()}/>
            </View>
        )
    }
}

function mapStateToProps(decks){
    return{
        decks
    }
}




export default connect(mapStateToProps)(DeckContainer)

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import ListItemCentered from '../BaseComponents/ListItemCentered'

class DeckContainer extends Component {

    flatListMethod = () => {

    }
    render(){
        return(
            <View>
                 <ListItemCentered onPress={() => this.props.navigation.navigate('Deck')}
                name={'Deck'} amount={3} />
            </View>
        )
    }
}

export default DeckContainer
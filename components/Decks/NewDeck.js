import React, {Component} from 'react'
import {ContainerCentered, ButtonLightText, TitleText, PrettyButton, Input} from '../Styled'
import { blue } from '../../utils/colors'
import { createDeck } from '../../utils/api'
import {connect} from 'react-redux'
import {addDeck} from '../../actions/decks'

class NewDeck extends Component {

    state = {
      title: '',
    }

    handleTitleChange = (title) => {
      this.setState(() => ({title}))
    }

    submit = () => {
        this.props.navigation.navigate('Decks')
        this.props.dispatch(addDeck(this.state.title))
        createDeck(this.state.title)
        this.setState(() => ({title: ''})) 
    }

      render() {
        return(
            <ContainerCentered>
                <TitleText>What is the title of the new deck?</TitleText>
                <Input keyboardShouldPersistTaps='handled'
                    placeholder="Deck's Title"
                    value={this.state.title} 
                    onChangeText={this.handleTitleChange}/>

                <PrettyButton style={{backgroundColor: blue}}>
                    <ButtonLightText
                        onPress={this.submit}>
                        Create Deck
                    </ButtonLightText>
                </PrettyButton>

            </ContainerCentered>
        )
      }
}



export default connect()(NewDeck)

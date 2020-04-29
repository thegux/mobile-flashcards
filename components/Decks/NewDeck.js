import React, {Component} from 'react'
import { Image, StyleSheet, KeyboardAvoidingView,
         Keyboard, TouchableWithoutFeedback, Platform } from 'react-native'
import { ContainerCentered, ButtonLightText, TitleText,
        PrettyButton, Input } from '../Styled'
import { blue } from '../../utils/colors'
import { createDeck } from '../../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../../actions/decks'

class NewDeck extends Component {

    state = {
      title: '',
    }

    handleTitleChange = (title) => {
      this.setState(() => ({title}))
    }

    submit = () => {
        this.props.navigation.navigate('Deck', {deckTitle: this.state.title})
        this.props.dispatch(addDeck(this.state.title))
        createDeck(this.state.title)
        this.setState(() => ({title: ''}))
    }

      render() {

        return(

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <ContainerCentered>

                  <Image style={styles.image} source={require('../../drawables/newDeck.png')}/>

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

            </TouchableWithoutFeedback>

          </KeyboardAvoidingView>
        )
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch'
  }
});

export default connect()(NewDeck)

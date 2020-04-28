import React, {Component} from 'react'
import {Image, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform} from 'react-native'
import {ContainerCentered, ButtonLightText, TitleText, PrettyButton, Input} from '../Styled'
import { blue } from '../../utils/colors'
import { createCard } from '../../utils/api'
import {connect} from 'react-redux'
import {addCard} from '../../actions/decks'

class NewCard extends Component {

    state={
        question:'',
        answer: '',
    }

    handleQuestionChange = (question) => {
        this.setState(() => ({question}))
    }

    handleAnswerChange = (answer) => {
        this.setState(() => ({answer}))
    }

    create = () => {
        this.props.navigation.goBack()
        const {question, answer} = this.state
        const title = this.props.route.params.deckTitle
        this.props.dispatch(addCard({title, question, answer}))
        createCard({title, question, answer})
    }


    render() {
        return(

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <ContainerCentered>

                    <TitleText>New Card</TitleText>

                    <Input placeholder="Question" value={this.state.question} onChangeText={this.handleQuestionChange}/>
                    <Input placeholder="Answer" value={this.state.answer} onChangeText={this.handleAnswerChange} />

                    <PrettyButton style={{backgroundColor: blue}}>
                        <ButtonLightText onPress={this.create}>Create Question</ButtonLightText>
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

export default connect()(NewCard)

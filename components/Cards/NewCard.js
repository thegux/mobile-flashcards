import React, {Component} from 'react'
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
                <ContainerCentered>
                    <TitleText>New Question</TitleText>
                    <Input placeholder="Question" value={this.state.question} onChangeText={this.handleQuestionChange}/>
                    <Input placeholder="Answer" value={this.state.answer} onChangeText={this.handleAnswerChange} />
                    <PrettyButton style={{backgroundColor: blue}}>
                        <ButtonLightText onPress={this.create}>Create Question</ButtonLightText>
                    </PrettyButton>
                </ContainerCentered>
            )
    }
}


export default connect()(NewCard)

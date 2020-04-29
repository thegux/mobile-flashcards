import React, { Component } from 'react'
import { View } from 'react-native'
import Card from '../Cards/Card'
import debounce from 'debounce'
import QuizScore from './QuizScore'
import { clearLocalNotifications, setLocalNotification } from '../../utils/helpers'

export default class Quiz extends Component {

  constructor(props){
    super(props)
    this.handleAnswer = debounce(this.handleAnswer.bind(this), 20);
    this.goToResult = debounce(this.goToResult.bind(this), 30);
    this.state={
      questionAt: 1,
      score: 0,
      result: false,
    }
  }

  shouldComponentUpdate(nextProps){
    return this.state.questionAt + 1 < nextProps.route.params.questions.length
  }

  componentDidMount() {
    const total = this.props.route.params.questions.length
    this.props.navigation.setOptions({ title: `${this.state.questionAt}/${total}` })
  }

  updateState = (type) => {
    const total = this.props.route.params.questions.length
    if(this.state.questionAt < total){
      this.setState((prevState) => ({questionAt: prevState.questionAt + 1}))
    } else {
      this.goToResult()
    }
    this.handleAnswer(type)
  }

  goToResult(){
    clearLocalNotifications().then(setLocalNotification)
    this.setState((prevState) => ({result: true}))
    this.props.navigation.setOptions({ title: 'Result' })
    this.forceUpdate();
  }

  restartQuiz = () => {
    const total = this.props.route.params.questions.length
    this.setState(() => ({questionAt:1, result: false, score: 0}))
    this.props.navigation.setOptions({ title: `1/${total}` })
    this.forceUpdate()
  }

  handleAnswer(type){
    const total = this.props.route.params.questions.length
    switch (type) {
      case 'Right':
        this.setState((prevState) => ({score: prevState.score + 1}))
        this.props.navigation.setOptions({ title: `${this.state.questionAt}/${total}` })
        this.forceUpdate();
        break;
      case 'Wrong':
        this.props.navigation.setOptions({ title: `${this.state.questionAt}/${total}` })
        this.forceUpdate();
        break
      default:
        this.props.navigation.setOptions({ title: `${this.state.questionAt}/${total}` })
    }
  }

  render() {
    const questions = this.props.route.params.questions
    let position = this.state.questionAt - 1
    const total = this.props.route.params.questions.length
    const status = this.state.score > (total/2)

      if(!this.state.result){
       
      return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

          <Card question={questions[position].question}
                answer={questions[position].answer}
                updateState={this.updateState}/>

        </View>
      )
      } else {
        return <QuizScore restartQuiz={this.restartQuiz} 
                          status={status} 
                          {...this.props} 
                          score={this.state.score}/>
      }
  }
}

import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { ContainerCentered, TitleText, PrettyButton, ButtonLightText } from '../Styled'
import { blue } from '../../utils/colors'
import { StackActions } from '@react-navigation/native';


export default function QuizScore(props){

    return(

      <ContainerCentered>
         
        <TitleText>{props.status ? 'Congrats!!!' : 'Keep trying! You can do it!'}</TitleText>
        
        <TitleText>Score: {props.score}</TitleText>

        {props.status ?
            <Image style={styles.win} source={require('../../drawables/win.png')}/>
        :   <Image style={styles.lose} source={require('../../drawables/lose.png')}/>}


        <PrettyButton style={{backgroundColor: blue}}
                      onPress={() => props.restartQuiz()}>
            <ButtonLightText>Restart Quiz</ButtonLightText>
        </PrettyButton>

        <PrettyButton style={{backgroundColor: blue}}
                      onPress={() => props.navigation.dispatch(StackActions.pop(1))}>
            <ButtonLightText>Back to deck</ButtonLightText>
        </PrettyButton>

      </ContainerCentered>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  win: {
    width: '100%',
    height: 190,
    resizeMode: 'stretch'
  },
  lose: {
    width: '100%',
    height: 230,
    resizeMode: 'stretch'
  }
});

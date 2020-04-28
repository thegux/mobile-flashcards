import React, {useState} from 'react'
import TextButton from '../BaseComponents/TextButton'
import { ContainerCentered, ButtonLightText, CardView, TitleText, PrettyButton } from '../Styled'
import {blue} from '../../utils/colors'

export default function Card(props) {
      const [answer, useAnswer] = useState(false)
          return (

                <CardView>

                    <TitleText>{!answer ? props.question : props.answer}</TitleText>
                    {!answer && <TextButton onPress={() => useAnswer(true)} style={{textAlign: 'center'}}>Answer</TextButton>}

                    <PrettyButton onPress={() => {props.updateState('Right'); useAnswer(false)}} style={{backgroundColor: blue}}>
                        <ButtonLightText>Correct</ButtonLightText>
                    </PrettyButton>

                    <PrettyButton onPress={() => {props.updateState('Wrong'); useAnswer(false)}} style={{backgroundColor: '#993399', marginTop: 10}}>
                        <ButtonLightText>Incorrect</ButtonLightText>
                    </PrettyButton>

                </CardView>

        )
  }

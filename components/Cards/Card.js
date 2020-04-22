import React, { Component } from 'react'
import { Text } from 'react-native'
import { ContainerCentered, ButtonLightText, CardView, TitleText, PrettyButton } from '../Styled'

export default class Card extends Component {
    render () {
        return (
            <ContainerCentered>

                <CardView>
                    <TitleText>Question</TitleText>

                    <Text style={{textAlign: 'center'}}>Answer</Text>

                    <PrettyButton style={{backgroundColor: '#013220'}}>
                        <ButtonLightText>Got it</ButtonLightText>
                    </PrettyButton>

                    <PrettyButton style={{backgroundColor: '#8b2000', marginTop: 10}}>
                        <ButtonLightText>Darn it</ButtonLightText>
                    </PrettyButton>

                </CardView>

            </ContainerCentered>
        )
    }
}
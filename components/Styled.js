import styled from 'styled-components'

export const ContainerCentered = styled.View`
        display:flex;
        flex: 1;
        flex-direction: column;
        background: white;
        justify-content: flex-end;
        padding: 20px;
        padding-top: 0;
`

export const TitleText = styled.Text`
        font-size: 24px;
        color: black;
`

export const PrettyButton = styled.TouchableOpacity`
        padding: 15px 20px 15px;
        margin-top: 20px;
        min-width: 100%;
        color: #fff;
        border: none;
        border-radius: 5px;
`
export const ButtonLightText = styled.Text`
        color: #fff;
        font-size: 14px;
        text-align: center;
`


export const CardView = styled.View`
        background-color: white;
        shadow-color: rgb(209, 216, 222);
        shadow-offset: 3px;
        height: 50%;
        width: 90%;
        border-radius: 2px;
        padding: 20px;
`

export const Input = styled.TextInput`
        background-color: #fff;
        width: 100%;
        margin: 5% 0 5%;
        padding: 20px;
        padding-bottom: 10px;
        padding-top: 10px;
        border-radius: 3px;
        border-width: 1px;
        border-color: rgb(209, 216, 222);
`

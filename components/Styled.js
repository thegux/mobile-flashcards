import styled from 'styled-components'

export const ContainerCentered = styled.View`
        display:flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        align-items:center;
`

export const TitleText = styled.Text`
        font-size: 30px;
        margin-bottom: 20px;
        color: black;
        text-align: center;
`

export const PrettyButton = styled.TouchableOpacity`
        padding: 10px 20px 10px;
        margin-top: 20px;
        min-width: 80%;
        color: #FFFFFF;
        border: 4px;
        border-color: white;
        border-radius: 10px;
`
export const ButtonLightText = styled.Text`
        color: #FFFFFF;
        font-size: 14px;
        text-align: center; 
`


export const CardView = styled.View`
        background-color: white;
        shadowColor: rgb(209, 216, 222);
        shadowOffset: 3px;
        height: 50%;
        width: 90%;
        border-radius: 2px;
        padding: 20px;
`

export const Input = styled.TextInput`
        background-color: #FFFFFF;
        width: 90%;
        margin: 20px;
        margin-top: 0;
        padding: 20px;
        padding-bottom: 10px;
        padding-top: 10px;
        border-radius: 3px;
        border-width: 1px;
        border-color: rgb(209, 216, 222);
`
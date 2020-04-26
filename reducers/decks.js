import {RECEIVE_DECKS, REMOVE_DECK, ADD_CARD, ADD_DECK} from '../actions/decks'

export default function decks(state=[], action){
    switch(action.type){
        case RECEIVE_DECKS:
            const decks = action.decks
            return state.concat(Object.keys(decks).map((d) => decks[d]))
        case REMOVE_DECK:
            return state.filter((d) => d.title !== action.title)
        case ADD_DECK:
            action.title = {title: action.title, questions: []} 
            return state.filter((d) => d.title === action.title).concat(action.title)
        case ADD_CARD:
            const deck = state.filter((d) => d.title === action.title)[0]
            deck.questions.concat({question: action.question, answer: action.answer})
            return state.filter((d) => d.title === action.title).concat(deck)         
    }
}
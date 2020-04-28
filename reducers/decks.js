import {RECEIVE_DECKS, REMOVE_DECK, ADD_CARD, ADD_DECK} from '../actions/decks'

export default function decks(state={}, action){
    switch(action.type){
        case RECEIVE_DECKS:
            return {
              ...state,
              ...action.decks,
            }
        case ADD_DECK:
            return {
              ...state,
              [action.title]: {title: action.title, questions: []}
            }
        case REMOVE_DECK: {
            delete state[action.title];
            return {
                ...state
            }
        }    
        case ADD_CARD:
          const deck = state[action.title]
          return {
          ...state,
          [action.title]: {...deck, questions: deck.questions.concat({question: action.question, answer: action.answer})}
        }
    }
}

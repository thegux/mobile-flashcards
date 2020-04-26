const FLASHCARDS_STORAGE_KEY = 'FLASHCARDS_STORAGE_KEY'
import {AsyncStorage} from 'react-native'

export const clearAsyncStorage = async() => {
    AsyncStorage.clear();
}

export const fetchDecks =  () => {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then((response) => JSON.parse(response))
}

export function createDeck(title) {
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}

export function deleteDeck(title){
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[title] = undefined
            delete data[title]
            AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
        })
}

export function createCard({title, question, answer}){
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[title].questions = data[title].questions.concat({question, answer})
            AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
        })
}

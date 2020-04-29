
# Mobile-Flashcards

This App allows users to create decks and quizes. It was developed as an assessment of the React Native's section of the React Nanodegree of Udacity.


## To launch the project, you'll need to:

  `yarn install`
  `yarn start`

## How this code works

The App component contains React Navigation implementation, as well as a custom status bar and sets the notifications when the app is first launched.

The first route is the Deck Container component, which is a view responsible for displaying the list of created decks.

The second route is the New Deck component, which allows the user to create new decks.

By creating a deck, you are redirected to a Deck component. This component allows the user to create new questions (cards), to start a quiz if the deck has questions and to delete the deck.

The Card component is responsible for displaying the question, or the answer if the user requests it. It goes inside of the Quiz Component which is responsible for handling the users's responses, and to display then at the end of the quiz with a score using the Quiz Score Component.

The code also has a Fallback component which tells the user to restart the app in case something happens. This was created in order to prevent warnings with Error Boundaries in React.

Notification code can be found in helpers.js.
AsyncStorage logic can be found in api.js

The app was tested both in Android and iOS devices.

## Image References

Drawables were collected from unDraw.

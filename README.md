# Wordle Explorer
This is a Wordle clone implemented in React. 
It is a word guessing game where players have six attempts to guess a five-letter word. Each letter in the word is represented by a colored box, and the colors change depending on the correctness of the guess.

### The components in this app are:

App: The main component that initializes the game state and provides context to the other components.

Board: Renders the board with rows and letter positions for each attempt.

Keyboard: Renders the on-screen keyboard for users to click and interact with.

Key: A single key component for the keyboard.

Letter: A single letter component representing the letter in a specific position on the board.

GameOver: A component that displays the game over message and prompts the user to play again.


### The helper functions and data structures used are:

boardDefault: A 2D array representing the initial empty state of the board.
generateWordSet: Asynchronously fetches a list of words from a text file, creates a Set of those words, and randomly selects one as the word for the current game.
The logic of the game is implemented through the following functionalities:

onEnter: Checks if the current attempt is correct and if the game is over, updating the game state accordingly.

onDelete: Removes the last selected letter from the current attempt.

onSelectLetter: Adds a selected letter to the current attempt.


The game also handles keyboard input events for entering letters, deleting letters, and submitting the current attempt. The app uses the AppContext to share state and callback functions among components.
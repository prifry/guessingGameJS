# Secret Number Game
# Project Overview
This project is a simple web-based game where the user tries to guess a randomly generated "secret" number between 1 and 10. The game provides feedback on whether the guess is too high or too low, and the number of attempts made. The game uses basic HTML, CSS, and JavaScript, with the added feature of audio feedback provided by the ResponsiveVoice API.

# Features
Random Number Generation: A new random number is generated each game, ensuring unique rounds.
Feedback System: The app displays messages in the HTML to guide the player (e.g., "Too high," "Too low," "Correct!").
Audio Support: Voice feedback is provided using the ResponsiveVoice API.
Restart Option: Users can restart the game at any time, resetting the secret number and attempt count.
Responsive Design: The layout adjusts to various screen sizes, offering an optimized mobile experience.
Files
# 1. index.html
The HTML file contains the game's structure, including:
A title, heading, and message area for dynamic content.
Input and buttons for user interaction.
A link to the responsivevoice.js script for audio output.

# Key elements:
input[type="number"]: where the player enters their guess.
button with onclick events for guessing and restarting the game.
# 2. app.js
This JavaScript file contains all the game logic:

# Global Variables:
listOfSecretNumber: Tracks generated numbers to avoid repetition.
maxNum: Sets the maximum number (10).
secretNum: Holds the generated secret number.
tries: Counts the number of attempts the user has made.

# Functions:
showTextInBrowser(htmlTag, text): Updates HTML elements with text and provides voice feedback.
showStartingMessage(): Displays the game's introductory message.
verifyGuess(): Checks if the user's guess matches the secret number, giving appropriate feedback.
createRandomNumber(): Generates a unique secret number.
cleanBox(): Clears the input box after each guess.
restartGame(): Resets the game variables and disables the "New Game" button.
# 3. style.css
The CSS file provides the game's styling:
Background: Gradient color background and a semi-transparent overlay.
Responsive Design: Styles adjust to smaller screens, hiding unnecessary elements on mobile.
Button and Input Styling: Styles for primary colors and rounded corners for better user experience.
Requirements
ResponsiveVoice API: Ensure a working internet connection to access the API for voice feedback.
Modern Browser: Optimized for Chrome, Firefox, and other recent browsers.
How to Run the Game
Clone the repository or download the files.
Open index.html in a web browser.
Enter a number between 1 and 10, then click "Guess."
Feedback will be displayed and read aloud by the voice API.
To restart, click "New Game."
# Enjoy the game!  

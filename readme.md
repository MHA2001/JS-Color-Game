# Color Guessing Game

A web-based color guessing game where the player must identify the correct color from a set of options based on a given color string. The game supports different color formats (RGB, Hex, HSL) and difficulty levels.

---

## Purpose of the Project

This project was developed as a fun and challenging exercise to deepen my understanding of front-end development, particularly in manipulating colors, handling user input, and managing application state. The core focus was to build a dynamic and interactive game interface from scratch.

## Technology Stack

* **Front-End:** Vanilla JavaScript (ES6+), HTML5, CSS3
* **Bundler:** Vite 

---

## Features

* **Multiple Color Formats:** Players can choose to play with RGB, Hex, or HSL color formats.
* **Adjustable Difficulty:** The game offers three difficulty levels (Easy, Medium, Hard) that control the similarity of the incorrect colors, making the game more or less challenging.
* **Dynamic Grid:** The game board dynamically generates a grid of color buttons based on the selected settings.

---

## Important Decisions

* **Object-Oriented Design:** The project uses an object-oriented approach by creating classes for each color format (`Rgb.js`, `Hex.js`, `Hsl.js`). These classes handle the logic for generating random colors and converting them to CSS strings, which keeps the main `script.js` file clean and focused on game logic and UI manipulation.
* **CSS Grid for Layout:** The color grid is laid out using CSS Grid, which simplifies the creation of a flexible and responsive grid of buttons without needing complex CSS floats or flexbox hacks.
* **Separation of Concerns:** The core logic for generating colors and their "similar" variations is encapsulated in `utils.js`, which can be reused in other projects.

---

## Problems & Solutions

### Roadblock: Generating "similar" colors for different difficulty levels.

* **Problem:** It was challenging to generate colors that were close enough to the correct answer for the "hard" difficulty but visibly different enough for "easy."
* **Solution:** I created a `randomValueInRange` utility function in `utils.js` that takes a starting value and tolerance as input. This function allows me to generate new color values that fall within a specified range of the correct color's values. By adjusting the tolerance based on the selected difficulty, I was able to create distinct and reliable difficulty levels.

---

## Future Enhancements

* Add a timer and a scoring system to track player performance.
* Implement a "win/lose" screen with an option to play again.
* Include a way to share a specific color challenge with a friend.
* Add more color formats like CMYK.
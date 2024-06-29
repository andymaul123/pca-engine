# PCA-Engine
A framework for building Point-and-Click Adventure games in the web browser.

Uses NodeJS & Express as the back-end, and HTMX & Vanilla JS on the front-end.

**Current Status:** Proof of Concept
![Animation](https://github.com/andymaul123/pca-engine/assets/6220616/2ab61fa3-8099-447e-86d2-775b322a7527)

## Installation
- `npm install`
- `npm run-script css` compiles `.scss` files
- `npm start` starts the server at `localhost:3000`

## History
PCA-Engine originally started as an exploration of [htmx](https://htmx.org/). In the past I've made different Text Adventure games, and it felt like a natural progression to move to graphical Point-and-Click as my next iteration.

## Playing the Demo

From the title screen, choose either New Game or Load Game. Load Game will be disabled until you have a save file.

You can navigate the scenes by mousing over them. Interactable areas will be highlighted on mouseover.

You can change your context by right-clicking in the game area to spawn a context menu. Right now you can:

- Look
- Move
- Talk

You can also Use Items from the Inventory Menu as a fourth context. Try using the Sword on a brittle window!

Music volume can be adjusted in the Main Menu, along with the ability to save your progress.

There are three rooms, currently.
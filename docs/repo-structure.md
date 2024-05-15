# Repository Structure
A breakdown of the directories and organization plan.

The app entry point is found in `app.js` in the root directory.

## Assets
Specifically set up to serve static assets with Express. Routes hide the /assets/ portion and can be reached by their sub-directory such as /image or /css.

### Audio
Music and sound effects.

### CSS
Compiled CSS used by the browser.

### Fonts
Fonts, both used by code and any that are used in assets purely for tracking.

### Image
All image assets used by the project.

### JS
Client-side JavaScript files.

## Constants
Useful information accessed by server-side JS.

## Controllers
All of the files containing server-side "game logic", organized by domain. Maps 1-1 to models organization.

## Docs
Documentation for the project. Self-explanatory.

## Models
All of the files containing "game data", organized by domain. Maps 1-1 to controllers organization.

## Routes
Express route files for handling navigation. Maps to domain organization like in models/controllers.

## Styles
SCSS partials that eventually compile into the assets/css directory.

## Types
JSDoc type definitions for the game data in /models.

## Views
EJS partials and html files that are filled with data and served.
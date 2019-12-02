# Clicky Game - [It's Always Sunny in Philadelphia themed](https://charlesdanner.github.io/ClickyGame/)

## Introduction
 A front end application that uses the React library in order to render the contents of the page, update the state of the application, and take advantage of unilateral data flow to update stateless components. 

## Authors

- Charles Danner - [GitHub Profile](https://github.com/charlesdanner)

## Technologies Used
- node.js
- BootStrap
- React.js

## How it works!

React.js is technically a library, but unlike normal JavaScript libraries like Jquery where the idea is to simply refer to the library to use different bits of functionality, React.js acts more like a framework. React allows the different individual pieces of the webpage to be rendered as individual components and for each component to be updated as the client interacts with it. This is done through declaring and updating the state of the application. 

For Clicky Game, the state is simply keeping track of the order that the different cards are in, the number of correct guesses the user has made during this particular round as well as the highest score that the user has achieved. Updating the state, then sends a unilateral data flow down the component tree into the stateless components for the read only values to be updated. An example of this would be the scoreboard being updated. The state of the application is being stored at the highest level of the application and sends the data down the the tree to the scoreboard. 

This is a great way to manage the application, because traditionally with vanilla javascript we would need to rerender entire portions of the webpage. Whether that be entire lists, divs or pages; however, with React this is not neccessary. React manages what is called the 'virtual DOM' and is constantly referencing it as well as the actual DOM to see if there are any discrepencies. If there are, it rerenders whatever is updated in the most efficient way possible. This is great from a client's perspective, because it makes the webpage seem more responsive.

While React does the majority of the heavy lifting of the webpage, I did use some basic Bootstrap in order to get the webpage styled more easily.

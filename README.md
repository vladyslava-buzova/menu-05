
# React + Vite

## React Project "Menu"
[ProjectLink](https://vladyslava-buzova.github.io/menu-05/)

## Figma URL
[Menu](https://www.figma.com/file/Qa5rpK8oNbj7rb1ZW7fttX/Menu?type=design&node-id=0-1&mode=design&t=EbnlxWboMcLLKBfF-0)

## Steps:
1. Created a Title component to display the app title.
2. Imported the menu items data from data.js into your project.
3. Set up the menu items data as a state variable in the App.jsx component.
4. Passed the menu items state value down to the Menu.jsx component and rendered a MenuItem component for each item in the menu items array.
5. In the MenuItems component, display the image, title, price, and description.
6. Set up functionality to get only the unique categories from the menu items data and store them in a separate array, including an "all" category to display all menu items.
7. Set up the categories array as a state variable in the App.jsx component.
8. Created a Categories component and render a button for each category in the categories array.
9. Defined a function that took a category as a parameter and updated the state to show only the menu items that belong to that category.
10. Attached the filter function to the category buttons in the Categories component.
11. Repeated steps 9-10 until the user has selected a different category or chooses to exit the Menu component.

## How to launch a project:
1. Clone the repo.
git clone the-link-from-your-forked-repo.
2. Check your Node.js version.
node -v
3. Run VSCode and open the project folder.
4. Open a terminal in the project folder.
5. Run 'npm install' (or just npm i) to install the dependencies.
6. Run 'npm run dev' to start the project.

#### Set Object
In JavaScript, the Set object is a collection of unique values. It allows you to store values of any type, such as primitive types (numbers, strings, booleans) and object references.

Here's a simple example of using a Set:

```js
// Create a new set
let mySet = new Set();

// Add values to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);

// Add a duplicate value (ignored)
mySet.add(1);

// Get the size of the set (3)
console.log(mySet.size);

// Check if a value is in the set (true)
console.log(mySet.has(2));

// Remove a value from the set
mySet.delete(2);

// Get an array of all values in the set
let myArray = Array.from(mySet);
console.log(myArray); // [1, 3]
```

```js
const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];
console.log(tempItems);
```


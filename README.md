# FE Capstone Project: Recipe Finder

## Project Overview
As a frontend developer, I am designing and implementing a **Recipe Finder** application using **HTML**, **CSS**, **JavaScript**, **React**, and **Tailwind CSS**. The application will allow users to search for recipes based on dish names and view detailed information about each recipe, such as ingredients and preparation instructions.

For this project, I will utilize the free API from **TheMealDB** to fetch and display recipe data. This project will help me practice integrating an external API, managing state, and creating a responsive and visually appealing user interface.

## Functional Requirements

### Fetch Recipe Data:
- I will use the provided endpoint from **TheMealDB API** to fetch recipe data based on user queries.
  - Example endpoint: [https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata](https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata)
- The app will display a list of recipes that match the search criteria, showing key information such as:
  - **Recipe Image**: A thumbnail image representing the dish.
  - **Recipe Title**: The name of the recipe.
  - **Category**: The category of the dish (e.g., Main Course, Dessert).
  - **Cuisine**: The cuisine or region of the dish (e.g., Italian, Chinese).

### Recipe Details View:
- When a user clicks on a recipe from the list, the app will display a detailed view with additional information, including:
  - **Full Ingredient List**: All ingredients required for the recipe, with quantities.
  - **Preparation Instructions**: Step-by-step instructions for preparing the dish.
  - **YouTube Video**: An embedded video (if available) that demonstrates how to prepare the dish.
  - **Source Link**: A link to the full recipe on TheMealDB website.

### Search Functionality:
- I will implement a search bar that allows users to search for recipes by dish name (e.g., “Arrabiata”).
- The app will handle cases where no recipes match the search query by displaying a user-friendly message.

### Responsive UI Design:
- I will use **Tailwind CSS** to create a responsive design that adapts to different screen sizes (e.g., desktop, tablet, mobile).
- The recipe list and details view will be easy to navigate and visually appealing on all devices.

### Error Handling:
- I will implement error handling for scenarios such as network issues, invalid API responses, or no search results.
- The app will display user-friendly messages or alerts when errors occur.

## Technical Requirements

### Project Setup:
- I will set up a React project using tools like **vite** or configure a custom setup.
- I will install and configure **Tailwind CSS** for styling, or use another CSS framework if preferred.

### API Integration:
- I will use **fetch** or **axios** to request data from **TheMealDB API** and handle asynchronous data fetching.
- The fetched recipe data will be displayed in a structured and visually appealing format.

### User Interface Components:
- I will create reusable components for the recipe list and recipe details, such as **SearchBar**, **RecipeCard**, and **RecipeDetails**.
- I will design a cohesive layout using **TailwindCSS**, ensuring consistency in colors, typography, and spacing.

### State Management:
- I will use React’s state management hooks (**useState** and **useEffect**) to handle data fetching, user input, and UI updates.
- Optionally, I may explore more advanced state management tools like **Zustand**, **Redux**, or **mobx-state-tree** if the application grows in complexity.

### Deployment:
- I will deploy the completed application on a free hosting platform like **Netlify** or **Vercel**.
- I will ensure the application is accessible and performs well in the deployed environment.
- I will share the deployment link as part of my project submission.

## Stretch Goals (Optional)

### Favorites List:
- I will implement a feature that allows users to add recipes to a personal favorites list, stored in local storage.

### Shopping List:
- I will allow users to add ingredients from a recipe to a shopping list, with an option to edit quantities and print the list.

### Recipe Categories:
- I will add predefined categories (e.g., Desserts, Appetizers, Main Course) and allow users to browse recipes by these categories.

### Dark Mode:
- I will add a dark mode feature to provide a better user experience in low-light conditions.

## Installation

1. Clone the repository: `git clone https://github.com/username/Recipe-Finder.git`
2. Navigate into the project directory: `cd Recipe-Finder`
3. Install dependencies: `npm install`
4. Run the project locally: `npm start`

## Deployed Project
Check out the deployed version here: [Link to Deployed Project]

## License
This project is licensed under the MIT License.

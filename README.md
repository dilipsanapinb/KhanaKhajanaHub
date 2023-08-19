# KhanaKhajanaHub
Welcome to KhanaKhazanaHub, your gateway to a world of culinary delights infused with the rich tapestry of Indian flavors. Whether you're a seasoned home cook or a kitchen novice, our app is your trusted companion for exploring, creating, and savoring a diverse array of mouthwatering dishes.

# Tech stacks 
## Backend:
- Node.js
- Express.js
- Sequelize
- MySQL
- AWS RDS(for storing the data on cloud)
- spoonacular api : https://api.spoonacular.com/recipes

## Deployed link of the backend
- Deployed on render may take time to get a data
- https://khanakhazana-yqj7.onrender.com/

## Deployed link of the full stack app with the backend link
-https://subtle-baklava-e54a44.netlify.app/ 

## Frontend
- React.js 
- Chakra UI
- HTML
- CSS

# Key features:
- Landing Page: Engaging landing page to introduce users to your app.
- Authentication(Login/Signup): User login and signup functionality for personalized experiences.
- Recipe Page: Browse through a collection of recipes with pagination.
- Recipe Details: Explore recipe details including ingredients and cooking steps.
- Save recipe: Save your favorite recipes for quick access.
- Delete saved Recipe: Remove recipes from your saved collection.
- Search function: Search for recipes by various criteria, such as cuisine, diet, type, etc.
- API rate limit: Implement rate limiting to manage API usage and prevent abuse.

Feel free to explore, cook, and enjoy the culinary journey with KhanaKhazanaHub!

## Getting Started

To get started with KhanaKhazanaHub, follow these steps:

1. Clone this repository.
2. Install the required dependencies for both the frontend and backend by running command npm install.
3. Set up the database configurations.
4. Create account on spoonacular api and get a api key to fetch the recipes data
4. Run the backend server with command npm start
5. Run the backend server with command npm start


## Live demonstration of app:
<a href="https://youtu.be/KJvdKfs7l1U">Link for the Live demonstration</a>


# API information

## Basic route
- GET https://khanakhazana-yqj7.onrender.com/
## User Routes:

#### Get All Users
- GET /user/api/users

#### Registe the user
- POST /user/api/register

#### Login the user
- POST /user/api/login


## Recipes Routes

#### Gel All recipes
- GET recipe/
#### Get recipe details by id
- GET recipe/:id

#### get nutrients of recipe by id
- GET /recipe/:id/nutrients

#### search recipe by query
- Get /recipe/api/recipes/search


## Save the favourite recipes to backend

#### Get all saved recipes by userId
- GET savedrecipe/

#### Save the favourite racipe
- POST /savedrecipe/save

### delete the saved recipe
- DELETE /savedrecipe/:recipeid/delete


## Google OAuth

#### Get tha user

GET /auth/google/callback



# Frontend Guidence:

1. ## Landing Page
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Landing%20Page.png" alt="langing Page"></img>

2. ## Drawer
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Drawer%20on%20right%20side.png" alt="Drawer Page"></img>

3. ## Login Page
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Login%20Page.png" alt="Login Page"></img>

4. ## Signup Page
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Sign%20Up%20Page.png" alt="Signup Page"></img>

5. ## Recipes Page
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Recipes%20page1.png" alt="Recipes Page"></img>
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Pagination.png" alt="Recipes Page"></img>

6. ## Search Bar
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Search%20bar.png" alt="search Page"></img>

7. ## RecipeDeatails Page
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Recipe%20details1.png" alt="details Page"></img>
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Recipe%20Details2.png" alt="details Page"></img>
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Recipe%20details3.png" alt="details Page"></img>
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Recipe%20details4.png" alt="details Page"></img>

8. ## Saved Recipes Page
<img src="https://github.com/dilipsanapinb/KhanaKhajanaHub/blob/main/Images/Save%20recipes%20page.png" alt="saved recipes Page"></img>





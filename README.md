# Weather-App Documentation

## Project Description
This project is a weather application that allows users to retrieve weather information for different cities. It also provides user registration and login features.

## Frontend
- **Frontend Deployment Link:** [Weather App Frontend](https://weather-msk.netlify.app/)
- **Tech Stack:**
  - React.js: A front-end framework for building user interfaces.
  - React Navigation: Used for navigation within the application.
  - CSS: Styles and responsive design for the components.
- **Components:**
  1. **Navbar (Nav.jsx)**
     - Displays navigation links based on the user's authentication status.
     - Provides links to view weather, Home, Signup, login, view the user's weather searches, and log out.
     - Responsive design for small and medium-sized screens.
  2. **Sign Up (SignUp.jsx)**
     - Allows users to register by providing their name, email, password (with JWT and hashing), and city.
     - Validates user input and displays error messages.
     - Navigates to the dashboard after successful registration.
  3. **Login (Login.jsx)**
     - Allows registered users to log in using their email and password.
     - Validates user credentials and displays an error message for invalid inputs.
     - Navigates to the dashboard after successful login.
  4. **Weather Search (SearchCard.jsx)**
     - Allows users to search for weather by city name.
     - Responsive design for small screens and medium-sized screens.
  5. **Searched City Weather by User (GetSearches.jsx)**
     - Allows users to view all searched city weather by the user.
     - Displays error messages for invalid inputs.
     - Responsive design for small and medium-sized screens.

## Backend
- **Backend Deployment Link:** [Weather App Backend](https://weather-app-sw7g.onrender.com)
- **Tech Stack:**
  - Node.js: A JavaScript runtime environment for building server-side applications.
  - Express: A web application framework for Node.js, used for building robust APIs.
  - Redis: In-memory data store for data retrieval and caching.
  - MongoDB Atlas: A cloud-based database service for data storage.
- **API Documentation:**
  - Detailed API documentation can be found in the [API Documentation](Backend/readme.md).

## Installation
To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/MSaifKhan01/WEATHER-APP.git`
2. Navigate to the project directory: `cd my-react-app`

### Frontend (React.js)
3. Navigate to the frontend directory: `cd my-react-app`
4. Install frontend dependencies: `npm install`
5. Start the development server: `npm start`

### Backend (Node.js, JWT, Express, MongoDB, Redis)
6. Navigate to the backend directory: `cd backend`
7. Install backend dependencies: `npm install`
8. Start the backend server: `npm run server`

## API Routes
The project utilizes the following API routes:

| Route               | Description                    | Method | Rate Limit                  | Requires Authentication |
|---------------------|--------------------------------|--------|-----------------------------|-------------------------|
| `/user/register`    | User registration               | POST   | No                          | No                      |
| `/user/login`       | User login                      | POST   | No                          | No                      |
| `/city`             | Get weather data for a city     | GET    | 3 requests per 15 minutes  | Yes                     |
| `/city/usercity`    | Get user's visited cities       | GET    | 3 requests per 15 minutes  | Yes                     |


## Middleware
### Authentication Middleware (auth)
- Description: Validates user authentication by checking the provided token.
- Applied to routes: `/city`, `/city/usercity`
- Requires Authentication: Yes

### Rate Limiting Middleware (limiter)
- Description: Limits the number of requests per IP address to prevent abuse.
- Applied globally to all routes.
- Rate Limit: 3 requests per 15 minutes

## Environment Variables
- `PORT`: The port on which the server listens.
- `MONGODB_URI`: MongoDB database connection URI.
- `SECRET_KEY`: Secret key for JWT authentication.

## Contact
If you have questions or feedback, feel free to reach out on [LinkedIn](https://www.linkedin.com/in/mohd-saif-khan-3b4979202/).

Thank you for using our Weather App!

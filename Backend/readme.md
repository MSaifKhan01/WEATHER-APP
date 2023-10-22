## API Documentation

The API documentation provides details on how to interact with the project's API endpoints. Below, you will find information about each API route, including their descriptions, methods, request parameters, and response formats.

### User Routes

1. **User Registration**
   - **Route:** `/user/register`
   - **Method:** POST
   - **Description:** Allows users to register by providing their name, email, password, and preferred city. If the user already exists, they are redirected to log in.
   - **Requires Authentication:** No

2. **User Login**
   - **Route:** `/user/login`
   - **Method:** POST
   - **Description:** Allows registered users to log in using their email and password. If successful, a token is provided for authentication.
   - **Requires Authentication:** No

### Weather Routes

3. **Get Weather Data**
   - **Route:** `/city`
   - **Method:** GET
   - **Description:** Retrieves weather data for a city. If cached data is available, it is returned; otherwise, a new request is made to retrieve data.
   - **Requires Authentication:** Yes

4. **User's Visited Cities**
   - **Route:** `/city/usercity`
   - **Method:** GET
   - **Description:** Retrieves a list of cities visited by the user.
   - **Requires Authentication:** Yes

These simplified descriptions provide an overview of the API routes in the project. You can further expand on this documentation as needed and add details about request parameters, response formats, and other specific information.

## Middleware

1. **Authentication Middleware (auth)**
   - **Description:** Validates user authentication by checking the provided token.
   - **Applied to routes:** `/city`, `/city/usercity`
   - **Requires Authentication:** Yes

2. **Rate Limiting Middleware (limiter)**
   - **Description:** Limits the number of requests per IP address to prevent abuse.
   - **Applied globally to all routes.
   - **Rate Limit:** 3 requests per 15 minutes

## Environment Variables

- `PORT`: The port on which the server listens.
- `MONGODB_URI`: MongoDB database connection URI.
- `SECRET_KEY`: Secret key for JWT authentication.

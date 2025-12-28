A secure Short URL Generator built using JavaScript and Node.js, with MongoDB (Mongoose) as the database. The application uses JWT-based authentication to ensure that only logged-in users can access protected routes. Each authenticated user can create short URLs, and the system maintains a user-specific mapping, allowing users to view and manage only the short URLs they have generated. The project follows a modular backend architecture with middleware-based authentication and authorization.

🛠️ Tech/ Tools Used

Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Authentication: JSON Web Tokens (JWT)
Features: User authentication, short URL generation, user-specific URL tracking


/* This code will run on localsystem */ 

Apps require - 
MongoDB (to run the mongosh in local device for database)
VSCode for terminal to run the node index.js file in main foler

you need to go to the http://localhost:8001/signup, http://localhost:8001/login

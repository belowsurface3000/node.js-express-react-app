# a basic Node.js, Express and React App
A project for practicing connecting front- with backend using Node.js, Express and React

## How to install and run it on your machine:
1. $ git clone https://github.com/belowsurface3000/node.js-express-react-app.git
2. $ cd node.js-express-react-app/
3. $ cd backend
4. $ npm i
5. $ nodemon server or $ node server -> the Server is now listening to port 3002
6. open a new terminal for the "frontend" directory and do not close the old one
7. inside /frontend do $ npm i
8. $ npm start

## Data
The data for the satellites and planets is stored in the backend files planets-dataset.js and satellites-dataset.js (objects).

## Server
A Node.js server with express. It is configured to allow Cross-Origin Resource Sharing, if the server runs on 3002, but the react live server on 5000 for example.
Express Router is used to handle routing.

## Frontend
The frontend is a basic react layout with a minimum of focus on the design. This project is about the connection of front- and backend.
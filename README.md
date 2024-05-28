# Chat App

## Description
Chat App is a real-time messaging application that allows users to create accounts, sign in, search for other users, and send/receive messages in real-time. It provides a seamless and interactive chatting experience.

## Technologies Used
- **bcrypt:** A password hashing function used for securely storing passwords.
- **body-parser:** Middleware for parsing incoming request bodies in Express.js.
- **cors:** Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js, allowing the frontend and backend to communicate securely.
- **react-hot-toast:** A toast notification library for React.js that provides customizable and easy-to-use notifications.
- **react-icons:** A library of customizable icons for React applications.
- **React.js:** A JavaScript library for building user interfaces, providing a component-based architecture for creating interactive UIs.
- **tailwindCss:** A utility-first CSS framework for building custom designs quickly and efficiently.
- **Vite:** A build tool that provides fast development server and optimized production build for modern web apps.
- **DaisyUi:** A lightweight, accessible, and customizable UI library for React.js, providing a set of pre-designed components.
- **Zustand:** A small, fast, and scaleable state management library for React applications, offering a simple API for managing application state.
- **Socket.io:** A library for real-time web applications, enabling bidirectional communication between clients and servers over WebSocket.
- **Socket.io-client:** The client-side library for Socket.io, allowing communication between the frontend and backend in real-time.
- **React Hooks:** A feature introduced in React 16.8 that allows developers to use state and other React features without writing a class.
- **React Context:** A feature in React that provides a way to share values between components without having to explicitly pass props through every level of the tree.
- **Express:** A web framework for Node.js, providing a robust set of features for building web and mobile applications.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution to model application data.

## Project Features
- **Create Account:** Users can create their accounts securely.
- **Signin:** Existing users can sign in to their accounts.
- **Logout:** Users can log out of their accounts.
- **See Online Users:** Users can see who is currently online.
- **Search for Users:** Users can search for other users to start a conversation.
- **Real-time Messaging:** Users can send and receive messages instantly, enabling real-time

## Run Project:

- **Setup env file:**
```
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```

**Notes about this step:** <br>
- PORT: The port indicates which port the project is gonna run locally.Example:
``
PORT= 5000
``
- MONGO_DB_URI: Create a mongo database and paste the URI address. You will find this information in the [mongodb site](https://www.mongodb.com/).<br>
  Access your project folder -> Overview -> Clusters -> Connect -> MongoDB for VsCode -> Paste connection string in env file.<br>
  The connection string should follow this format:
  ``
  mongodb://username:password@cluster01.example.com:27017/mydatabase
  ``
   <br>
- JWT_SECRET: To generate a jwt secret create a long good password. (Example: 8Zz5tw0Ionm3XPZZfN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb ( dont use this one for - security reasons) )<br>
- The NODE_ENV values indicates if the project is in development mode(running locally) or production(deployed), use the values "development" or "production" here.<br>
<br>

- **Build the project:**
```
npm run build
```
<br>

- **Start the app:**
```
npm start
```
<br>

- **Access the project address choosed in the env file( PORT value ) :**

Example:
```
http://localhost:5000/
```

## Take a look in the  project:

  **Register and Login Page:**
  
  <img src="https://github.com/Gabianchini/chat-app/blob/main/register-login.gif" width="550px" alt="Register and Login page">
<br>

 **Conversation in Real time:**
 
 <img src="https://github.com/Gabianchini/chat-app/blob/main/conversation.gif" width="550px" alt="Conversation in real time feature">
 <br>

 **Search for user and Logout**:

  <img src="https://github.com/Gabianchini/chat-app/blob/main/search-logout.gif" width="550px" alt="Search for user and Logout feature">

<br>

## Documentations:
- [Socket.io](https://socket.io/docs/v4/tutorial/introduction)]
- [ReactHot Toast](https://react-hot-toast.com/)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Vite](https://vitejs.dev/guide/)
- [DaisyUI](https://daisyui.com/docs/install/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/docs/guide.html)
- [Guide](https://www.youtube.com/watch?v=HwCqsOis894&t=741s)


# Contacts App

This is a frontend and backend code for a Contacts App. The frontend is built using React and the backend is implemented using Node.js with MongoDB as the database.

## Frontend

The frontend code is written in React and uses React Router for handling routing. It has two main pages: ContactListPage and ContactFormPage. The ContactListPage displays a list of contacts, and the ContactFormPage is used for creating and editing contacts.

### Installation

To run the frontend code, follow these steps:

1. Install Node.js and npm (Node Package Manager) on your system if they are not already installed.
2. Open a terminal or command prompt and navigate to the directory where the frontend code is located.
3. Run the following command to install the required dependencies:

   ```
   npm install
   ```

4. After the dependencies are installed, run the following command to start the development server:

   ```
   npm start
   ```

   This will start the React development server, and you can access the app in your web browser at `http://localhost:3000`.

### Code Explanation

The `App` component is the main component that sets up the routing for different pages. It uses the `react-router-dom` library for handling routing. The `ContactListPage` and `ContactFormPage` components are rendered based on the URL path.

The navigation bar is implemented using the Bootstrap framework, and it contains links to the Contacts page and the Create Contact page. Clicking on these links will navigate to the corresponding pages.

The `ContactListPage` component is responsible for displaying the list of contacts. The `ContactFormPage` component is used for creating new contacts as well as editing existing contacts. The routes for these pages are defined using the `Route` component from `react-router-dom` in the `App` component.

## Backend

The backend code is written in Node.js and uses the Express framework for building the API. It interacts with a MongoDB database using the Mongoose library.

### Installation

To run the backend code, follow these steps:

1. Install Node.js and npm (Node Package Manager) on your system if they are not already installed.
2. Open a terminal or command prompt and navigate to the directory where the backend code is located.
3. Run the following command to install the required dependencies:

   ```
   npm install
   ```

4. Make sure you have MongoDB installed and running on your system.
5. Update the MongoDB connection settings in the backend code if necessary (e.g., database URL, authentication credentials).
6. Run the following command to start the backend server:

   ```
   npm start
   ```

   This will start the Node.js server, and it will be accessible at `http://localhost:8080`.

### Code Explanation

The backend code consists of several API endpoints for creating, retrieving, updating, and deleting contacts.

- The `/create` endpoint is used to create a new contact. It performs validations on the request body and saves the contact to the database using the Mongoose `save` method.

- The `/findAll` endpoint retrieves all the contacts from the database and sends them as a response.

- The `/findOne/:id` endpoint retrieves a contact with a specific ID from the database and sends it as a response. It uses the Mongoose `findById` method for querying the database.

- The `/update/:id` endpoint is used to update a contact with a specific ID. It performs validations on the request body and uses the Mongoose `findByIdAndUpdate` method to update the contact.

- The `/delete/:id` endpoint deletes a contact with a specific ID from the database using the Mongoose `findByIdAndDelete` method.

The backend code uses the `db.contacts` model to

 interact with the MongoDB database. It also utilizes a `helpers` module for validating the request body before creating or updating a contact.

Make sure to have the MongoDB server running and accessible for the backend code to work properly.

Note: The frontend and backend code provided here assumes certain directory structures and dependencies. Make sure to set up your project accordingly and install any required dependencies not mentioned explicitly.

Feel free to modify the code as per your requirements and add any additional functionality you need.
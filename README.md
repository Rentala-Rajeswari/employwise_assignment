 

# EmployWise Frontend Assignment

## Overview
This project is a React-based frontend application for user management, integrating with the Reqres API. It allows users to log in, view a paginated list of users, and perform CRUD operations (Edit, Delete) on user data.

---

## Features
1. *Authentication*:
   - Login with a pre-configured email and password.
   - Store the authentication token in localStorage.

2. *User Management*:
   - Display a paginated list of users with details like name and avatar.
   - Edit user details (First Name, Last Name, Email).
   - Delete users from the list.

3. *Additional Enhancements*:
   - Client-side search and filtering.
   - Responsive design for desktop and mobile devices.
   - Navigation implemented using React Router.

---

## Assumptions and Considerations
- The login token does not expire during the session.
- User data updates and deletions are simulated via the Reqres API and are not persisted beyond the session.
- The app is responsive and designed to function on modern browsers.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed on your machine:
- *Node.js*: v14 or higher
- *npm*: v6 or higher (comes with Node.js)
- Optionally, *Yarn* as a package manager.

### Steps to Run the Project Locally
1. Clone the Repository:
   bash
   git clone https://github.com/your-username/employwise-assignment.git
   cd employwise-assignment
   

2. Install Dependencies:
   Using npm:
   bash
   npm install
   
   Or using Yarn:
   bash
   yarn install
   

3. Start the Application:
   Using npm:
   bash
   npm start
   
   Or using Yarn:
   bash
   yarn start
   

4. Open the App in Your Browser:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## API Endpoints Used
All API interactions are handled using the Reqres API:
1. *Login*:
   - Endpoint: POST /api/login
   - Credentials:
     - Email: eve.holt@reqres.in
     - Password: cityslicka

2. *Fetch Users*:
   - Endpoint: GET /api/users?page={page}

3. *Update User*:
   - Endpoint: PUT /api/users/{id}

4. *Delete User*:
   - Endpoint: DELETE /api/users/{id}

---

## Folder Structure

src/
├── components/
│   ├── AuthScreen.js       # Login screen
│   ├── UserList.js         # List users with pagination and delete
│   ├── EditUser.js         # Edit user details
├── services/
│   ├── api.js              # Centralized API logic
├── App.js                  # Main app with routing
├── index.js                # Application entry point
├── App.css                 # Global styles


---

## Running Notes
- Ensure an active internet connection as the app interacts with the Reqres API.
- Any changes (e.g., user edits or deletions) are session-based and will reset upon refresh.

---


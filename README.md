# User Task Management System

## Overview

This system allows an admin to manage users and assign tasks. Users can access their assigned tasks.

### **Admin Features**
- Create users
- Assign tasks to users
- View all users and tasks
- Users can view their assigned tasks

## **API Routes**

### 1. Create a User
**Endpoint:**  
`POST http://localhost:8000/user`

**Request Body:**  
```json
{
  "name": "aniket",
  "email": "aniket@gmail.com",
  "mobile": "9876543210"
}
```

**Response:**  
```json
{
  "message": "User created successfully",
  "value": {
    "name": "aniket",
    "email": "aniket@gmail.com",
    "mobile": "9876543210",
    "_id": "679c4982960512fde5ca12d5",
    "__v": 0
  }
}
```

### 2. Get All Users
**Endpoint:**  
`GET http://localhost:8000/user`

**Response:**  
```json
{
  "message": "All users fetched successfully",
  "value": [
    {
      "_id": "679ba52063c62886504503bf",
      "name": "aniket",
      "email": "aniket@gmail.com",
      "mobile": "123456",
      "__v": 0
    },
    {
      "_id": "679bbe4967cd1962883b0236",
      "name": "aniket1",
      "email": "aniket1@gmail.com",
      "mobile": "123456",
      "__v": 0
    }
  ]
}
```

### 3. Assign a Task
**Endpoint:**  
`POST http://localhost:8000/task`

**Request Body:**  
```json
{
  "title": "Please debug all bugs",
  "userId": "679bbe4967cd1962883b0236"
}
```

**Response:**  
```json
{
  "message": "Task created successfully",
  "value": {
    "userId": "679bbe4967cd1962883b0236",
    "title": "Please debug all bugs",
    "status": "pending",
    "_id": "679c49a7960512fde5ca12df",
    "__v": 0
  }
}
```

### 4. Get All Tasks (Admin)
**Endpoint:**  
`GET http://localhost:8000/task`

**Response:**  
```json
{
  "message": "All tasks fetched successfully",
  "value": [
    {
      "_id": "679bb6eb2eaef03560ad0757",
      "userId": "679ba52063c62886504503bf",
      "title": "Please debug backend",
      "status": "pending",
      "__v": 0
    },
    {
      "_id": "679bb729b38db675897818e5",
      "userId": {
        "_id": "679ba52063c62886504503bf",
        "name": "aniket",
        "email": "aniket@gmail.com",
        "mobile": "123456"
      },
      "title": "Please debug backend again",
      "status": "pending",
      "__v": 0
    }
  ]
}
```

### 5. Get Tasks Assigned to a Specific User
**Endpoint:**  
`GET http://localhost:8000/task/{userId}`

**Example:**  
`GET http://localhost:8000/task/679bbe4967cd1962883b0236`

**Response:**  
```json
{
  "message": "Here are your tasks",
  "value": [
    {
      "_id": "679c499e960512fde5ca12d9",
      "userId": {
        "_id": "679bbe4967cd1962883b0236",
        "name": "aniket1"
      },
      "title": "Please fix UI bugs",
      "status": "pending",
      "__v": 0
    },
    {
      "_id": "679c49a7960512fde5ca12df",
      "userId": {
        "_id": "679bbe4967cd1962883b0236",
        "name": "aniket1"
      },
      "title": "Please review code",
      "status": "pending",
      "__v": 0
    }
  ]
}
```

---

## **Backend Setup**

### 1. Clone the repository  
```bash
git clone https://github.com/aniketkalawat88/user-task-managment.git
```

### 2. Navigate to the project directory and install dependencies  
```bash
cd user-task-managment
npm install
```

### 3. Start the server  
```bash
nodemon server.js
```

---

## **Technologies Used**
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Token-based authentication (if implemented later)
- **Database:** MongoDB with Mongoose ORM

This README provides clear, structured instructions for understanding and setting up the User Task Management System.


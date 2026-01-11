# Lifeline360 – Backend Healthcare Platform

Lifeline360 is a backend-focused healthcare platform designed
to manage users, services, and data through secure and scalable
REST APIs.

This project is built to practice real-world backend architecture
using Node.js and MongoDB.

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Tools: Git, GitHub, Postman

## Project Structure
src/  
├── config/       → Database configuration  
├── controllers/  → Business logic  
├── models/       → Database schemas  
├── routes/       → API routes  
├── middleware/   → Authentication & middleware  
├── utils/        → Utility functions  
└── app.js        → Express app setup  

server.js         → Server entry point  

## Features
- User registration and login
- JWT-based authentication
- Role-based access control (basic)
- RESTful API architecture
- Clean MVC project structure

## Setup Instructions
1. Clone the repository
2. Install dependencies using `npm install`
3. Create `.env` file from `.env.example`
4. Add MongoDB connection string and JWT secret
5. Run the server using `npm run dev`

## Purpose
This project is created for learning and practice purposes
to improve backend development skills and understand
scalable API design.

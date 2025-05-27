# Online Shopping Prototype 🛒

This is a practice full-stack project that serves as a prototype for an online shopping platform. The frontend is built with [Next.js](https://nextjs.org/), the backend with [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/), and the database uses [MongoDB](https://www.mongodb.com/). The project is structured with separate directories for frontend and backend for clear development and deployment.

## 📁 Project Structure
WEBDESIGN/
├── backend_webdev/ # Backend server (Express + MongoDB)
└── webdev/ # Frontend app (Next.js)


---

## 🚀 Tech Stack

| Layer     | Technology       |
|-----------|------------------|
| Frontend  | Next.js, React   |
| Backend   | Node.js, Express |
| Database  | MongoDB          |
| API Comm. | RESTful API      |
| Tools     | Axios, dotenv    |

---

## 🔧 Setup & Run

Ensure the following are installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1️⃣ Clone the Repository
git clone https://github.com/StartAt2023/online-shopping-prototype.git
cd online-shopping-prototype
2️⃣ Start the Backend Server
bash
Copy
Edit
cd backend_webdev
npm install
# Create a `.env` file with MONGODB_URI and PORT
npm start
The backend server will run on a default port (e.g., 5000) and connect to MongoDB.

3️⃣ Start the Frontend App
cd ../webdev
npm install
npm run dev
The frontend will be available at http://localhost:3000

🌐 Example APIs (Express)
GET /api/products         # Get all products
POST /api/users/signup    # Register new user
POST /api/users/login     # Log in user
✅ Planned Features
 User Registration / Login (with JWT)

 Product Listing Page

 Product Detail Page

 Add to Cart

 Order Placement

 Payment Integration (future)

🛡️ Security Measures
Environment variables managed via .env

User authentication handled with JWT

Input validation with Express middlewares

📸 Screenshots
(Add UI screenshots here if available)

👤 Author
GitHub: StartAt2023

Purpose: Practice / Personal learning project

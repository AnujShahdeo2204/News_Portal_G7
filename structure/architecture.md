# Project Architecture

## Tech Stack (MERN)
- **Frontend**: React (Vite), Tailwind CSS, Lucide React (Icons), Axios.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose ODM).
- **Authentication**: JSON Web Tokens (JWT), BCrypt (Password Hashing).

## Directory Structure
```
news portal/
├── client/                 # Frontend Application
│   ├── src/
│   │   ├── components/     # Reusable UI components (Header, etc.)
│   │   ├── context/        # React Context (AuthContext)
│   │   ├── pages/          # Page components (Home, Login, Register, CreateNews)
│   │   ├── App.jsx         # Main component with Routing
│   │   └── main.jsx        # Entry point
│   ├── index.css           # Global styles (Tailwind imports)
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Application
│   ├── config/             # DB Connection (db.js)
│   ├── controllers/        # Route Logic (authController, newsController)
│   ├── middleware/         # Auth Middleware (authMiddleware)
│   ├── models/             # Mongoose Models (User, News)
│   ├── routes/             # API Routes (userRoutes, newsRoutes)
│   ├── utils/              # Utilities (generateToken)
│   ├── index.js            # Server entry point
│   └── .env                # Environment variables
```

## Data Models

### User
- `name`: String
- `email`: String (Unique)
- `password`: String (Hashed)
- `isAdmin`: Boolean

### News
- `user`: ObjectId (Ref: User)
- `title`: String
- `content`: String
- `category`: String
- `image`: String (URL)
- `timestamps`: CreatedAt, UpdatedAt

## API Endpoints

### Auth (`/api/users`)
- `POST /` - Register new user
- `POST /login` - Authenticate user & get token

### News (`/api/news`)
- `GET /` - Fetch all news
- `POST /` - Create news (Protected)
- `GET /:id` - Get single news
- `PUT /:id` - Update news (Protected, Owner/Admin)
- `DELETE /:id` - Delete news (Protected, Owner/Admin)

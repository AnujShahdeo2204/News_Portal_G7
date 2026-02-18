# Project Workflow

## User Experience Flow

### 1. Visitor (Unauthenticated)
1.  **Landing**: User visits the Home Page.
2.  **View News**: User sees the "Latest" news in a magazine-style grid.
    -   *Featured Article*: Large display on the left.
    -   *Secondary Articles*: Vertical list on the right.
3.  **Navigation**: Can click "Login" or "Sign Up" in the header.

### 2. Authentication
1.  **Sign Up**: User enters Name, Email, Password -> Account created -> Auto-logged in.
2.  **Login**: User enters Email, Password -> Receives JWT Token -> Redirected to Home.

### 3. Member (Authenticated)
1.  **Dashboard**: Header updates to show User Name and "Write" button.
2.  **Create News**:
    -   Click "Write".
    -   Fill form: Title, Category, Image URL, Content.
    -   Submit -> Article saved to MongoDB -> Redirect to Home.
3.  **Logout**: Click Logout icon -> Token removed -> Redirect to Login options.

## Development Workflow

### Prerequisites
- Node.js
- MongoDB (Running locally on port 27017)

### Startup Sequence
1.  **Start Database**: Ensure `mongod` is running.
2.  **Start Backend**:
    -   `cd server`
    -   `npm run dev` (Runs on port 5000)
3.  **Start Frontend**:
    -   `cd client`
    -   `npm run dev` (Runs on port 5173)

### Data Flow
1.  **Frontend Request**: Client sends HTTP request (via Axios) to `http://localhost:5000`.
2.  **Backend Processing**:
    -   `server/index.js` receives request.
    -   `Routes` direct to appropriate `Controller`.
    -   `Controller` interacts with `Database` via `Model`.
3.  **Response**: Backend sends JSON data back to Frontend.
4.  **UI Update**: React state updates, re-rendering components with new data.

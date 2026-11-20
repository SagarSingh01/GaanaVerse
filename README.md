🎵 GaanaVerse
A Full-Stack Music Streaming Platform Built with the MERN Stack
GaanaVerse is a full-stack music streaming application built to explore and demonstrate modern web development concepts, including authentication, email verification, role-based access, music uploads, audio streaming, REST APIs, database integration, and responsive UI development.

The platform supports two roles:
- Listeners can browse available tracks and stream music.
- Artists can access artist-specific pages and upload music.
This is an independent educational project. It is not affiliated with, sponsored by, or endorsed by Spotify AB or any other music-streaming company.

✨ Features
🔐 Authentication & Security
- User and Artist registration
- Email verification using OTP (One-Time Password)
- Secure login and logout
- JWT authentication using HTTP-only cookies
- Protected routes
- Role-based access for Listeners and Artists
- Persistent authentication across page refreshes
- Password hashing using bcrypt
🎧 Music Experience
- Browse available music tracks
- Stream audio directly in the application
- Dedicated music-player page for each track
- Artist information displayed with tracks
- Responsive music interface
- Loading skeletons and error states
🎤 Artist Features
- Artist-specific dashboard
- Upload music tracks
- Artist profile and related pages
- Role-based access to artist functionality
🎨 UI / UX
- Original GaanaVerse branding
- Dark, midnight-inspired interface with cyan accents
- Responsive layouts for mobile, tablet, and desktop
- Framer Motion animations
- Tailwind CSS styling
- React Icons
- Toast notifications
- Client-side routing with React Router
🛠️ Tech Stack
Frontend
Technology	Purpose
React	User interface
Vite	Development and build tool
Tailwind CSS	Responsive styling
Framer Motion	UI animations
React Router	Client-side routing
Axios	API requests
React Icons	Icons
React Hot Toast	Notifications


Backend
Technology	Purpose
Node.js	JavaScript runtime
Express.js	Backend framework
MongoDB	NoSQL database
Mongoose	MongoDB ODM
JWT	Authentication
bcrypt	Password and OTP hashing
cookie-parser	Cookie handling
Nodemailer	Email delivery
OTP	Email verification


Deployment
- Vercel — Frontend hosting
- Render — Backend hosting
- MongoDB Atlas — Cloud database
🏗️ Project Architecture
              ┌────────────────────┐
              │      Browser       │
              │    React + Vite    │
              └─────────┬──────────┘
                        │
                        │ HTTP / Axios
                        ▼
              ┌────────────────────┐
              │    Express API     │
              │      Node.js       │
              └─────────┬──────────┘
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
   ┌────────────┐ ┌────────────┐ ┌────────────┐
   │    Auth    │ │   Music    │ │   Email    │
   │ JWT/Cookie │ │  Services  │ │  Service   │
   └────────────┘ └─────┬──────┘ │ Nodemailer │
                        │        └────────────┘
                        ▼
              ┌────────────────────┐
              │      MongoDB       │
              │    MongoDB Atlas   │
              └────────────────────┘
📁 Project Structure
The project is organized into separate frontend and backend applications.
GaanaVerse/
│
├── Backend/
│   ├── src/
│   │   ├── Controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── Components/
│   │   ├── Context Api/
│   │   ├── Custom Hooks/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── vercel.json
│   ├── vite.config.js
│   └── package.json
│
└── README.md
🔐 Authentication Flow
GaanaVerse uses JWT-based authentication with HTTP-only cookies and email OTP verification during registration.
Registration & Email Verification
User
  │
  ▼
Register
  │
  ▼
Validate User Details
  │
  ▼
Create User Account
  │
  ▼
Generate OTP
  │
  ▼
Hash and Store OTP
  │
  ▼
Send OTP via Email
  │
  ▼
User Enters OTP
  │
  ▼
Verify OTP
  │
  ├── Invalid OTP ──► Reject Verification
  │
  └── Valid OTP ────► Verify Email
Login Flow
User
  │
  ▼
Login
  │
  ▼
Validate Credentials
  │
  ▼
Verify Password with bcrypt
  │
  ▼
Generate JWT
  │
  ▼
Set HTTP-only Cookie
  │
  ▼
Authenticated User
Why HTTP-only Cookies?
The JWT is stored in an HTTP-only cookie, which prevents client-side JavaScript from directly accessing the token.

The frontend sends authenticated requests using Axios:
import axios from "axios";

export const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});
🛡️ Protected Routes & Role-Based Access
The application uses protected routes to control access based on authentication and user role.
                    Application
                         │
                         ▼
                  Is user logged in?
                     /       \
                   NO         YES
                   │           │
                   ▼           ▼
                 Login     Check User Role
                               │
                     ┌─────────┴─────────┐
                     ▼                   ▼
                  Listener             Artist
                     │                   │
                     ▼                   ▼
                 Music App         Artist Dashboard
Authentication state is maintained through React Context API and checked using the backend /api/auth/me endpoint.

Frontend route protection improves navigation and user experience. Authorization must also be enforced by the backend for protected API operations.
🔌 API Overview
The following endpoints represent the main API routes used by the application. Check the backend route files for the exact current request fields and responses.
Authentication Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user or artist
POST	/api/auth/verify-email	Verify email using OTP
POST	/api/auth/login	Log in a user
POST	/api/auth/logout	Log out the current user
GET	/api/auth/me	Get the authenticated user


Music Endpoints
Method	Endpoint	Description
GET	/api/music	Fetch available music tracks
POST	/api/music/upload	Upload a music track (artist access)


API endpoints and request requirements may change as the project evolves.

🚀 Getting Started
Follow these steps to run GaanaVerse locally.
Prerequisites
- Node.js and npm
- MongoDB Atlas account or a local MongoDB instance
- Gmail OAuth2 credentials for the configured Nodemailer email service
1. Clone the Repository
Replace YOUR_REPOSITORY with the actual GitHub repository name.
git clone https://github.com/SagarSingh01/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
2. Set Up the Backend
cd Backend
npm install
Create a .env file inside the Backend directory:
PORT=3000

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Gmail OAuth2 configuration for Nodemailer
GOOGLE_USER=your_email@gmail.com
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REFRESH_TOKEN=your_google_refresh_token
The email variables above are for a Gmail OAuth2 setup. Add any other environment variables required by your backend.
Configure CORS
In Backend/src/app.js, allow your local frontend origin and the deployed frontend origin. For example:
import cors from "cors";

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://YOUR_FRONTEND_DOMAIN"
        ],
        credentials: true
    })
);
Replace YOUR_FRONTEND_DOMAIN with your actual Vercel domain. Make sure the backend's cookie settings are also configured for your production frontend and backend origins.

Start the backend:
npm start
The backend will run at:
http://localhost:3000
3. Set Up the Frontend
Open another terminal from the project root:
cd Frontend
npm install
Create a .env file inside the Frontend directory:
VITE_API_URL=http://localhost:3000
Start the frontend:
npm run dev
Open the application at:
http://localhost:5173
🌐 Environment Variables
Configure the following environment variables before running the application.
Backend — Backend/.env
Variable	Description
PORT	Backend server port
MONGO_URI	MongoDB connection string
JWT_SECRET	Secret key used to sign JWTs
GOOGLE_USER	Gmail account used to send verification emails
GOOGLE_CLIENT_ID	Google OAuth client ID
GOOGLE_CLIENT_SECRET	Google OAuth client secret
GOOGLE_REFRESH_TOKEN	Google OAuth refresh token


Frontend — Frontend/.env
Variable	Description
VITE_API_URL	Backend API base URL


Security: Never commit .env files or expose your JWT secret, database credentials, OAuth credentials, or refresh token. Frontend environment variables prefixed with VITE_ are exposed to the browser, so never put secrets in them.

🌍 Deployment
The application uses separate hosting services for the frontend, backend, and database.
Part	Platform
Frontend	Vercel
Backend	Render
Database	MongoDB Atlas


React Router Refresh Support on Vercel
Because GaanaVerse uses React Router, direct visits and browser refreshes on client-side routes (for example, /music/:id) must serve the frontend index.html.

The Frontend/vercel.json file should contain:
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
This allows React Router to resolve the requested frontend route after the application loads.
Production Configuration Checklist
- Set the production MONGO_URI and JWT_SECRET in Render environment variables.
- Set the production VITE_API_URL in Vercel environment variables.
- Configure backend CORS to allow the deployed frontend origin.
- Configure secure cookie options for cross-origin production requests.
- Keep credentials and secrets out of the repository.
- Redeploy the relevant service after changing its environment variables.
💡 What I Learned
Building GaanaVerse helped me understand how a full-stack application works, from frontend interactions to backend processing and database operations.
Frontend
- React component architecture
- React Router and nested routes
- Context API for shared state
- Custom React Hooks
- Axios and API integration
- Protected and role-based routes
- Authentication state management
- Form validation
- Loading, skeleton, and error states
- Responsive UI development with Tailwind CSS
- UI animations with Framer Motion
Backend
- REST API development
- Express middleware
- MVC-style project organization
- MongoDB and Mongoose
- Password hashing with bcrypt
- JWT authentication
- HTTP-only cookies
- Role-based authorization
- Email OTP generation and verification
- OTP hashing and validation
- Sending emails using Nodemailer and Gmail OAuth2
- CORS configuration
- Error handling
Deployment
- Frontend deployment with Vercel
- Backend deployment with Render
- MongoDB Atlas configuration
- Production environment variables
- Frontend and backend communication in production
- SPA route rewrites for React Router
📈 Future Improvements
Potential improvements as the project continues to evolve:
- [ ] Music search and filtering
- [ ] Like and unlike tracks
- [ ] Create and manage playlists
- [ ] Listening history
- [ ] Advanced music discovery
- [ ] Enhanced artist analytics
- [ ] Improved audio player controls
📚 Project Purpose
GaanaVerse is a learning-focused full-stack application built to understand how modern web applications connect:
Frontend
   ↓
API Requests
   ↓
Authentication & Authorization
   ↓
Email Verification
   ↓
Backend Logic
   ↓
Database Operations
   ↓
API Response
   ↓
Frontend UI
The goal is not simply to recreate the appearance of an existing music platform, but to build an independent application and understand the authentication, data flow, role-based access, and deployment architecture behind it.
👨‍💻 Author
Sagar Singh
MERN Stack Developer | BCA Student
⭐ Support
If you find GaanaVerse interesting, consider giving the repository a ⭐ on GitHub!
<div align="center">🎵 Built with React, Node.js & MongoDB
Learn → Build → Deploy → Improve
</div>
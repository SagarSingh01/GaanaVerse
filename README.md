<div align="center">

<img src="./Frontend/src/assets/logo.png" alt="GaanaVerse logo" width="96" height="96" />

# GaanaVerse

**A Full-Stack Music Streaming Platform Built with the MERN Stack**

Discover music, stream tracks, and give artists a platform to share their music.

Built with React, Node.js, Express, and MongoDB.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_App-22d3ee?style=for-the-badge&logo=vercel&logoColor=black)](https://musics-spotify.vercel.app)

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

</div>

---

## Overview

GaanaVerse is a full-stack music streaming application developed to explore and implement real-world web development concepts.

The platform provides separate experiences for listeners and artists. Users can create accounts, verify their email addresses, log in securely, and access features according to their roles.

Artists can access their dashboard and upload music, while listeners can explore available tracks and stream audio through individual music player pages.

The project focuses on authentication, authorization, REST APIs, database management, file uploads, and responsive frontend development.

---

## Features

### Authentication and Security

- User and artist registration
- Email verification using a 6-digit OTP
- OTP hashing with bcrypt before database storage
- Secure login and logout
- JWT-based authentication
- HTTP-only authentication cookies
- Persistent login sessions
- Protected frontend routes
- Backend authentication and role-based authorization
- Separate access for listeners and artists

### Music Streaming

- Browse available music tracks
- Individual music player pages
- Audio streaming through HTML audio controls
- Track information and artist details
- Responsive music player interface

### Artist Features

- Dedicated artist dashboard
- Artist-only music upload
- Upload form with validation
- Upload feedback and loading states
- Artist information associated with uploaded tracks

### User Interface

- Responsive layouts for mobile and desktop
- Dark Neon Midnight theme
- Cyan and electric-blue listener accents
- Violet and fuchsia artist accents
- Framer Motion animations
- Loading skeletons
- Dedicated error and not-found states
- Toast notifications
- Responsive navigation and reusable components

---

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, Vite, Tailwind CSS, Framer Motion |
| Routing | React Router DOM |
| HTTP Requests | Axios |
| UI Icons | React Icons |
| Notifications | React Hot Toast |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcrypt, cookie-parser |
| Email Verification | Nodemailer, Gmail OAuth2 |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

---

## How It Works

### Application Architecture

```text
                 Browser
                    |
             React + Vite
                    |
              Axios Requests
             with Credentials
                    |
                    v
               Express API
                Node.js
                    |
         +----------+----------+
         |                     |
         v                     v
     MongoDB Atlas         Nodemailer
                           Gmail OAuth2
```

### Authentication Flow

**1. Registration**

- The user submits their username, email, password, and selected role.
- The backend validates the submitted information.
- The password is hashed using bcrypt.
- The server generates a 6-digit OTP.
- The OTP is hashed and stored in the database.
- Nodemailer sends the OTP to the user's email address.

**2. Email Verification**

- The user enters the received OTP.
- The backend retrieves the corresponding OTP record.
- bcrypt compares the submitted OTP with the stored hash.
- After successful verification, the account is marked as verified.
- The OTP record is deleted.

**3. Login**

- The user submits their email and password.
- The backend verifies the credentials.
- bcrypt compares the submitted password with the stored password hash.
- The server generates a JWT.
- The JWT is sent through an HTTP-only cookie.

**4. Session Persistence**

- The frontend checks the authentication status using `GET /api/auth/me`.
- The backend verifies the authentication cookie.
- The authenticated user's information is returned.
- The frontend restores the user's session.

### Role-Based Access

| Role | Access |
| --- | --- |
| Listener | Access the music application and stream available tracks |
| Artist | Access artist features, the dashboard, and music uploads |

Both frontend route protection and backend authorization are used to restrict access to protected functionality.

---

## Project Structure

```text
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
```

---

## API Overview

### Authentication Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/auth/register` | Register a new listener or artist |
| `POST` | `/api/auth/verify-email` | Verify email using OTP |
| `POST` | `/api/auth/login` | Authenticate a user |
| `POST` | `/api/auth/logout` | Log out the authenticated user |
| `GET` | `/api/auth/me` | Retrieve the current authenticated user |

### Music Routes

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/music` | Retrieve available music tracks |
| `POST` | `/api/music/upload` | Upload music (artist only) |

> Refer to the backend route and controller files for the exact request fields, validation rules, and response structures.

---

## Getting Started

Follow these steps to run GaanaVerse locally.

### Prerequisites

- Node.js and npm
- A MongoDB Atlas account or a local MongoDB installation
- Gmail OAuth2 credentials for email verification

### 1. Clone the Repository

```bash
git clone https://github.com/SagarSingh01/GaanaVerse.git
cd GaanaVerse
```

### 2. Set Up the Backend

Install the dependencies:

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` directory:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Gmail OAuth2 configuration
GOOGLE_USER=your_email@gmail.com
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REFRESH_TOKEN=your_google_refresh_token
```

Allow your frontend development and production URLs in the backend CORS configuration (`Backend/src/app.js`):

```js
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
```

> Replace `YOUR_FRONTEND_DOMAIN` with your deployed frontend URL. If your backend uses CommonJS, use `const cors = require("cors");` instead of `import`.

Start the backend:

```bash
npm start
```

The API runs at `http://localhost:3000`.

### 3. Set Up the Frontend

Open a new terminal and install the dependencies:

```bash
cd Frontend
npm install
```

Create a `.env` file inside the `Frontend` directory:

```env
VITE_API_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

---

## Deployment

GaanaVerse uses separate hosting services for the frontend, backend, and database.

| Service | Platform | Configuration |
| --- | --- | --- |
| Frontend | Vercel | Root: `Frontend`, Build: `npm run build`, Output: `dist` |
| Backend | Render | Root: `Backend`, Build: `npm install`, Start: `npm start` |
| Database | MongoDB Atlas | Cloud database connection |

### Environment Variables

**Render (backend):**

```env
PORT=3000
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret

GOOGLE_USER=your_email@gmail.com
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REFRESH_TOKEN=your_google_refresh_token
```

**Vercel (frontend):**

```env
VITE_API_URL=your_production_backend_url
```

### Important Deployment Settings

**1. CORS**

Allow your deployed frontend domain in the backend CORS configuration.

**2. Authentication cookies**

For cross-origin authentication between Vercel and Render, configure the cookie with:

```js
{
    httpOnly: true,
    secure: true,
    sameSite: "none"
}
```

**3. Vercel client-side routing**

Because GaanaVerse uses React Router, add a `vercel.json` file inside the `Frontend` directory so that refreshing a nested route does not result in a 404 error:

```json
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

---

## Security Practices

- Passwords are hashed using bcrypt.
- OTP values are stored as hashes rather than plain text.
- Authentication tokens are stored in HTTP-only cookies.
- Protected APIs verify authentication on the backend.
- Artist-only functionality uses role-based authorization.
- Environment variables are used for sensitive configuration.

> [!WARNING]
> Never commit `.env` files or expose private credentials in frontend code. Variables prefixed with `VITE_` are exposed to the browser and must never contain secrets.

---

## What I Learned

Building GaanaVerse helped me understand and practice:

- Building a full-stack application using the MERN stack
- Connecting React applications with Express APIs
- Designing REST API endpoints and backend controllers
- Managing MongoDB databases using Mongoose
- Implementing JWT authentication and HTTP-only cookies
- Creating email OTP verification using Nodemailer
- Hashing passwords and OTPs using bcrypt
- Implementing role-based access control
- Managing authentication state using the React Context API
- Handling API requests and application loading states
- Building reusable React components and custom hooks
- Managing frontend routing and protected routes
- Deploying a full-stack application using Vercel, Render, and MongoDB Atlas
- Debugging real-world frontend and backend issues

---

## Roadmap

Features planned for future development:

- [ ] Music search and filtering
- [ ] Like and unlike tracks
- [ ] Personal playlists
- [ ] Listening history
- [ ] Artist analytics dashboard
- [ ] More personalized music discovery

---

## Author

**Sagar Singh**
MERN Stack Developer | BCA Student

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=googlechrome&logoColor=white)](https://sagar-singh.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SagarSingh01)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sagar-singh001/)

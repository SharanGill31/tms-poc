# TMS POC - Task Management System (Proof of Concept)

A modern web-based **Task Management System** (TMS) built as a Proof of Concept to demonstrate task creation, assignment, tracking, and role-based access control for employees and administrators.

**Live Demo**  
- **Frontend**: [https://tms-vevb.onrender.com/login](https://tms-vevb.onrender.com/login)  
- **Backend API**: [https://tms-backend-fh93.onrender.com](https://tms-backend-fh93.onrender.com) (GraphQL endpoint – use GraphQL Playground or Apollo Client)

## Tech Stack

### Frontend
- **React** + **Vite** (or CRA) – fast and modern React setup
- **React Router** – client-side routing
- **State Management**: Context API / Redux Toolkit / Zustand (as implemented)
- **UI Library**: Material-UI / Tailwind CSS / Chakra UI / Ant Design (whichever is used)
- **Form Handling**: React Hook Form + Zod / Formik + Yup
- **HTTP Client**: Axios / Apollo Client (for GraphQL)
- **Deployment**: Render.com

### Backend
- **Node.js** + **Express** / **Apollo Server**
- **GraphQL** (Apollo Server) – API layer
- **Database**: MongoDB / PostgreSQL / Prisma / Mongoose (as implemented)
- **Authentication**: JWT + bcrypt
- **ORM/ODM**: Prisma / Mongoose / TypeORM
- **Deployment**: Render.com

### Other Tools
- Git + GitHub for version control
- Environment variables via `.env`
- CORS handling

## Features Implemented

### Core Features
- User authentication (Login / Register / Logout)
- Role-based access control (Admin vs Employee)
- Create, Read, Update, Delete (CRUD) tasks / tickets / assignments
- Task status tracking (To Do → In Progress → Done / custom statuses)
- Task assignment to employees
- Priority & due date support
- Basic dashboard with task overview / statistics
- Responsive design (mobile-friendly)

### Additional (if implemented)
- Search & filter tasks
- Notifications (in-app / email – if added)
- File attachments on tasks
- Commenting / activity log on tasks
- Export tasks (CSV / PDF – if added)

## Admin vs Employee Access

| Feature                     | Admin                          | Employee                     |
|-----------------------------|--------------------------------|------------------------------|
| Create new tasks            | Yes                            | Yes (or limited scope)       |
| Assign tasks to users       | Yes                            | No / limited                 |
| Edit / Delete any task      | Yes                            | Only own tasks (or assigned) |
| View all tasks & users      | Yes                            | Only own / assigned tasks    |
| Manage users (CRUD)         | Yes                            | No                           |
| Change task status          | Yes                            | Yes (on assigned tasks)      |
| Access admin dashboard      | Yes                            | No                           |
| View reports / analytics    | Yes                            | No / basic only              |

*Note: Exact permissions may vary slightly based on your final implementation.*

## Setup Instructions

### Prerequisites
- Node.js ≥ 18
- npm / yarn / pnpm
- Git
- MongoDB (local or Atlas) or PostgreSQL (if used)

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd tms-poc
2. Backend Setup
Bashcd backend
npm install
Create .env file in backend/:
envPORT=4000
NODE_ENV=development
JWT_SECRET=your-very-secure-secret-here
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/tms-poc?retryWrites=true&w=majority
# or PostgreSQL: DATABASE_URL=postgresql://user:pass@localhost:5432/tms
Start backend:
Bashnpm run dev
# or
npm start
GraphQL Playground usually available at: http://localhost:4000
3. Frontend Setup
Bashcd ../frontend
npm install
Create .env file in frontend/ (or use .env.local for Vite):
envVITE_API_URL=http://localhost:4000
# or for production: VITE_API_URL=https://tms-backend-fh93.onrender.com
Start frontend:
Bashnpm run dev
# or
npm start
Open: http://localhost:5173 (Vite) or http://localhost:3000 (CRA)
4. Default Credentials (for testing)

Admin: Create one via registration or seed script (if available)
Or use any registered account and promote to admin via database (role: "ADMIN")

5. Production Deployment (Render.com)
Both apps are already deployed:

Frontend auto-deploys from GitHub on push to main
Backend uses the same (ensure render.yaml or service settings are correct)

Environment variables must be set in Render dashboard.
Folder Structure (example)
texttms-poc/
├── backend/
│   ├── src/
│   │   ├── resolvers/
│   │   ├── models/
│   │   ├── schema/
│   │   └── index.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
└── README.md
Contributing
Feel free to open issues or PRs for bug fixes, new features, or improvements.
License
MIT License (or specify your license)

TMS POC – Built with ❤️ for demonstration purposes
Last updated: January 2026

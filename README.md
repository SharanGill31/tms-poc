# Transportation Management System (TMS) - Proof of Concept

**License:** MIT  
**Tech Stack:** React, Node.js, GraphQL  

---

## Overview

This is a **Proof of Concept (POC)** for a **Transportation Management System (TMS)**, demonstrating a full-stack web application for managing shipments and logistics operations. The system provides a responsive user interface for viewing, managing, and tracking shipments with **role-based access control**.  

Built with modern web technologies, it showcases scalable architecture, GraphQL API integration, and secure authentication. The project emphasizes user experience, performance optimization, and clean code practices.

---

## Key Highlights

- **Frontend:** React application with Tailwind CSS for responsive, mobile-first design.  
- **Backend:** Node.js with GraphQL API using Apollo Server, supporting queries, mutations, and pagination.  
- **Authentication:** JWT-based with role-based authorization (Admin vs Employee).  
- **Data Management:** In-memory storage for shipments (extensible to MongoDB/PostgreSQL).  
- **Deployment Ready:** Frontend on Vercel, Backend on Render.  

---

## Tech Stack

### Frontend

- **Framework:** React 18.2.0 (Vite)
- **Styling:** Tailwind CSS 4.1.18
- **GraphQL Client:** Apollo Client 4.1.2
- **Routing:** React Router DOM 6.8.0
- **State Management:** React Context API
- **UI Components:** Headless UI
- **Other Tools:** JWT Decode 4.0.0, ESLint, Prettier

### Backend

- **Runtime:** Node.js 18+
- **GraphQL Server:** Apollo Server 16.12.0
- **Authentication:** JSON Web Tokens (JWT)
- **Data Manipulation:** Lodash
- **Data Storage:** In-memory array (POC; extensible to MongoDB/PostgreSQL)

### Development & Deployment

- **Build Tool:** Vite
- **Version Control:** Git/GitHub
- **Deployment:** Vercel (frontend), Render (backend)
- **Testing:** Jest (basic unit tests)
- **Methodologies:** Agile (Scrum), Test-Driven Development (TDD)

---

## Features

### Core Features

- **User Authentication:** Secure login with JWT tokens, supporting multiple roles.  
- **Dashboard:** Responsive shipments dashboard with toggle between Grid View (table) and Tile View (cards).  
- **Shipments Management:**  
  - View shipments with ID, Shipment Number, Origin, Destination, Status, Carrier, Weight, Value, Ship Date, Delivery Date, Notes.  
  - Pagination (10 items per page) with sorting by shipment number.  
  - Detailed modal view on tile/row click.  
- **Navigation:** Horizontal navbar with hamburger menu for mobile.  
- **Performance Optimizations:** Lazy loading, memoization, efficient GraphQL queries.  
- **Security:** Role-based access control (RBAC).  
- **UI/UX Enhancements:** Mobile-first responsive design, toast notifications, accessible styling (WCAG compliant).

### Additional Capabilities

- GraphQL queries & mutations with filters, pagination, and CRUD operations.  
- React Hooks and Context API for state management.  
- Graceful error handling and network recovery.  
- Modular folder structure for easy extensibility (reports, analytics).

---

## Admin vs Employee Access

**Role-based access control (RBAC)** is enforced on frontend and backend via JWT tokens.

| Role      | Access                                         | UI Features                                      | Backend Permissions               |
|-----------|-----------------------------------------------|-------------------------------------------------|----------------------------------|
| **Admin** | Full CRUD (view, add, update, delete)        | Add Shipment button, Edit/Delete on rows/cards | All mutations allowed            |
| **Employee** | Read-only                                    | Only view dashboard, no Add/Edit/Delete        | Queries only; mutations blocked |

**Security Notes:**

- JWT tokens expire in 1 hour  
- Unauthorized access returns clear error messages  
- Frontend checks roles before rendering sensitive UI

**Default Credentials:**

- Admin → `admin / admin`  
- Employee → `employee / employee`

---

## Setup Instructions

### Prerequisites

- **Node.js v18+** → [https://nodejs.org](https://nodejs.org)  
- **Git** → Installed and configured with GitHub account  
- **Accounts:** GitHub,Render (frontend), Render (backend)  

### Local Development

```bash
# Clone the repo
git clone https://github.com/SharanGill31/tms-poc.git
cd tms-poc
Frontend (tms-frontend)
cd tms-frontend
npm install
npm run dev
# Opens at http://localhost:5173


Login with admin/admin or employee/employee

Backend (tms-backend)
cd ../tms-backend
npm install
node src/server.js
# Runs on http://localhost:4000/graphql (Apollo Playground)


Enable CORS if needed:

cors: { origin: '*' }

Testing

Run frontend and backend simultaneously

Test login, dashboard, pagination, role-based access

GraphQL testing: Apollo Playground with JWT token in headers

Live Demo

Frontend: https://tms-vevb.onrender.com/login

Backend: https://tms-backend-fh93.onrender.com

License

MIT License

```bash
# Clone the repo
git clone https://github.com/SharanGill31/tms-poc.git
cd tms-poc

# 🏠 Nestora | Full-Stack Accommodation Booking 

[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20Render-brightgreen?style=for-the-badge&logo=render)](https://nestora-ms4s.onrender.com/listings)

**Nestora** is a robust, full-stack vacation rental platform inspired by Airbnb. Built using the **MERN stack** (with EJS for server-side rendering), it provides a seamless experience for users to discover, list, and manage rental properties globally.

---

### 🚀 Key Features
* **Secure Authentication:** Full user lifecycle management (Login/Signup/Logout) powered by **Passport.js**.
* **Property Management:** Complete **CRUD functionality** for property listings with owner-only editing permissions.
* **Cloud Image Handling:** Optimized multi-image uploads and storage integration via **Cloudinary**.
* **Interactive Mapping:** Dynamic location-based visualization using the **Mapbox Geocoding API**.
* **Middleware Protection:** Custom authorization layers to protect routes and ensure data security.
* **Responsive Design:** Fully mobile-friendly UI styled with custom CSS and Bootstrap.

---

### 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript, **EJS (Embedded JavaScript Templates)** |
| **Backend** | **Node.js**, Express.js |
| **Database** | **MongoDB Atlas**, Mongoose (ODM) |
| **Services** | Cloudinary (Images), Mapbox (Maps), Passport.js (Auth) |
| **Deployment** | Render |

---

### 📁 Project Architecture (MVC)
The project follows the **Model-View-Controller** design pattern for clean code separation:
* 📂 `models/` — Mongoose schemas for Listings, Reviews, and Users.
* 📂 `views/` — EJS templates for dynamic server-side rendering.
* 📂 `controllers/` — Core business logic and request handling.
* 📂 `routes/` — RESTful API endpoint definitions.
* 📂 `public/` — Static assets (Client-side JS, CSS, and Images).

---

### 🔧 Installation & Local Setup

1. **Clone the repository**
   ```bash
   git clone [https://github.com/nehalikareddy/nestora.git](https://github.com/nehalikareddy/nestora.git)
Built as part of my full-stack development learning journey to gain hands-on experience with MVC architecture, REST APIs, authentication, and real-world backend workflows.

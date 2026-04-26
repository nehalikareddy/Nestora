# 🏠 Nestora — Full-Stack Accommodation Booking Platform

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=47A248&height=200&section=header&text=NESTORA&fontSize=90&animation=fadeIn&fontColor=ffffff" />
  
  <p align="center">
    <strong>A comprehensive Airbnb-inspired marketplace for property listings and bookings.</strong>
  </p>

  <p align="center">
    <a href="https://nestora-ms4s.onrender.com/listings" target="_blank">
      <img src="https://img.shields.io/badge/Live_Demo-47A248?style=for-the-badge&logo=render&logoColor=white" />
    </a>
  </p>
</div>

---

### 🚀 Overview

Nestora is a full-stack web application designed to handle property listings, user reviews, and location-based mapping. Built using the **MERN stack** (with EJS for server-side rendering), it follows the **MVC (Model-View-Controller)** design pattern to ensure clean, maintainable, and scalable code.

### ✨ Key Features

* 🏠 **Property Management:** Full CRUD functionality for creating, viewing, updating, and deleting listings.
* 🔐 **Authentication & Authorization:** Secure user workflows powered by **Passport.js**.
* 🗺️ **Interactive Maps:** Real-time geocoding and map visualization using **Mapbox API**.
* ☁️ **Media Management:** Image hosting and optimization integrated with **Cloudinary**.
* 💬 **Review System:** Dynamic rating and feedback system for individual properties.
* 📱 **Responsive UI:** Built with **Bootstrap 5** for a seamless experience across all devices.

---

### 🛠️ Tech Stack

**Backend:** Node.js, Express.js  
**Database:** MongoDB Atlas, Mongoose  
**Templating:** EJS (Embedded JavaScript)  
**Styling:** Bootstrap 5, CSS3  
**APIs:** Mapbox (Maps/Geocoding), Cloudinary (Image Hosting)  

---

### 📂 System Architecture (MVC)

```mermaid
graph TD
    User((User/Browser)) -->|HTTP Request| Routes[Routes /listings]
    
    subgraph Express_Backend [Node.js & Express Server]
        Routes -->|Calls| Controllers[Controllers]
        Controllers -->|Business Logic| Models[Models / Mongoose]
        Controllers -->|Renders| Views[Views / EJS]
    end

    subgraph External_Services [Services & Storage]
        Models <-->|Query/Data| MongoDB[(MongoDB Atlas)]
        Controllers -->|Uploads| Cloudinary[Cloudinary Media]
        Views -->|Map Data| Mapbox[Mapbox API]
    end

    Views -->|HTML Response| User


🔑 Environment Variables
To run Nestora locally, create a .env file in the root directory and add the following:

Code snippet
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret

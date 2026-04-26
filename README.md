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

## 🚀 Overview

Nestora is a full-stack web application designed for managing property listings, user reviews, and location-based discovery. Built using **Node.js, Express.js, MongoDB, and EJS**, it follows the **MVC (Model-View-Controller)** architecture to ensure clean, scalable, and maintainable code.

---

## ✨ Key Features

* 🏠 **Property Listings:** Full CRUD operations (Create, Read, Update, Delete)
* 🔐 **Authentication & Authorization:** Secure workflows using Passport.js
* 🗺️ **Interactive Maps:** Location visualization using Mapbox API
* ☁️ **Image Management:** Cloudinary integration for uploads and optimization
* 💬 **Review System:** Ratings and feedback for listings
* 📱 **Responsive UI:** Built with Bootstrap for all devices

---

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js
**Database:** MongoDB Atlas, Mongoose
**Templating:** EJS (Embedded JavaScript)
**Styling:** Bootstrap 5, CSS3
**APIs:** Mapbox (Geocoding), Cloudinary (Media Storage)

---

## 📂 System Architecture (MVC)

```mermaid
graph TD

    User((User / Browser)) -->|HTTP Request| Routes[Routes]

    subgraph Backend["Node.js + Express (MVC)"]
        Routes --> Controllers[Controllers]
        Controllers --> Models[Models (Mongoose)]
        Controllers --> Views[Views (EJS)]
    end

    subgraph Services["External Services"]
        Models <-->|Data| DB[(MongoDB Atlas)]
        Controllers -->|Images| Cloudinary[Cloudinary]
        Views -->|Maps| Mapbox[Mapbox API]
    end

    Views -->|HTML Response| User
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/nehalikareddy/Nestora.git
cd Nestora
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Application

```bash
node app.js
```

---

## 🤝 Contributing

This project was built to strengthen full-stack development skills and understand real-world backend architecture.

Feel free to:

* Fork the repository
* Improve features
* Submit pull requests 🚀

---

<div align="center">
  Made with 💚 for full-stack development
</div>

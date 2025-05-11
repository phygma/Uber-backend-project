# 🚕 Uber Backend Clone

A full-featured backend system for an Uber-like ride-hailing service. This Node.js project uses **Express.js**, **MongoDB**, **Redis**, and **Socket.IO**, and supports authentication, real-time driver location updates, ride booking, and fare estimation.

## 🚀 Features

- ✅ **Authentication & Authorization** for both Passengers and Drivers (JWT-based)
- 📍 **Real-time Location Tracking** using Socket.IO
- 📦 **Booking System** with driver-passenger matching
- 🧠 **Fare and ETA Calculation** based on distance
- ⚙️ **Modular Clean Architecture** with service, controller, and repository layers
- 🧰 **Redis Caching** for performance and state tracking

---

## 🧱 Project Structure
```none
uber-backend/
│
├── controllers/
│ ├── authController.js
│ ├── bookingController.js
│ ├── driverController.js
│ └── passengerController.js
│
├── middleware/
│ └── authMiddleware.js
│
├── models/
│ ├── booking.js
│ └── user.js
│
├── repository/
│ ├── bookingRepo.js
│ ├── driverRepo.js
│ └── passengerRepo.js
│
├── routes/
│ ├── authRoutes.js
│ ├── bookingRoutes.js
│ ├── driverRoutes.js
│ └── passengerRoutes.js
│
├── services/
│ ├── authService.js
│ ├── bookingService.js
│ ├── distance.js
│ ├── driverService.js
│ ├── locationService.js
│ └── passengerService.js
│
├── utils/
│ ├── db.js
│ └── redisClient.js
│
├── .env
├── index.js
└── package.json
```


---

## ⚙️ Tech Stack

- **Node.js + Express.js** — Server framework
- **MongoDB + Mongoose** — NoSQL database
- **Redis** — For caching and live tracking
- **Socket.IO** — Real-time driver location and booking status
- **JWT** — Authentication for both passengers and drivers
- **Geospatial Calculations** — Used for ETA and fare estimation

---

## 🧪 API Endpoints Overview

### Auth
- `POST /api/auth/register` – Register as driver/passenger
- `POST /api/auth/login` – Login and receive JWT

### Passengers
- `GET /api/passenger/profile`
- `POST /api/passenger/book` – Request a ride

### Drivers
- `GET /api/driver/available` – Set availability
- `PATCH /api/driver/location` – Update current location

### Bookings
- `GET /api/booking/:id` – Get booking status
- `POST /api/booking/accept` – Driver accepts ride

---

## 🧮 Fare & Distance

- **`services/distance.js`** uses Haversine formula or external APIs to compute distance.
- Fare is dynamically calculated using:

---

## 🛰️ Real-Time Functionality

- **Driver location updates** are emitted via Socket.IO to passengers.
- **Booking status** is pushed in real-time to both drivers and passengers.

---

## 🧑‍💻 Setup & Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/phygma/uber-backend-project.git
cd uber-backend-clone
```

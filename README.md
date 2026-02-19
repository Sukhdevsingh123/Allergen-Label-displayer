# Allergen Label Displayer

A professional full-stack web application designed to help users identify potential allergens in their recipes. Users can upload Excel files containing multiple recipes, preview the extracted data, and process it to get a detailed terminal-style allergen report.

---

# Project Screenshots

<div align="center">
  <a href="https://allergenlabel2.vercel.app/">
    <img src=https://github.com/Sukhdevsingh123/Allergen-Label-displayer/blob/main/client/src/assets/1.png" alt="Allergen Label Displayer Screenshot 1" width="800"/>
  </a>
  <br/><br/>
  <a href="https://allergenlabel2.vercel.app/">
    <img src="https://github.com/Sukhdevsingh123/Allergen-Label-displayer/blob/main/client/src/assets/2.png" alt="Allergen Label Displayer Screenshot 2" width="800"/>
  </a>
  <a href="https://allergenlabel2.vercel.app/">
    <img src="https://github.com/Sukhdevsingh123/Allergen-Label-displayer/blob/main/client/src/assets/3.png" alt="Allergen Label Displayer Screenshot 2" width="800"/>
  </a>
</div>

---

#  Live Demo

 **Live Application:**  
https://allergenlabel2.vercel.app/

---

#   Setup Instructions

##  Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node.js)

---

##  Installation & Running

###  Clone & Navigate to Project

```bash
git clone https://github.com/Sukhdevsingh123/Allergen-Label-displayer
cd allergen-label-displayer
```

---

##  Backend Setup

```bash
cd server
npm install
```

### Create a `.env` file inside `server/` folder:

```
PORT=5001
ALLERGEN_API_URL=https://task.cover360.co.in/api/allergens
```

### Start backend:

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5001
```

---

##  Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

---

# API Configuration

The frontend supports both **Local Backend** and **Deployed Backend (Render)**.

File location:

```
client/src/api/recipeApi.js
```
---

##  For Local Development

If backend is running on:

```
http://localhost:5001
```

Use:

```js
baseURL: "http://localhost:5001/api/recipes"
```

---

##  For Production (Render)

Use:

```js
baseURL: "https://allergen-label-displayer.onrender.com/api/recipes"
```

---




Frontend runs at:

```
http://localhost:5173
```

---

#  How to Use

###  Upload Excel File

- Go to Home page.
- Click upload area or drag & drop `.xlsx` file.
- Required columns:
  - `Recipe Name` (or `Product`)
  - `Ingredients`

---

###  Preview Extracted Data

- After upload, a preview table appears.
- You can verify parsed recipes.
- Click **"Change File"** to re-upload if needed.

---

###  Process Allergens

- Click **"Process Allergens"**
- Backend calls external allergen API.
- Ingredients are analyzed.

---

###  View Allergen Report

- Select recipe from dropdown.
- Terminal-style allergen report is displayed.
- Use **Back Arrow** to return to preview.

---

# Technical Solution Explanation

##  Architecture Overview

This project follows a **clean full-stack architecture**:

Frontend → Backend → External API

---

##  Backend Responsibilities

- Excel file upload handling (Multer)
- Excel parsing (xlsx)
- Robust header matching (case-insensitive + flexible naming)
- Ingredient trimming & normalization
- External API integration
- Structured JSON response

---

##  Frontend Responsibilities

- File upload UI
- Preview table
- Recipe selector dropdown
- Terminal-style allergen report
- State management via React Context API

---

##  Tech Stack

### Backend
- Node.js
- Express.js
- Multer
- XLSX
- Axios
- dotenv
- CORS

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- React Context API
- React Hot Toast

---

#  UI/UX Highlights

- Clean human-designed professional UI
- Two-step validation before processing
- Toast-based feedback system
- Terminal-style allergen output
- Responsive layout
- Modular folder structure

---


#  Design Decisions

## Backend-First Processing

- Keeps frontend lightweight
- Protects API logic
- Improves scalability
- Centralized validation

---

## Robust Header Matching

Handles variations like:
- Recipe Name
- recipe name
- PRODUCT
- product

---

## Defensive Programming

- Ingredient whitespace trimming
- Empty value filtering
- Structured error handling
- Clean API responses

---

#  Potential Improvements

##  Scalability

- WebSockets for real-time processing updates
- Redis caching for repeated ingredients
- Rate limiting for API protection

##  Performance Optimizations

- Batch API calls (if supported)
- Background job queue (BullMQ)
- Async processing for large files

##  UI Enhancements

- Dark Mode (Tailwind theme)
- History dashboard
- Save previous analyses
- Export to PDF / Excel
- Drag & drop animation improvements

---

#  Future Enterprise Improvements

- Docker containerization
- CI/CD pipeline
- Logging system (Winston / Morgan)
- Request validation (Joi / Zod)
- Role-based access (if multi-user)

---

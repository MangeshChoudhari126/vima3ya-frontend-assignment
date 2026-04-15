# 🚀 Task 2 — 3D Model Viewer (Three.js)

This project demonstrates a **3D model viewer** built using Three.js with a focus on **optimized loading, lazy loading, and performance handling**.

---

## 📁 Project Structure

```
task-2/
├── public/
│   └── model/
│       └── model-compressed.glb
├── src/
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── NOTES.md
```

---

## 🛠 Tech Stack

* Three.js (for 3D rendering)
* Vite (for development server)
* JavaScript (ES6+)
* CSS (basic styling)

---

## ⚙️ Prerequisites

Make sure you have installed:

* Node.js (v16 or above)
* npm (comes with Node.js)

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/MangeshChoudhari126/vima3ya-frontend-assignment.git
cd vima3ya-frontend-assignment/task-2
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start Development Server

```bash
npm run dev
```

---

### 4. Open in Browser

Visit:

```
http://localhost:5173
```

---

## ✨ Features Implemented

### ✅ 3D Model Rendering

* Loads and displays `.glb` model using Three.js

---

### ✅ Draco Compression

* Model is compressed using Draco to reduce file size
* Improves loading performance

---

### ✅ Lazy Loading of Three.js

* Three.js is dynamically imported
* Prevents blocking initial page load
* Improves performance

---

### ✅ Loading Indicator

* Displays loading progress while model is loading
* Hides automatically after model loads

---

### ✅ Load Time Logging

* Logs model loading time in milliseconds using `performance.now()`

---

## 📌 Model Details

* Format: `.glb`
* Location: `public/model/model-compressed.glb`
* Must be a valid binary GLB file

---

## 📊 Performance Optimization

* Lazy loading reduces initial bundle size
* Draco compression minimizes asset size
* Efficient rendering loop using requestAnimationFrame

---

## 🧠 Notes

Refer to `NOTES.md` for:

* GLB compression details
* Benefits of lazy loading
* Importance of memory management (`dispose()`)

---

## ⚠️ Common Issues

### ❌ Model not loading

* Ensure correct file path:

  ```
  /model/model-compressed.glb
  ```

### ❌ Loader stuck

* Check if `.glb` file is valid (not empty or corrupted)

### ❌ Console errors

* Verify Draco decoder path is correct

---

## 🙌 Author

Your Name
GitHub: https://github.com/MangeshChoudhari126

---

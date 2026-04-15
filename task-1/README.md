# 🚀 Vima3ya Frontend Assignment

This repository contains the implementation of **Task 1 — Reusable Form System with Scroll Navigation** built using React and Vite.

---

## 📁 Project Structure

```
task-1/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠 Tech Stack

* React (Vite)
* Formik (for form handling and validation)
* JavaScript (ES6+)
* CSS (for styling)

---

## ⚙️ Prerequisites

Make sure you have the following installed:

* Node.js (v16 or above recommended)
* npm (comes with Node)

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/MangeshChoudhari126/vima3ya-frontend-assignment.git
cd vima3ya-frontend-assignment/task-1
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

### ✅ Reusable FormField Component

* Built using Formik
* Supports:

  * Required validation
  * Email validation
  * Phone validation
* Custom error messages support

---

### ✅ Validation Behavior

* Errors do NOT show while typing
* Errors do NOT show on focus
* Errors appear only after clicking **Submit**
* After submit, errors update live as user corrects inputs

---

### ✅ Multi-Section Form

* 4 sections:

  * Section A — Personal Info
  * Section B — Contact
  * Section C — Work
  * Section D — Skills

---

### ✅ Scroll-Based Sidebar Navigation

* Fixed sidebar with section bullets
* Bullets highlight cumulatively on scroll
* Highlight remains even after scrolling past a section

---

### ✅ Auto Form Completion Trigger

* Automatically detects when all fields are valid
* Calls `onFormComplete()` function
* Displays loader (simulated API call) for 3 seconds
* Re-triggers on every valid change

---

## 📌 Notes

* Each section is independently structured for scalability
* Code is modular and reusable
* Follows React best practices (Hooks rules, component separation)

---

## 🙌 Author

Your Name
GitHub: https://github.com/MangeshChoudhari126

---

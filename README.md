# 📺 YouTube Clone - Built with React

Welcome to my **YouTube Clone** project, built as part of the **Namaste React** course by [Akshay Saini](https://namastedev.com). This app closely mimics the core features of YouTube and is powered by the **YouTube Data API**, with robust **Google Authentication**, **Redux state management**, **routing**, and dynamic **search functionality** — all using modern React practices.

---

## 🚀 Features

### ✅ Real YouTube API Integration
- Fetches real-time video data using YouTube Data API v3.
- Loads trending, suggested, and searched content seamlessly.

### 🔐 Google Authentication
- Users can sign in with their Google account.
- Handles OAuth securely for login/logout flow.

### 🔁 Centralized State with Redux
- Efficient global state management using Redux and Redux Toolkit.
- Central store for user data, search results, sidebar state, and more.

### 🧠 Higher Order Components (HOC)
- Used to add loading states, wrapper logic, and extend components elegantly.

### 🔍 Powerful Search Functionality
- Dynamic suggestions as you type.
- Instant results with real API calls.
- Smart caching to reduce API usage and enhance performance.

### 🧭 React Router DOM
- Client-side routing using `react-router-dom`.
- Seamless navigation between Home, Watch, Search Results, and more.

---

## 🧑‍💻 Tech Stack

| Technology      | Purpose                              |
|-----------------|--------------------------------------|
| React           | UI Development                       |
| Redux Toolkit   | State Management                     |
| React Router    | Routing                              |
| YouTube API     | Real video data                      |
| Google OAuth    | Authentication                       |
| Tailwind CSS    | Styling (Optional if you used it)    |
| JavaScript (ES6)| Functional & Modern Code             |

---

## 📁 Folder Structure (Simplified)

youtube-clone/ │ ├── components/ │ ├── Header.js │ ├── Sidebar.js │ ├── VideoCard.js │ └── WatchPage.js │ ├── pages/ │ ├── Home.js │ ├── SearchResults.js │ ├── redux/ │ ├── store.js │ └── slices/ │ ├── appSlice.js │ └── searchSlice.js │ ├── hoc/ │ └── withShimmer.js │ ├── utils/ │ └── api.js │ ├── App.js └── index.js

## 🔧 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/youtube-clone.git

2. Install dependencies
   npm install

3. Set up environment variables Create a .env file and add your API key:
   REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id

4. Start the development server
   npm start

🌐 Live Demo
🔗 View Live Project

🧠 What I Learned
Real-world API integration using async/await and fetch.

Managing authentication using Google OAuth.

Using Redux for scalable and efficient state sharing.

React component composition and the power of HOCs.

Handling side effects, performance optimization, and UI caching.

Enhancing UX with smart search and routing.

🙌 Acknowledgements
This project is inspired by the Namaste React course by Akshay Saini.
It was an incredible learning journey that strengthened my understanding of core and advanced React concepts. 

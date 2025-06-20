# Infinite Scroll User Feed

A React-based project that displays an infinite scrollable list of users using Axios and IntersectionObserver. Built with Vite, Tailwind CSS, and no external data-fetching library (no React Query).

---

## 🔍 Features

- 🔄 Infinite scrolling using IntersectionObserver
- 📦 Data fetching with Axios
- 💡 Spinner loader for loading states
- ❌ Error handling for failed requests
- 🧱 Tailwind CSS for styling
- ⚡️ Built using Vite for fast development

---

## 📸 Demo

Live Preview: [https://infinite-scroll-user-feed-react.vercel.app](https://infinite-scroll-user-feed-react.vercel.app)

⚠️ **Note:** The live demo may not work due to CORS restrictions from the external API.

---

## 🛠 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/infinite-scroll-user-feed.git
cd infinite-scroll-user-feed
```

Install dependencies
```bash
npm install
```
Run the app
```bash
npm run dev
```

🔧 API
This project uses the following API: GET https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=0

Sample Response
```bash
{
  "users": [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "email": "emily.johnson@x.dummyjson.com",
      "phone": "+81 965-431-3024",
      "image": "https://dummyjson.com/icon/emilys/128",
      "university": "University of Wisconsin--Madison",
      "company": {
        "title": "Sales Manager"
      }
    }
  ],
  "total": 208,
  "skip": 0,
  "limit": 1
}
```
⚠️ CORS Warning
This project may face CORS errors in production due to restrictions from the external API. To fix this, use a proxy server or request CORS access from the API provider.

📂 Project Structure
```bash
src/
│
├── components/
│   ├── Spinner.jsx
│   ├── UserCard.jsx
│   └── UserFeed.jsx
│
├── services/
│   └── userService.js (if needed)
│
├── App.jsx
└── main.jsx
```
🌐 Demo: https://infinite-scroll-user-feed-react.vercel.app/

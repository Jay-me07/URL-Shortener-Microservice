# 🔗 URL Shortener Microservice

A simple and functional **URL Shortener API** built with **Node.js** and **Express**. This microservice receives a long URL and returns a shortened version, which can be used to redirect back to the original URL — similar to TinyURL or Bitly.

---

## 📄 About

This project was built to demonstrate backend API development using Express, routing, middleware, and basic data validation. It can serve as a foundation for building a full-featured link shortening service with analytics, expiration, and user management.

---

## 🔧 Features

- ✅ Accepts POST requests with a long URL
- ✅ Validates the URL format
- ✅ Stores and returns a unique short URL ID
- ✅ Redirects to the original URL when the short link is visited
- ✅ Basic error handling and routing

---

## 🚀 How It Works

### 1. Submit a long URL:

```bash
POST /api/shorturl
Body: { "url": "https://www.example.com" }
````
Get a short URL response:
{
  "original_url": "https://www.example.com",
  "short_url": 1
}

 Redirect using the short URL:
 GET /api/shorturl/1

🧑‍💻 Tech Stack
| Tool        | Purpose                     |
| ----------- | --------------------------- |
| Node.js     | Backend runtime             |
| Express.js  | API routing & middleware    |
| MongoDB     | Data persistence (optional) |
| Body-parser | Request parsing             |
| Regex       | URL validation              |

🗂️ Folder Structure
URL-Shortener-Microservice/
├── server.js
├── routes/
│   └── shortener.js
├── models/
│   └── urlModel.js
├── package.json
└── README.md

▶️ Getting Started Locally
# Clone the repo
git clone https://github.com/Jay-me07/URL-Shortener-Microservice.git
cd URL-Shortener-Microservice

# Install dependencies
npm install

# Start the server
npm start

⭐ Support
If you like this project, give it a ⭐ to support my work and help others discover it!


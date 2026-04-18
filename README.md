# 🤖 AI eBook Creator - Full Stack SaaS Platform

AI eBook Creator is a premium Full-Stack application that leverages cutting-edge Artificial Intelligence to transform ideas into professional-grade eBooks. From outline generation to full-chapter expansion, custom cover management, and multi-format exports, this platform provides a seamless 360-degree workflow for authors and content creators.

![Cover Image](./src/assets/eBookCreator_cover.png)

---

## 🚀 Key Features

### 🧠 Intelligent eBook Generation
- **AI Outlining**: Automatically generate comprehensive book structures based on a single prompt.
- **Chapter Expansion**: Deep-dive into topics with AI-powered chapter content generation using **Google Gemini** & **Groq**.
- **Interactive Markdown Editor**: Refine your AI-generated content with a sleek, real-time editor.

### 💳 Premium Monetization (Integrated)
- **SSLCommerz Payment Gateway**: Professional integration for local payments via **bKash, Nagad, and Cards**.
- **Pro Tier Model**: 
  - **Free Users**: Limited to creating 3 eBooks.
  - **Pro Users**: Unlimited eBook creation and advanced export features.
- **Subscription Management**: Automated expiry logic and "Pro" badge verification.

### 📑 Professional Export System
- **PDF Export**: Generate high-fidelity PDF documents with structured headings and page numbers.
- **DOCX Export**: Fully editable Microsoft Word documents for further manual refinement.

### 👤 User Experience
- **Sleek Dashboard**: Manage multiple eBook projects with ease.
- **Secure Authentication**: JWT-based login/signup with persistent sessions.
- **Responsive Design**: Designed for both desktop productivity and mobile updates.

---

## 🛠️ Tech Stack

### Frontend
- **React 19** & **Vite** (Next-gen speed)
- **Tailwind CSS 4** (Modern logic-driven styling)
- **Lucide React** (Consistent iconography)
- **React Hot Toast** (Micro-animations for feedback)

### Backend
- **Node.js** & **Express.js**
- **SSLCommerz LTS (v4)** (Secure payment integration)
- **JWT** & **Bcrypt.js** (Standard authentication & security)
- **PDFKit** & **DOCX.js** (Server-side document generation)

### AI & Data
- **Google Generative AI (Gemini 2.0)**
- **Groq SDK** (Llama 3 support)
- **MongoDB** & **Mongoose** (Scalable NoSQL storage)

---

## 📂 Project Structure

```text
AI_eBook_Creator/
├── frontend/             # React (Vite) Frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Main route pages (Dashboard, Landing, Editor)
│   │   ├── context/      # Auth & Payment state
│   │   └── utils/        # API configuration (Axios)
│   └── vercel.json       # Frontend deployment config
│
└── backend/              # Express.js Backend
    ├── controllers/      # Logic for AI, Payment, Auth, and Export
    ├── models/           # Mongoose Data Schemas (User, Book)
    ├── routes/           # API Endpoint definitions
    └── server.js         # Entry point & Middleware
```

---

## 🏁 Installation & Setup

### 1. Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account
- SSLCommerz Sandbox/Live Account

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file:
```env
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_key
SSL_STORE_ID=your_store_id
SSL_STORE_PASSWORD=your_password
IS_SANDBOX=true
SUCCESS_URL=http://localhost:8000/api/payment/success
FRONTEND_URL=http://localhost:5173
```
Run development server: `npm run dev`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 🚢 Deployment (Vercel)

For production, ensure the following environment variables are set in your Vercel Dashboard:

**Backend Vars:**
- `SUCCESS_URL`: `https://your-api.vercel.app/api/payment/success`
- `FRONTEND_URL`: `https://your-frontend.vercel.app`
- `IS_SANDBOX`: `false` (once using Live credentials)

**Frontend Vars:**
- `VITE_API_BASE_URL`: `https://your-api.vercel.app/api`

---

Developed with ❤️ by **shoriful-dev**


# Movie Master Pro

![npm](https://img.shields.io/badge/npm-v1.0.1-CB3837?logo=npm&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12-FFCA28?logo=firebase&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-1-5A29E4)
![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen)

> **Assignment 10 · PH Batch – 12**  
> Client-side repository for a movie management SPA.

---

## ✨ Description (Features)
- 🔍 **Browse & Search:** নাম/জেনার/রেটিং দিয়ে মুভি খোঁজা  
- 🧮 **Filter & Sort:** সাল/রেটিং/ক্যাটাগরি অনুযায়ী ফিল্টার-সোর্ট  
- ➕ **Add Movie:** ফর্ম ভ্যালিডেশনসহ নতুন মুভি যোগ  
- ✏️ **Edit/Update & 🗑️ Delete:** বিদ্যমান ডেটা আপডেট/ডিলিট  
- 📄 **Details Page:** প্রতিটি মুভির আলাদা ডিটেইল ভিউ  
- 🔐 **(ঐচ্ছিক) Protected Routes/Auth:** Firebase auth থাকলে নির্দিষ্ট পেজ প্রটেক্ট করা  
- ⚡ **Fast Dev Experience:** Vite + HMR, Tailwind v4 + daisyUI কম্পোনেন্ট

---

## 🛠 Tech Stack
- **React 19**, **React Router 7**
- **Vite 7** (Dev/Build tool)
- **TailwindCSS 4 + daisyUI** (UI)
- **Axios** (HTTP)
- **Firebase 12** (Auth/Storage/Backend as needed)

---

## 📦 Packages (from `package.json`)
**Dependencies**
- `@tailwindcss/vite` ^4.1.17  
- `axios` ^1.13.2  
- `daisyui` ^5.4.7  
- `firebase` ^12.5.0  
- `lucide-react` ^0.553.0  
- `react` ^19.1.1  
- `react-dom` ^19.1.1  
- `react-icons` ^5.5.0  
- `react-router` ^7.9.5  
- `react-spinners` ^0.17.0  
- `react-toastify` ^11.0.5  
- `tailwindcss` ^4.1.17  

**DevDependencies**
- `@eslint/js` ^9.36.0  
- `@types/react` ^19.1.16  
- `@types/react-dom` ^19.1.9  
- `@vitejs/plugin-react` ^5.0.4  
- `eslint` ^9.36.0  
- `eslint-plugin-react-hooks` ^5.2.0  
- `eslint-plugin-react-refresh` ^0.4.22  
- `globals` ^16.4.0  
- `vite` ^7.1.7  

---

## 📁 Directory Tree
> সাধারণ React + Vite + Tailwind v4 কাঠামো (আপনার প্রোজেক্টে নাম/ফাইল ভিন্ন হলে মিলিয়ে নিন)  
```text
ph12_efthi_movie_masterpro_A10_client/
├─ public/
│  └─ assets/                 # static files (images/icons)
├─ src/
│  ├─ components/             # shared UI components
│  ├─ pages/                  # route-based pages
│  ├─ routes/                 # router setup (createRoutesFromElements/useRoutes)
│  ├─ layouts/                # common layouts (optional)
│  ├─ services/               # axios instance, API helpers
│  ├─ hooks/                  # custom hooks
│  ├─ context/                # auth/app context (optional)
│  ├─ assets/                 # local images/fonts
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css               # Tailwind v4 entry: @import "tailwindcss";
├─ .gitignore
├─ index.html
├─ package.json
├─ package-lock.json
├─ eslint.config.js
└─ vite.config.(js|ts)
````

---

## 🚀 Getting Started

```bash
# 1) Install
npm install

# 2) Dev
npm run dev

# 3) Build
npm run build

# 4) Preview (after build)
npm run preview
```

### 🔧 Tailwind v4 setup (already included via `@tailwindcss/vite`)

* `src/index.css` বা গ্লোবাল CSS ফাইলে রাখুন:

```css
@import "tailwindcss";
```

* কম্পোনেন্টে ক্লাস ইউজ করলেই হবে, আলাদা config ছাড়াই কাজ করবে (কাস্টমাইজ দরকার হলে config যোগ করতে পারেন)।

### 🔐 Firebase (env example)

`.env` (local):

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

---

## 🧪 Scripts

* `dev` – Vite dev server
* `build` – Production build
* `preview` – Local preview server
* `lint` – ESLint

---

## 🔗 Links

* **Client Repo:** [https://github.com/efthi/ph12_efthi_movie_masterpro_A10_client](https://github.com/efthi/ph12_efthi_movie_masterpro_A10_client)
* **Live URL / Server Repo:** *(add when available)*

---

## 📜 License

MIT

```



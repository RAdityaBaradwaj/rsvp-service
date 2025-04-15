# 🎉 RSVP Manager — Team Event RSVP Tool

This is a lightweight React + TypeScript web app that helps manage RSVP responses for team events. Built using modern development practices and tools like **Vite**, the app allows users to add or update player RSVP statuses, view a live summary, and see confirmed attendees.

Inspired by the design aesthetics of productivity dashboards, the UI is soft, modern, and clean.

---

## ✨ Features

- ✅ Add or update a player’s RSVP (`Yes`, `No`, or `Maybe`)
- ✅ View summary of responses (total, confirmed, declined, maybe)
- ✅ See a list of confirmed attendees
- ✅ Clean separation of logic (RSVP service) from UI
- ✅ Unit tests included for service logic using `vitest`

---

## 🧱 Tech Stack

- React + TypeScript
- Vite (build tool)
- CSS (soft + colorful design)
- Vitest (unit testing)

---

## 📦 Setup Instructions

### 1. Clone & Install

```bash
npm install
```

### 2. Start Dev Server

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

---

## 🧪 Run Unit Tests

```bash
npm run test
```

Unit tests are located in `src/__tests__/RsvpService.test.ts`  
They verify RSVP logic: counts, updates, validation, etc.

---

## 📁 Project Structure

```
rsvp-service-final/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── models/
│   │   ├── Player.ts
│   │   └── RsvpStatus.ts
│   ├── services/
│   │   └── RsvpService.ts
│   └── __tests__/
│       └── RsvpService.test.ts
├── index.html
├── package.json
├── tsconfig.json
```

---

## 🙌 Design Highlights

- Inspired by modern dashboard UIs
- Soft gradients, rounded cards, and accessible typography
- Clear, minimalist layout with just the essentials

---

## 📤 Deploy

You can deploy this app easily on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) with just a few clicks — no backend needed!

---

## 🧠 Credits

Built by Aditya Baradwaj for Gametime Hero's coding challenge.  
Logic and structure align with best-practice principles like:

- ✅ Single Responsibility
- ✅ Separation of Concerns
- ✅ Pure Functions
- ✅ Dependency Injection Ready

---

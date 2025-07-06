# QuoteNation - Nexium Assignment 1
## Overview

QuoteNation is a modern, responsive web application built with Next.js, Tailwind CSS, and shadcn/ui. It allows users to discover, filter, and enjoy a curated collection of inspirational quotes by topic. This project was developed as Assignment 1 for Nexium Internship by **M. Saad Khan**.

---

## ✨ Features

- 🔍 **Topic Selector:** Instantly filter quotes by category (e.g., Work, Motivation, Life, Love, etc.).
- 📋 **Dynamic Quote Display:** View quotes in a beautiful accordion interface.
- 🎨 **Modern UI:** Clean, accessible, and responsive design using Tailwind CSS and shadcn/ui components.
- ⚡ **React Context:** Global state management for selected topic and quotes.
- 🛡️ **TypeScript:** Fully typed for safety and maintainability.
- 🌙 **Dark Mode Ready:** Easily extendable for dark mode support.
- 🚀 **Toast Notifications:** User feedback for actions and errors.

---

## 🛠️ Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-hot-toast](https://react-hot-toast.com/)

---

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with QuotesProvider
│   │   ├── page.tsx           # Home page (Hero, Selector, etc.)
│   │   └── ...
│   ├── components/
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Selector.tsx       # Topic dropdown
│   │   ├── QuoteButton.tsx    # Fetch quotes button
│   │   ├── QuotesAccordion.tsx# Accordion for quotes
│   │   ├── NavBar.tsx         # Navigation bar
│   │   └── FootBar.tsx        # Footer
│   ├── provider/
│   │   └── QuoteProvider.tsx  # Context providers for topic & quotes
│   ├── generator/
│   │   └── QuoteGenerator.ts  # Quote fetching logic
│   └── data/
│       └── quotes.json        # Quotes data (by topic)
└── ...
```

---

## 🚦 How It Works

1. **Select a Topic:** Use the dropdown to choose a quote category.
2. **Get Quotes:** Click the "Get Quotes!" button to fetch and display quotes for the selected topic.
3. **View Quotes:** Quotes appear in an interactive accordion. Expand to read more.
4. **Feedback:** Toast notifications provide instant feedback for actions and errors.

---

## 🧑‍💻 Developer Notes

- All state is managed globally using React Context (see `QuoteProvider.tsx`).
- The UI is fully responsive and accessible.
- Easily extend topics or add new features by editing `quotes.json` and related components.

---

## 👤 Author

- Developed by [M. Saad Khan](https://github.com/AlphaBeast97)
- [GitHub Repository](https://github.com/AlphaBeast97/Nexium_Saad_Assign1)

---

## 📄 License

This project is for educational and demonstration purposes.

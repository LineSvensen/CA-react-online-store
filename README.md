# 🛍️ CA Shopdrop React Online Store

This is a **React-based eCommerce application** for browsing and purchasing products. The project includes features like contact trough form, search, sorting, adding items to a cart, and viewing product details.

## 🚀 Features

- 🔍 **Search for Products** - Users can search for products by name.
- 🛒 **Add to Cart** - Add products to the shopping cart.
- 🎚️ **Sort Products** - Sort by:
  - Price: Low to High
  - Price: High to Low
  - On Sale
- 🔄 **Live Filtering** - Displays filtered products based on search input.
- ⭐ **View Product Ratings** - Shows customer reviews and ratings.
- ⚡ **Optimized Performance** - Uses efficient state management and API fetching.

---

## 🏗️ Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, React Hook Form
- **State Management:** useState, useEffect, Zustand
- **Icons:** FontAwesome
- **Deployment:** Netlify

---

## 📦 Installation

1. **Clone the repository**
   git clone https://github.com/YOUR-USERNAME/ca-react-online-store.git
   cd ca-react-online-store
   Install dependencies

npm install

Set up environment variables

Create a .env file in the root directory:

VITE_API_URL=https://v2.api.noroff.dev/online-shop
If deploying to Netlify, add VITE_API_URL to Netlify's Environment Variables.
Run the project

npm run dev

## 🔧 Project Structure

```
src/
│── components/  # Reusable UI components (Buttons, Dropdowns, Loaders)
│   ├── CSS/     # Styles using CSS modules
│── hooks/       # Custom React Hooks for API fetching
│── pages/       # Page components (Home, Product details, Checkout, Contact, Success)
│── stores/      # Global state management (Cart)
│── utils/       # Utility functions (Helpers)
│── assets/      # Static assets (logos, images)
│── App.jsx      # Main App component
│── main.jsx     # Renders App inside root div
│── index.css    # Global styles
│── .env.example # Example environment variables
│── README.md    # Project documentation

```

## 📜 API Reference

This project uses Noroff API to fetch product details.

All Products: GET https://v2.api.noroff.dev/online-shop
Single Product: GET https://v2.api.noroff.dev/online-shop/{id}

## ✅ Deployment

- Build for Production

  npm run build

- Deploy to Netlify
- Push the latest code to GitHub
- Connect GitHub repo to Netlify
- Add VITE_API_URL as an environment variable in Netlify
- Click Deploy

## 🎯 To-Do List

- Improve overall UI
- Add user authentication for checkout
- Better file and folder organized
- More sort by options
- Register/login
- User profile
- Like/heart products

🎉 Thank You for Visiting!
If you like this project, give it a ⭐ on GitHub!

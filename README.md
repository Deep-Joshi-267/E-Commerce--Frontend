# 🛍️ Velora — Modern E-Commerce Frontend

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7.18-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.6-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A clean, responsive, and aesthetic e-commerce frontend built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Designed for fashion, lifestyle, and modern retail brands, featuring interactive pages, smooth micro-animations, and modular component architecture.

---

## 🌟 Key Features

- **🏠 Dynamic Landing Page**:
  - **Hero Section**: High-converting banner with call-to-actions and modern vector illustrations.
  - **Featured Products**: Highlighted trending products with pricing, color variants, and hover states.
  - **Summer Collection Banner**: Editorial grid showcase with split imagery layouts.
  - **Customer Reviews**: Rating bars and verified customer feedback overview.

- **👗 Catalog & Product Showcase (`/products`)**:
  - Clean responsive grid layout for browsing products and collections with pricing tags.

- **✨ Interactive About Page (`/about`)**:
  - Built with **Framer Motion** scroll-triggered animations.
  - Custom SVG clip-path photography shapes.
  - Animated stats counter, company mission & vision, core values, and team cards.

- **📰 Blog Section (`/blog`)**:
  - Fashion and lifestyle editorial articles with published dates and responsive image cards.

- **📬 Contact Page (`/contact`)**:
  - Interactive multi-field inquiry form.
  - Direct contact cards (Location, Phone, Email) with integrated social channel links.

- **📱 Fully Responsive Design**:
  - Mobile-friendly fixed navigation bar with toggleable hamburger drawer.
  - Active route highlighting using React Router v7 `NavLink`.
  - Comprehensive footer with social channels and copyright.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Core Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Code Quality** | ESLint 10 with React Hooks & React Refresh plugins |

---

## 📁 Project Structure

```text
E-Commerce website/
├── public/                # Static assets
├── src/
│   ├── assets/            # Project image and media assets
│   ├── components/        # Reusable UI components
│   │   ├── Bloglist.jsx          # Blog cards grid
│   │   ├── ContactPage.jsx       # Contact form and details
│   │   ├── Cta.jsx               # Promotional CTA banner section
│   │   ├── FeaturedProducts.jsx  # Highlighted products grid
│   │   ├── Footer.jsx            # Global footer component
│   │   ├── Hero.jsx              # Hero banner component
│   │   ├── Navbar.jsx            # Fixed responsive navbar
│   │   ├── Productslist.jsx      # Product listing catalog
│   │   └── Reviews.jsx           # Customer reviews & ratings
│   ├── pages/             # Route-level page views
│   │   ├── About.jsx             # Animated About Us page
│   │   ├── Blog.jsx              # Blog page wrapper
│   │   ├── Contact.jsx           # Contact page wrapper
│   │   ├── Home.jsx              # Main landing page
│   │   └── Products.jsx         # Products catalog page
│   ├── App.jsx            # Router setup and root layout
│   ├── main.jsx           # Application entry point
│   ├── index.css          # Tailwind CSS v4 import
│   └── App.css            # Component-specific styles
├── eslint.config.js       # ESLint configuration
├── vite.config.js         # Vite configuration with Tailwind plugin
└── package.json           # Dependencies and project scripts
```

---

## 🧭 Routes & Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Landing page featuring Hero, Featured Products, CTA, and Reviews |
| `/products` | **Products** | Comprehensive catalog with product images, names, and pricing |
| `/about` | **About** | Story, key stats, mission, vision, core values, and team profiles |
| `/blog` | **Blog** | Fashion tips, wardrobe essentials, and styling articles |
| `/contact` | **Contact** | Inquiry form, address, phone, email, and social links |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v18.0.0 or higher recommended).

### 1. Clone the repository

```bash
git clone https://github.com/Deep-Joshi-267/E-Commerce--Frontend.git
cd "E-Commerce--Frontend"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---|---|
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Builds the project for production into the `dist/` directory. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 🎯 Future Enhancements

- [ ] **Shopping Cart & Drawer**: Add persistent cart state with item counters.
- [ ] **State Management**: Integrate Zustand or Redux Toolkit for cart and favorites.
- [ ] **Product Details Modal / Page**: Detailed views with image galleries, sizes, and reviews.
- [ ] **Search & Filters**: Filter by category, price range, and search by keywords.
- [ ] **Checkout & Payment**: Stripe or Razorpay checkout gateway integration.
- [ ] **Backend Integration**: REST or GraphQL API for dynamic inventory and order handling.

---

## 👤 Author

- **Deep Joshi**
  - GitHub: [@Deep-Joshi-267](https://github.com/Deep-Joshi-267)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

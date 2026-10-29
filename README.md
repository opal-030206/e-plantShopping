# Paradise Nursery – Online Houseplant Shopping Application

**Paradise Nursery** is an interactive, responsive e-commerce web application built with **React** and **Redux Toolkit** as the final capstone project for the Coursera course *"Developing Front-End Apps with React"*.

The application allows plant lovers to browse a curated selection of houseplants across multiple categories, view plant details (names, high-quality images, descriptions, and unit prices), add plants to a shopping cart with dynamic feedback, and manage the cart with real-time price and quantity updates.

---

## 🌿 Features

### 1. Landing Page
- Welcoming greenhouse-themed hero section with background imagery.
- Company name (**Paradise Nursery**) and brand tagline (*"Where Green Meets Serenity"*).
- **"Get Started"** button transitioning smoothly to the product catalog.
- Integrated **About Us** section describing the nursery's mission, values, and dedication to botanical care.

### 2. Product Catalog (`ProductList.jsx`)
- **18 Unique Houseplants** divided into **3 Distinct Categories**:
  - **Air Purifying Plants**: Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera
  - **Aromatic Fragrant Plants**: Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Hyacinth
  - **Low Maintenance Plants**: ZZ Plant, Pothos, Cast Iron Plant, Jade Plant, Chinese Evergreen, Cactus
- Detailed product cards featuring:
  - High-resolution plant photo thumbnails
  - Plant name and botanical benefits / description
  - Formatted unit price (`$`)
  - **"Add to Cart"** button that dynamically adds the item, disables itself with an *"Added to Cart"* label, and increments the navbar cart badge.

### 3. Shopping Cart (`CartItem.jsx`)
- Itemized list of all selected plants displaying:
  - Thumbnail image, plant name, and unit price
  - Quantity controls (`+` and `-` buttons) to increase or decrease quantities in real time
  - Line-item subtotal dynamically calculated (`unit price × quantity`)
  - Delete button to remove an item from the cart
- **Total Cart Amount** dynamically calculated across all items
- **Continue Shopping** button allowing seamless navigation back to the product catalog
- **Checkout** button displaying a *"Coming Soon"* alert message

### 4. Navigation Bar
- Persistent navbar visible across both the Product Listing and Shopping Cart pages.
- Brand logo and name linking to Home.
- Quick navigation links for **Home**, **Plants**, and **Cart**.
- Dynamic cart icon with a live badge showing the total count of items in the cart.

---

## 🛠️ Tech Stack
- **Library / Framework:** React 18
- **State Management:** Redux Toolkit & React-Redux
- **Build Tool:** Vite
- **Styling:** Modular & Responsive CSS3

---

## 📁 Project Structure

```
paradise-nursery/
├── index.html          # HTML entry point with root div
├── package.json        # Project metadata and dependencies
├── vite.config.js      # Vite configuration
├── README.md           # Project documentation and details
└── src/
    ├── main.jsx        # App entry point with Redux Provider
    ├── store.js        # Redux Toolkit store configuration
    ├── CartSlice.jsx   # Redux slice (addItem, removeItem, updateQuantity)
    ├── App.jsx         # Root component with landing page & navigation state
    ├── App.css         # Styling for landing page, navbar, cards, and cart
    ├── AboutUs.jsx     # Company overview and mission statement
    ├── ProductList.jsx # Categorized plants catalog & persistent navbar
    └── CartItem.jsx    # Interactive shopping cart page
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   cd <YOUR-REPO-NAME>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

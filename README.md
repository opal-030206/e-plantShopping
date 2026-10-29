# e-plantShopping

**Project Name:** e-plantShopping (Paradise Nursery)

**e-plantShopping** is an online houseplant shopping application for **Paradise Nursery**, developed using **React**, **Redux Toolkit**, and **Vite** as the final capstone project for the Coursera course *"Developing Front-End Apps with React"*.

---

## 🌿 Features

### 1. Landing Page
- Welcoming greenhouse-themed landing page with background imagery.
- Company name (**Paradise Nursery**) and brand tagline (*"Where Green Meets Serenity"*).
- **"Get Started"** button transitioning smoothly to the product catalog.
- Integrated **About Us** section describing the company's background, mission, values, and dedication to botanical care.

### 2. Product Catalog (`ProductList.jsx`)
- **18 Unique Houseplants** divided into **3 Distinct Categories** (6 plants per category):
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
- **Project Name:** e-plantShopping
- **Library / Framework:** React 18
- **State Management:** Redux Toolkit & React-Redux
- **Build Tool:** Vite
- **Styling:** Modular & Responsive CSS3

---

## 📁 Project Structure

# 🛒 E-Commerce Web Application

A user-friendly e-commerce app built with **React** that allows you to browse products, manage your cart, and soon, check out securely. This project is a work in progress, with features being added regularly.

---

## ✨ Key Features

- **Product Listing:** Browse through a variety of products.
- **Product Details:** View detailed information about each product.
- **Cart Management:** Add, remove, and update items in your cart.
- **Google Authentication:** Login with your Google account (Coming soon).
- **Responsive Design:** Works on all devices, from desktop to mobile.
- **Cart Management:** Add, remove, and update items in your cart.
- **Search Functionality:** Search for products by name.
- **Product Filtering:** Filter products by categories and subcategories.
- **Sorting:** Sort products by relevance, price (low to high, high to low).
- **Order Management:** Place orders and view past orders (Order history feature).
- **Toast Notifications:** Visual feedback for actions like adding products to the cart using react-toastify.
- **Razorpay Integration:** Process payments securely (In progress).
- **Stripe Integration:** Process payments securely (In progress).


---

## 🛠️ Technologies Used

- **Frontend:**
  - React.js
  - React Router for navigation
  - Context API for state management
  - Axios for API requests
  - Tailwind CSS for styling
  - Google Fonts: Custom fonts used ('Outfit' and 'Prata').
  - React Toastify: For toast notifications on user actions.

- **Backend (Planned):**
  - Node.js with Express: For managing server-side logic and APIs.
  - MongoDB: For storing user, product, and cart data (Coming soon).

---

# 🚀 Getting Started

## Prerequisites

You will need to have **Node.js** and **npm** installed on your machine.

## Steps to run locally

1. Clone the repository:

    ```bash
    git clone https://github.com/JigarHingu/ecommerce_app_frontend.git
    cd ecommerce-app
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd frontend
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Start the Development Server:**

    ```bash
    npm run dev
    ```

5. **Open your Browser and Go to:**

    ```
    http://localhost:5173/
    ```

## Technologies

- **React:** Front-end library for building user interfaces.
- **React Router:** For handling navigation and routing.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Vite:** Modern build tool for fast development and build processes.

## 🧩 Components

- **Home:** The main landing page displaying promotional content.
- **Hero:** Displays the main promotional content and latest arrivals.
- **Collection:** Browse through different product collections.
- **BestSeller:** Shows a list of best-selling products.
- **Product:** Detailed information about a single product.
- **Cart:** Manage items added to your cart.
- **PlaceOrder:** Handle order placement process (Coming soon).
- **Orders:** View past orders (Coming soon).
- **LatestCollection:** Displays the latest products.
- **OurPolicy:** Outlines the company’s policies on returns, exchanges, and support.
- **NewsletterBox:** Allows users to subscribe to the newsletter.
- **ProductItem:** Represents an individual product for display in lists.
- **Navbar:** Displays the navigation bar and links to pages like Home, Collection, About, and Contact..
- **Footer:** Contains company information and links.
- **SearchBar:** Allows users to search for products.
- **Title:** Custom component to display headings on the Collection page.
- **RelatedProducts**: Displays a list of products related to the currently viewed product.
- **ProductItem**: Represents an individual product in product listings.
- **ToastContainer**: Handles toast notifications for actions like adding products to the cart.
-**Admin Dashboard:** Manage products, view orders, and handle user management (Planned).

## 📦 Contexts

- **ShopContext:** Provides global state management for products, currency, and delivery fee.
- Products: List of all available products.
- Currency: Manages the currency format.
- Cart: Manages cart operations like adding/removing products and updating quantities.
- Delivery Fee: Handles delivery-related information (future integration).
- Search: Handles the display and filtering of search results.

## 🧑‍💻 Development Setup

To set up the development environment:

1. **Ensure you have Node.js and npm installed.**

2. **Install ESLint for code linting:**

    ```bash
    npm install eslint
    ```

3. **Run ESLint to check code quality:**

    ```bash
    npm run lint
    ```

4. **Run Tests (if applicable):**

    ```bash
    npm run dev
    ```

## 🔧 Deployment

Deployment steps will be added once backend integration is complete and the project is ready for production deployment.

## 📚 Future Plans
- User Authentication: Google OAuth for user login and personalized cart management.
- Payment Integration: Secure online payment integration using UPI or other payment methods.
- Backend Integration: Node.js with MongoDB to handle data storage, order tracking, and user management.
- Wishlist: Allow users to save products for future purchases.
- Review System: Allow users to leave reviews and ratings for products.
- Admin Dashboard: An interface for administrators to manage products, orders, and users.


## 🤝 Contributions

Contributions are welcome! If you have suggestions, bug reports, or enhancements, please open an issue or submit a pull request. 

Thank you for your interest in King's Collection!

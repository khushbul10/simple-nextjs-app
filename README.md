# Simple Next.js App

## Description
A modern e-commerce demo built with Next.js, MongoDB, Tailwind CSS, and NextAuth. Features product listing, highlights, authentication, protected routes, and admin dashboard.

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khushbul10/simple-nextjs-app.git
   cd simple-nextjs-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your MongoDB URI and NextAuth secrets.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Access the app:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Route Summary

| Route                        | Description                                 |
|------------------------------|---------------------------------------------|
| `/`                          | Home page                                   |
| `/products`                  | Product listing page                        |
| `/products/[id]`             | Product details page                        |
| `/register`                  | User registration page                      |
| `/login`                     | User login page                             |
| `/dashboard`                 | User/admin dashboard (protected)            |
| `/dashboard/add-product`     | Add product page (protected)                |
| `/api/products`              | Products API (GET, POST, supports `limit`)  |
| `/api/products/[id]`         | Product details API                         |
| `/api/register`              | User registration API                       |

## Features
- Product highlights
- Authentication (NextAuth)
- Protected routes
- Admin dashboard
- Toast notifications
- Responsive design with Tailwind CSS

---
Feel free to contribute or customize for your own use!

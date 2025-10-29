# Slooze Commodities Management System

A modern, role-based commodities management system built with React and Tailwind CSS.

## 🚀 Live Demo

[View Live Application](#https://slooze-commodities.vercel.app/login) <!-- Add your deployed URL here -->

## ✨ Features

### Authentication & Access
- ✅ Email & password login with validation
- ✅ Role-based access control (Manager & Store Keeper)
- ✅ Secure session management

### Core Features
- ✅ **Dashboard** - Manager-only analytics dashboard
  - Real-time inventory statistics
  - Product category breakdown
  - Low stock alerts
  - Total inventory value tracking

- ✅ **View Products** - Accessible to all roles
  - Clean, card-based product display
  - Detailed product information (price, stock, supplier)

- ✅ **Add/Edit Products** - Full CRUD operations
  - Add new products with form validation
  - Edit existing product details
  - Delete products with confirmation

### UI Enhancements
- ✅ **Light/Dark Mode** - Seamless theme switching
- ✅ **Role-Based Menu** - Dynamic UI restrictions based on user role



## 🎯 Demo Credentials

### Manager Access
- Email: `manager@slooze.xyz`
- Password: `manager123`
- Access: Dashboard + Products

### Store Keeper Access
- Email: `keeper@slooze.xyz`
- Password: `keeper123`
- Access: Products only

## 🛠️ Technology Stack

- **React 18** - Modern React with Hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Context API** - State management for auth and theme

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/dhanushxploit/slooze-commodities.git
cd slooze-commodities

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`


## 🎨 Features Breakdown

### Role-Based Access Control
- **Manager Role**: Full access to dashboard analytics and product management
- **Store Keeper Role**: Access to product viewing and management only
- Dynamic menu rendering based on user role
- Protected routes with role validation

### Dashboard Analytics (Manager Only)
- Total Products count
- Total Stock Items
- Inventory Value calculation
- Low Stock Alerts (<100 units)
- Category-wise product distribution

### Product Management
- Create new products with complete details
- Edit existing product information
- Delete products (with confirmation)
- Real-time updates to inventory statistics

### Theme System
- Light/Dark mode toggle
- Persistent theme preference
- Smooth transitions between themes
- Optimized for readability in both modes

## 🔒 Security Considerations

**Note**: This is a front-end demonstration application with mock authentication.

For production use, implement:
- Backend API for authentication
- Secure token-based auth (JWT)
- Password hashing
- HTTPS encryption
- Server-side session management

## 📝 Assumptions & Design Decisions

1. **Data Persistence**: Uses in-memory state (React state) for demo purposes
2. **Mock Data**: Predefined users and products for demonstration
3. **Session Management**: Uses React Context (would use secure cookies/tokens in production)
4. **Validation**: Client-side validation only (server-side needed for production)
5. **Low Stock Threshold**: Set at 100 units for demonstration

## 📄 License

© Slooze. All Rights Reserved.

This project was created as part of the Slooze Front-End Developer take-home challenge.

---

**Developed by [Your Name]** - [dhanushv136@gmail.com] - [https://www.linkedin.com/in/dhanush-viswalingam]

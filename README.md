# React Dashboard - Atomic Design Structure

This project is a dashboard application built with **React**, **Tailwind CSS**, and follows the principles of **Atomic Design**. It includes a simple authentication system and a list of comments fetched from a mock API using **JSONPlaceholder**.

## Project Structure

The project is organized according to **Atomic Design** principles to ensure reusable and modular components. Below is the main structure:

```plaintext
src/
│
├── components/
│   ├── atoms/              # Small, independent components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Icon.jsx
│   │   └── Label.jsx
│   │
│   ├── molecules/          # Groupings of atoms
│   │   ├── FormGroup.jsx
│   │   ├── ModalHeader.jsx
│   │   └── Modal.jsx
│   │
│   ├── organisms/          # More complex structures combining molecules and atoms
│   │   ├── LoginForm.jsx
│   │   └── DashboardItem.jsx
│   │
│   ├── templates/          # Page-level layouts
│   │   └── Dashboard.jsx
│   │
│   └── pages/              # Full pages of the application
│       ├── LoginPage.jsx
│       └── DashboardPage.jsx
│
├── features/               # Business logic
│   ├── auth/
│   │   └── authService.js
│   └── dashboard/
│       └── commentService.js
│
├── hooks/                  # Custom React hooks
│   └── useAuth.js
│
├── layouts/                # Layouts shared across pages
│   └── MainLayout.jsx
│
├── styles/                 # Global CSS using Tailwind
│   └── index.css
│
├── tests/                  # Unit tests for components and services
│   └── unit/
│       ├── authService.test.jsx
│       ├── Button.test.jsx
│       ├── Dashboard.test.jsx
│       ├── DashboardItem.test.jsx
│       ├── FormGroup.test.jsx
│       ├── Icon.test.jsx
│       ├── Input.test.jsx
│       ├── Label.test.jsx
│       ├── Modal.test.jsx
│       └── ModalHeader.test.jsx
├── App.jsx                 # Main app component
├── main.jsx                # ReactDOM render entry point
└── routes.jsx              # Application routes
```
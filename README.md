# innovather

**Elevator Pitch:** A streamlined web-based minimart system designed to manage user carts, vouchers, and an admin panel, ensuring efficient shopping and management workflows.

---

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Setup Instructions](#setup-instructions)
4. [File Structure](#file-structure)
5. [Usage](#usage)
6. [Technologies Used](#technologies-used)

---

## **Project Overview**

innovather is our team's project: a minimart management system designed to simplify shopping and administrative tasks. Users can add items to their cart, use vouchers, and administrators can view all user activities through a dynamic admin panel.

---

## **Features**

- **User Functionalities:**
  - Add items to the shopping cart.
  - Apply vouchers for discounts.
  - Save user information in local storage.
- **Admin Panel:**
  - View all users and their cart details.
  - Monitor vouchers applied by users.
  - Real-time updates when local storage changes.
- **Responsive Design:**
  - Accessible across various devices with a user-friendly interface.

---

## **Setup Instructions**

### Prerequisites

- Node.js installed on your machine.

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd innovather
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. Open your browser and go to `http://localhost:3000`.

---

## **File Structure**

```
innovather/
├── code/
│   ├── public/             # HTML, CSS, and JavaScript files
│   ├── generateHashes.js   # Utility for generating hash values
│   ├── users.json          # Sample user data
│   ├── node_modules/       # Node.js dependencies
│   ├── server.js           # Backend server setup
│   ├── package.json        # Project metadata and dependencies
│   ├── package-lock.json   # Lockfile for dependencies
├── LICENSE                 # License file
├── README.md               # Project documentation
```

---

## **Usage**

1. **For Users:**

   - Access the homepage to add items to the cart and apply vouchers.
   - User data and cart details will be saved locally.

2. **For Admins:**

   - Open the admin panel to view and monitor all users, their cart details, and applied vouchers.
   - Real-time updates ensure the data is always current.

---

## **Technologies Used**

- **Frontend:**
  - HTML, CSS, JavaScript
- **Backend:**
  - Node.js
- **Data Storage:**
  - LocalStorage (for user data)
  - JSON (for static user data and vouchers)
- **Package Manager:**
  - npm

---

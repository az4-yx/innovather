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
7. [Inspiration](#inspiration)
8. [What it does](#what-it-does)
9. [How we built it](#how-we-built-it)
10. [Challenges we ran into](#challenges-we-ran-into)
11. [Accomplishments we're proud of](#accomplishments-that-were-proud-of)
12. [What we learned](#what-we-learned)
13. [What's next for innovather](#whats-next-for-innovather)

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

## **Inspiration**

Our team, innovather, was inspired by the need to create a simplified e-commerce solution for users who enjoy online shopping but are often overwhelmed by complex systems. We wanted to build a system that is both easy to use and efficient, focusing on providing a smooth shopping experience. The project also gave us the opportunity to explore full-stack development with a real-world application.

---

## **What it does**

The innovather minimart system allows users to:

- Browse a list of items available for purchase.
- Add items to their shopping cart.
- Apply available vouchers for discounts.
- View their cart and check out with a simple process.
- Admin panel to monitor and manage user activity and cart contents.

---

## **How we built it**

We built innovather using:

- **Node.js** for the backend, which provides a scalable and efficient runtime environment.
- **Express** for the server framework to handle HTTP requests and manage routes.
- **HTML, CSS, and JavaScript** for the front-end to provide a smooth user interface.
- **localStorage** to store user data (e.g., cart items, vouchers) for a persistent experience.
- **JSON** to store user data locally (users.json).
- **GitHub** for version control and collaboration.

The application is structured with a simple, intuitive design for the front-end and a lightweight server that handles the core functionalities of the system.

---

## **Challenges we ran into**

During the development process, we faced several challenges:

- **Handling Dynamic Data:** Managing user data (cart items, vouchers) with JavaScript and ensuring that the interface updated dynamically when items were added or removed.
- **LocalStorage Limitations:** We had to ensure that data was stored effectively and managed securely, particularly since we were using localStorage for data persistence.
- **UI/UX Design:** Designing an intuitive interface while maintaining functionality was tricky. We wanted the system to be easy to use but feature-rich.

---

## **Accomplishments that we're proud of**

- **Functional Admin Panel:** The admin panel that allows for easy monitoring and manipulation of user data was a huge accomplishment. We managed to create a table that dynamically loads user data from localStorage.
- **Seamless User Experience:** Despite challenges with dynamic content updates, we were able to implement a smooth shopping experience for users, from browsing items to checking out.

---

## **What we learned**

Through this project, we learned a lot about full-stack development, including:

- How to manage front-end and back-end interactions.
- The importance of handling dynamic data efficiently.
- The power of JavaScript and Node.js in building interactive web applications.
- Best practices in using localStorage for client-side data management.

---

## **What's next for innovather**

Moving forward, we plan to:

- Implement a backend database to replace localStorage for more robust data management.
- Improve the user interface with more advanced front-end frameworks like React or Vue.js.
- Add user authentication and registration functionality to allow personalized shopping experiences.
- Scale the system to support more advanced features like product recommendations, a loyalty program, and payment integration.

---
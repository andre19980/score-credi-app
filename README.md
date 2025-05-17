# Aprova Fácil

This project is a **responsive** web application designed to register users and analyze their profiles for credit approval. The application was built using **Next.js** for the frontend and **Express** for the backend. The system collects user data, processes information and, based on analysis criteria, assesses whether the user's profile is eligible for credit approval.

## Technologies Used

### Frontend
- **Next.js 14**
- **React**
- **Tailwind CSS**
  
### Backend
- **Express** **Node.js
- **Node.js**

## Features

- User Registration: Allows new users to register in the system by providing the following information: name, age, city and monthly income.
- **Login**: Secure authentication using JWT.
- Profile Analysis**: Evaluates the user's credit and income data to determine eligibility for credit approval.

## Installation

### Prerequisites
- **Node.js** (v20+)

### Steps to run the project

1. Inside the folder, install the dependencies:
    ```bash
    npm install
    ```

2. Run the application in `dev` mode:
    ```bash
    npm run dev
    ```
    Or if you want to run the application in a `prod` ready version:
   ```bash
   npm run build
   npm run start
   ```

3. Access the application in the browser:
    ```
    http://localhost:3000
    ```

4. To run the unit tests, execute:
    ```
    npm run test
    ```

5. To run the e2e tests, make sure the application is running on `localhost:3000` and then run:
    ```bash
    npm run test:e2e
    ```

    If you want to check the reports, run:
    ```bash
    npm run test:e2e:report
    ```

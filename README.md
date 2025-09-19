# React TypeScript UserContext Example

This is a small React + TypeScript project demonstrating how to use **React Context** to share state between components. The app dynamically updates context values and displays them safely in a child component.

---

## Features

- **Type-safe context** with TypeScript interfaces
- Handles **undefined context values** safely
- Demonstrates the **Provider / useContext pattern**
- Dynamically updates context values after a timeout

---

## How it Works

1. A **UserContext** is created to hold user information (`name` and `message`).
2. The **App** component provides context values using `<UserContext.Provider>` and updates them dynamically after 5 seconds.
3. A **Message** component consumes the context safely with `useContext` and displays the user name and message.
4. Using context avoids prop drilling and keeps state sharing clean and type-safe.

---

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/cmartinezBoada/ReactTypescript-Context-Example.git
cd react-context-example

### 2. Install dependencies
npm install

### 3. Start the development server 
npm run dev  

### 4. Open your browser, after 5 seconds the message will update. 
http://localhost:5174/
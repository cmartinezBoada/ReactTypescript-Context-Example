# React TypeScript UserContext Example

This is a small example demonstrating how to create and use a **React Context** in a **TypeScript** project. It includes proper typing, safe usage, and shows how to provide and consume global data in a React app.

---

## Features

- **Type-safe context** using TypeScript interfaces
- Handles **undefined context values** safely
- Demonstrates **Provider / useContext pattern**
- Simple, easy-to-understand example

---

## Code Overview

### UserContext.tsx

```ts
import React from 'react';

interface UserContextType {
  name: string;
  message: string;
}

// Create the context with a default value of undefined
export const UserContext = React.createContext<UserContextType | undefined>(undefined);

---

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/cmartinezBoada/ReactTypescript-Context-Example.git
cd react-context-example

cd react-context-example

npm install

npm run dev

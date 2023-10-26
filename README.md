# Node Typescript Assignment

## Overview

This project is a simple stock management system built with Node.js and TypeScript. It reads stock levels and transactions from JSON files and provides a function to get the current stock level for a given SKU (Stock Keeping Unit).

## Requirements

- Node.js
- npm

## Project Structure

```
node-ts-assignment/
|-- src/
|   |-- fileReader.ts  // File reading
|   |-- index.d.ts // Containing types/interfaces
|   |-- main.ts  // Entry point
|   |-- stock.json
|   |-- stockManager.ts  // Stock management logic
|   |-- transactions.json
|-- __tests__/
|   |-- stockManager.test.ts  // Test for stockManager
|-- node_modules/
|-- package.json
|-- tsconfig.json
|-- README.md
```

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/shahmir811/node-ts-assignment.git
   ```

2. Navigate to the project directory:

   ```
   cd node-ts-assignment
   ```

3. Install dependencies:

   ```
   npm install
   ```

## Usage

### Build the Project

To compile the TypeScript files, run:

```
npm run build
```

This will generate compiled JavaScript files in the `dist/` directory.

### Run the Program

To run the program, execute:

```
npm start
```

### Run Tests

To run the tests, execute:

```
npm test
```

## Functionality

The main function `getCurrentStock(sku: string)` returns a Promise that resolves to an object containing the SKU and its current quantity. The function reads from `stock.json` and `transactions.json` files to calculate the current stock level for the given SKU.

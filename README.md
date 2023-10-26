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

## Functionality

The main function `getCurrentStock(sku: string)` returns a Promise that resolves to an object containing the SKU and its current quantity. The function reads from `stock.json` and `transactions.json` files to calculate the current stock level for the given SKU.

## Unit Testing

The project uses [Jest](https://jestjs.io/) for unit testing. The tests are focused on the `getCurrentStock` function, which calculates the current stock level for a given SKU based on initial stock levels and transactions.

### Test Scenarios

1. **Correct Stock Level for a Given SKU**:  
   This test checks if the function correctly calculates the stock level for a SKU that exists in both `stock.json` and `transactions.json`. The test uses mock data to simulate an initial stock level of 10, an incoming transaction of 5 units, and an outgoing transaction of 2 units. The expected final stock level is 13.

   ```typescript
   it('should return the correct stock level for a given SKU', async () => {
   	// ...test implementation
   });
   ```

2. **Non-Existent SKU**:  
   This test checks if the function throws an error when asked for a SKU that doesn't exist in either `stock.json` or `transactions.json`.

   ```typescript
   it('should throw an error for a non-existent SKU', async () => {
   	// ...test implementation
   });
   ```

3. **SKUs Not Present in `stock.json`**:  
   This test checks if the function assumes a starting quantity of 0 for SKUs that are not present in `stock.json` but have transactions in `transactions.json`.
   ```typescript
   it('should assume a starting quantity of 0 for SKUs not present in stock.json', async () => {
   	// ...test implementation
   });
   ```

### Running Tests

To run the tests, execute the following command:

```bash
npm run test
```

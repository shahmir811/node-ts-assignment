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
|   |-- fileReader.test.ts  // Test for fileReader
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

#### stockManager.ts

1. **Correct Stock Level for a Given SKU**:  
   Checks if the function correctly calculates the stock level for a SKU that exists in both `stock.json` and `transactions.json`.

2. **Non-Existent SKU**:  
   Checks if the function throws an error for a SKU that doesn't exist in either `stock.json` or `transactions.json`.

3. **SKUs Not Present in `stock.json`**:  
   Checks if the function assumes a starting quantity of 0 for SKUs not present in `stock.json`.

#### fileReader.ts

1. **Read and Parse a JSON File**:  
   Checks if `readJSONFile` can correctly read and parse a JSON file.

2. **File Does Not Exist**:  
   Checks if `readJSONFile` throws an error when trying to read a non-existent file.

### Running Tests

To run the tests, execute the following command:

```bash
npm run test
```

## Test Coverage

The project aims for high test coverage to ensure code quality. The coverage metrics are as follows:

- **Statements:** The percentage of statements that are covered by tests.
- **Branches:** The percentage of branches (like if or switch statements) that are covered.
- **Functions:** The percentage of functions that are covered.
- **Lines:** The percentage of lines that are covered.
- **Uncovered Line #s:** The line numbers in your code that are not covered by any tests.

To view the coverage report, you can open the `coverage/lcov-report/index.html` file in a web browser after running the tests.

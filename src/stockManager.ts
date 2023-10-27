import { readJSONFile } from './fileReader';
import { Stock, Transaction } from './index.d';

export const getCurrentStock = async (sku: string): Promise<Stock> => {
	const initialStocks: Stock[] = await readJSONFile('stock.json');

	const transactions: Transaction[] = await readJSONFile('transactions.json');

	// Find initial stock for the given SKU
	const initialStock = initialStocks.find(stock => stock.sku === sku)?.qty || 0;

	// Calculate current stock based on transactions
	const currentStock = transactions.reduce((acc, transaction) => {
		if (transaction.sku === sku) {
			if (transaction.type === 'INCOMING') {
				return acc + transaction.qty;
			} else if (transaction.type === 'OUTGOING') {
				return acc - transaction.qty;
			} else {
				throw new Error(`Invalid transaction type: ${transaction.type}`);
			}
		}
		return acc;
	}, initialStock);

	if (currentStock < 0) {
		throw new Error(`Stock level for SKU ${sku} is negative`);
	}

	return { sku, qty: currentStock };
};

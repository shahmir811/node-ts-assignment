import { readJSONFile } from './fileReader';
import { Stock, Transaction } from './index.d';

export const getCurrentStock = async (sku: string): Promise<{ sku: string; qty: number }> => {
	const stocks: Stock[] = await readJSONFile('stock.json');
	const transactions: Transaction[] = await readJSONFile('transactions.json');

	let stockQty = 0;
	const stockItem = stocks.find(item => item.sku === sku);
	if (stockItem) {
		stockQty = stockItem.qty;
	}

	const skuTransactions = transactions.filter(transaction => transaction.sku === sku);
	if (!stockItem && skuTransactions.length === 0) {
		throw new Error(`SKU ${sku} does not exist`);
	}

	for (const transaction of skuTransactions) {
		stockQty += (transaction.type === 'IN' ? 1 : -1) * transaction.qty;
	}

	return { sku, qty: stockQty };
};

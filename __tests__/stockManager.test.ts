// Import the function to be tested
import { getCurrentStock } from '../src/stockManager';
// Mock the fileReader module
import { readJSONFile } from '../src/fileReader';

jest.mock('../src/fileReader');

describe('getCurrentStock', () => {
	beforeEach(() => {
		// Reset the mock before each test
		(readJSONFile as jest.Mock).mockReset();
	});

	it('should return the correct stock level for a given SKU', async () => {
		// Mock the data for stock.json and transactions.json
		(readJSONFile as jest.Mock)
			.mockImplementationOnce(() => Promise.resolve([{ sku: 'SKU123', qty: 10 }]))
			.mockImplementationOnce(() =>
				Promise.resolve([
					{ sku: 'SKU123', type: 'IN', qty: 5 },
					{ sku: 'SKU123', type: 'OUT', qty: 2 },
				])
			);

		const result = await getCurrentStock('SKU123');
		expect(result.sku).toBe('SKU123');
		expect(result.qty).toBe(13); // Initial 10 + 5 (IN) - 2 (OUT)
	});

	it('should throw an error for a non-existent SKU', async () => {
		// Mock the data for stock.json and transactions.json
		(readJSONFile as jest.Mock)
			.mockImplementationOnce(() => Promise.resolve([{ sku: 'SKU124', qty: 10 }]))
			.mockImplementationOnce(() => Promise.resolve([{ sku: 'SKU124', type: 'IN', qty: 5 }]));

		await expect(getCurrentStock('NON_EXISTENT_SKU')).rejects.toThrow('SKU NON_EXISTENT_SKU does not exist');
	});

	it('should assume a starting quantity of 0 for SKUs not present in stock.json', async () => {
		// Mock the data for stock.json and transactions.json
		(readJSONFile as jest.Mock)
			.mockImplementationOnce(() => Promise.resolve([]))
			.mockImplementationOnce(() =>
				Promise.resolve([
					{ sku: 'SKU125', type: 'IN', qty: 5 },
					{ sku: 'SKU125', type: 'OUT', qty: 2 },
				])
			);

		const result = await getCurrentStock('SKU125');
		expect(result.sku).toBe('SKU125');
		expect(result.qty).toBe(3); // 0 (initial) + 5 (IN) - 2 (OUT)
	});
});

import { readJSONFile } from '../src/fileReader';
import { getCurrentStock } from '../src/stockManager';

// Mock readJSONFile
jest.mock('../src/fileReader');

describe('getCurrentStock', () => {
	beforeEach(() => {
		(readJSONFile as jest.Mock).mockReset();
	});

	it('should return the correct stock level for a given SKU', async () => {
		(readJSONFile as jest.Mock)
			.mockResolvedValueOnce([{ sku: 'SKU123', qty: 100 }])
			.mockResolvedValueOnce([{ sku: 'SKU123', type: 'INCOMING', qty: 50 }]);

		const result = await getCurrentStock('SKU123');

		expect(result).toEqual({ sku: 'SKU123', qty: 150 });
	});

	it('should throw an error for a non-existent SKU', async () => {
		// Setup mock to return empty arrays
		(readJSONFile as jest.Mock).mockResolvedValueOnce([]).mockResolvedValueOnce([]);

		try {
			const result = await getCurrentStock('NON_EXISTENT_SKU');
		} catch (error: unknown) {
			if (error instanceof Error) {
				expect(error.message).toBe('SKU does not exist');
			} else {
				throw error;
			}
		}
	});

	it('should handle SKUs not present in stock.json', async () => {
		(readJSONFile as jest.Mock)
			.mockResolvedValueOnce([])
			.mockResolvedValueOnce([{ sku: 'NEW_SKU', type: 'INCOMING', qty: 50 }]);

		const result = await getCurrentStock('NEW_SKU');
		expect(result).toEqual({ sku: 'NEW_SKU', qty: 50 });
	});
});

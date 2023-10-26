import { getCurrentStock } from '../src/stockManager';

describe('getCurrentStock', () => {
	it('should return the correct stock level for a given SKU', async () => {
		const result = await getCurrentStock('SKU123');
		expect(result.sku).toBe('SKU123');
		expect(result.qty).toBeGreaterThan(0);
	});

	it('should throw an error for a non-existent SKU', async () => {
		await expect(getCurrentStock('NON_EXISTENT_SKU')).rejects.toThrow('SKU NON_EXISTENT_SKU does not exist');
	});
});

import fs from 'fs/promises';
import { readJSONFile } from '../src/fileReader';

// Mock fs.promises.readFile
jest.mock('fs/promises');

describe('readJSONFile', () => {
	beforeEach(() => {
		(fs.readFile as jest.Mock).mockReset();
	});

	it('should read and parse a JSON file correctly', async () => {
		(fs.readFile as jest.Mock).mockResolvedValue(JSON.stringify({ key: 'value' }));

		const result = await readJSONFile('stock.json');
		expect(result[0]).toEqual({ sku: 'LTV719449/39/39', stock: 8525 });
	});

	it('should throw an error if the file does not exist', async () => {
		(fs.readFile as jest.Mock).mockRejectedValue(new Error('ENOENT: no such file or directory'));

		await expect(readJSONFile('nonexistentfile.json')).rejects.toThrow('ENOENT: no such file or directory');
	});
});

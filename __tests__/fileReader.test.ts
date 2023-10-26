// Import the function to be tested
import fs from 'fs/promises';
import { readJSONFile } from '../src/fileReader';

// Mock fs.promises.readFile
jest.mock('fs/promises');

describe('readJSONFile', () => {
	beforeEach(() => {
		// Reset the mock before each test
		(fs.readFile as jest.Mock).mockReset();
	});

	it('should read and parse a JSON file correctly', async () => {
		// Mock fs.promises.readFile to return a JSON string
		(fs.readFile as jest.Mock).mockResolvedValue(JSON.stringify({ key: 'value' }));

		const result = await readJSONFile('stock.json');
		expect(result[0]).toEqual({ sku: 'LTV719449/39/39', stock: 8525 });
	});

	it('should throw an error if the file does not exist', async () => {
		// Mock fs.promises.readFile to throw an ENOENT error
		(fs.readFile as jest.Mock).mockRejectedValue(
			new Error("ENOENT: no such file or directory, open '/some/path/nonexistentfile.json'")
		);

		await expect(readJSONFile('nonexistentfile.json')).rejects.toThrow('ENOENT: no such file or directory');
	});
});

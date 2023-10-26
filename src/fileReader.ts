import fs from 'fs';
import path from 'path';

export const readJSONFile = async (filePath: string): Promise<any> => {
	// Debug: Print the filePath
	console.log(`Reading file: ${filePath}`);

	const data = await fs.promises.readFile(path.resolve(__dirname, filePath), 'utf-8');
	return JSON.parse(data);
};

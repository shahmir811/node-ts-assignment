import fs from 'fs';
import path from 'path';

export const readJSONFile = async (filePath: string): Promise<any> => {
	const data = await fs.promises.readFile(path.resolve(__dirname, filePath), 'utf-8');
	return JSON.parse(data);
};

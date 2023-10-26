export interface Stock {
	sku: string;
	qty: number;
}

export interface Transaction {
	sku: string;
	type: 'IN' | 'OUT';
	qty: number;
}

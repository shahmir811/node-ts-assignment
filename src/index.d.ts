export interface Stock {
	sku: string;
	qty: number;
}
export interface Transaction {
	sku: string;
	type: 'INCOMING' | 'OUTGOING';
	qty: number;
}

import { getCurrentStock } from './stockManager';

(async () => {
	try {
		const result = await getCurrentStock('SKU123');
		console.log(`Current stock for SKU123: ${result.qty}`);
	} catch (error) {
		console.error(error);
	}
})();

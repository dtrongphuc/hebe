const filterKey = ['_id', '__v', 'update_at'];

export default function dataToColumn(dataSrc) {
	let validColumn = Object.keys(dataSrc).filter(
		(key) => filterKey.indexOf(key) === -1
	);

	return validColumn.map((column) => ({
		key: column,
		name: column,
	}));
}

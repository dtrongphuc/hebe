export const productPriceString = (price) => {
	return `$${price % 1 === 0 ? price + '.00' : price}`;
};

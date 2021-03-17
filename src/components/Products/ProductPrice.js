import React from 'react';

export default function ProductPrice({ className, price }) {
	return <p className={`price ${className}`}>${price}.00</p>;
}

import React, { useState, useEffect } from 'react';
import Item from '../Card/Item';
import '../Items/ListContainer.css';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
.then(json=>setProducts(json))
},
[]
);

	return (
		<div className='List-container'>
			{products.map((product) => {
				return (
					<div key={product.id}>
						<Link to={`/detail/${product.id}`} className='barraNav-li'>
							<Item data={product} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default ItemListContainer;

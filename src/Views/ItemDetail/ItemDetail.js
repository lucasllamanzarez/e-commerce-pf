import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import { useParams } from 'react-router';
import Item from '../../components/Card/Item';

const ItemDetail = () => {
	const [product, setProduct] = useState([]);

	let { id } = useParams();

	useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
.then(json=>setProduct(json))
},
[id]
);

	return (
		<div className='List-detail'>
			{product.map((prod) => {
				return (
					<div>
						<Item data={prod} />
					</div>
				);
			})}
		</div>
	);
};

export default ItemDetail;
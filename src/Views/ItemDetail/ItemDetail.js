import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import { useParams } from 'react-router';
import Item2 from '../../components/Card/Item2';

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
				<Item2 data={product} />
		</div>
	);
};

export default ItemDetail;
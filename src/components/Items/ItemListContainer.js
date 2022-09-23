import React, { useState, useEffect } from 'react';
import Item from '../Card/Item';
import '../Items/ListContainer.css';
import { Link } from 'react-router-dom';
//Firebase
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);

		const getProducts = async () => {
			const q = query(
				collection(db,'products')
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
					docs.push({...doc.data(), id: doc.id});
			});
			setProducts(docs);
		};
	
    useEffect(() => {
		getProducts();
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

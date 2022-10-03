import React, { useState, useEffect } from 'react';
import Item from '../Card/Item';
import '../Items/ListContainer.css';
import { Link } from 'react-router-dom';
import Progress from '../Progress/Progress';
//Importo firestore
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
		const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const querydb = getFirestore();
		const queryCollection = collection(querydb, 'products');
		getDocs(queryCollection)
		.then(res => setProducts(res.docs.map(data => ({id: data.id, ...data.data()}))))
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
},
[]
);

	return (
		<>
		{ isLoading ? (
				<div className='Loader'>
					<Progress />
				</div>) : (
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
			)}
		</>
	);
};

export default ItemListContainer;
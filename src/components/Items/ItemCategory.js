import React, { useState, useEffect } from 'react';
import Item from '../Card/Item';
import '../Items/ListContainer.css';
import { Link, useParams } from 'react-router-dom';
import Progress from '../../components/Progress/Progress';
//Importo firestore
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemCategory = () => {
	const [products, setProducts] = useState([]);
    	const { catId } = useParams();
			const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
		const queryFilter = query(queryCollection, where('category', '==', catId))
				getDocs(queryFilter)
					.then(res => setProducts(res.docs.map(data => ({id: data.id, ...data.data()}))))
					setTimeout(() => {
						setIsLoading(false);
					}, 300);
},
[catId]
);

	return (
		<>
			{isLoading ? (<div className='Loader'>
				<Progress />
			</div>) : (
		<div className='List-container-cat'>
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
		)}</>
	);
};

export default ItemCategory;
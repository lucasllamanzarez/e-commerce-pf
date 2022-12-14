import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import { useParams } from 'react-router';
import Item2 from '../../components/Card/Item2';
import Progress from '../../components/Progress/Progress';
//Importo firestore
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetail = () => {
	const [product, setProduct] = useState([]);
		let { id } = useParams();
			const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, 'products', id);
			getDoc(queryDoc)
			.then(res => setProduct({id: res.id, ...res.data()}))
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
},
[id]
);

	return (
		<>
		{ isLoading ? (
			<div className='Loader'>
				<Progress />
			</div>) : (
				<div className='List-detail'>
					<Item2 data={product} />
				</div>
			)}
		</>
		
	);
};

export default ItemDetail;
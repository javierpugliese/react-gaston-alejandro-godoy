import React from 'react'
import CardAlbum from '../../components/cardalbum/CardAlbum';
import { db } from '../../firebase/FirebaseConfig';
import { collection,query,getDocs } from 'firebase/firestore';
import { useEffect,useState } from 'react';
import "./Style.css"

const Store = () => {

	const [albumsData,setAlbumsData] = useState ([]);
	useEffect( () => {
		const getAlbums = async () => {
			const q = query(collection(db,"music"));
			const querySnapshot = await getDocs (q);
			const docs = []
			querySnapshot.forEach ((doc) => {
				docs.push({...doc.data(),id:doc.id})
			} );
			setAlbumsData(docs);
		}
		getAlbums();
	} , [] )

		return (
				<div>
					<h1>Discos</h1>
					<div className='flex-container'>
						{albumsData.map((albums) => {
							return	<CardAlbum key={albums.id} dataAlbum={albums}/>
						})}
					</div>
				</div>
		)
}

export default Store

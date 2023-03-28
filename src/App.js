import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CardAlbumDetail from './components/cardalbumdetail/CardAlbumDetail';
import Store from './pages/store/Store';
import MusicGenre from "./pages/music-genre/MusicGenre"
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';

function App() {

	return (
	<BrowserRouter>
		<div className="App">
		<Navbar/>
		<Routes>
			<Route path='/' element = {<Store/>}/>
			<Route path='/inicio' element = {<Store/>}/>
			<Route path='/genero/:genero' element = {<MusicGenre/>}/>
			<Route path="/detalles/:id" element = {<CardAlbumDetail/>}/>
			<Route path="/Contact" element = {<Contact/>}/>
			<Route path="*" element = {<Error/>}/>
		</Routes>
		</div>
	</BrowserRouter>
	);
}

export default App;

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/css/main.css'
// import './assets/styles.scss'

import { AboutUs } from './pages/about-us'
import { store } from './store/store'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { HomePage } from './pages/home-page'
import { ToyIndex } from './pages/toy-index'
import { ToyEdit } from './pages/toy-edit'
import {ToyDetails} from './pages/toy-details'

export default function App() {
	return (
		<Provider store={store}>
			<Router>
				<section className="main-layout app">
					<AppHeader />
					<main>
						<Routes>
							<Route element={<HomePage />} path="/" />
							<Route element={<AboutUs />} path="/about" />
							<Route element={<ToyIndex />} path="/toy" />
							<Route element={<ToyDetails />} path="/toy/:toyId" />
							<Route element={<ToyEdit />} path="/toy/edit" />
							<Route element={<ToyEdit />} path="/toy/edit/:toyId" />
						</Routes>
					</main>
					<AppFooter />
				</section>
			</Router>
		</Provider>
	)
}
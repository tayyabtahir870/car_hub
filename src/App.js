import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.scss'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Base from './Components/Layouts/Base'

import Monitor from './Components/Elements/Monitor/Monitor'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Base />}>
					<Route index element={<Navigate to='/monitor' />} />
					<Route path='/monitor' element={<Monitor />} />
					
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App

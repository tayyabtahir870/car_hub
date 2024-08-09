import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'
import Header from './Header'

function Base(props) {
	const [isSidebarOpen, setSidebarOpen] = useState(true)
	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen)
	}
	return (
		<div className='dashboard-container'>
			<div className='sidebar-container'>
				<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
			</div>
			<div className={`main-content ${isSidebarOpen ? '' : 'closed-sidebar'}`}>
				<Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
				<Outlet />
			</div>
		</div>
	)
}

export default Base

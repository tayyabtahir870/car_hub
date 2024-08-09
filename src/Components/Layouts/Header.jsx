import React from 'react'
import { FaBell } from 'react-icons/fa6'
import { IoPersonCircleOutline } from 'react-icons/io5'

const Header = ({ isSidebarOpen, toggleSidebar }) => {
	return (
		<div>
			<div className='header container-fluid'>
				<nav className='navbar navbar-light  justify-content-between'>
					<a className='navbar-brand ' onClick={toggleSidebar}>
						<img src='/assets/menuicon.png' alt='dashboard' width='25px' />
					</a>
					<div className='form-inline'>
						{/* <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' /> */}
						<button className='btn btn-outline-success my-2 my-sm-0 btn_bg' type='submit'>
							<FaBell size={20} color='black' />
						</button>
						&nbsp; &nbsp;
						<button className='btn btn-outline-success my-2 my-sm-0 btn_bg' type='submit'>
							<IoPersonCircleOutline size={22} color='#808080' />
						</button>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Header

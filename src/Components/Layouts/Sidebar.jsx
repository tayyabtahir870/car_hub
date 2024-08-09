import React, { useState } from 'react'

function Sidebar({ isSidebarOpen, toggleSidebar }) {
	const [isDropdownOpen, setDropdownOpen] = useState(false)

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen)
	}

	return (
		<div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`} id='sidebar'>
			<div>
				<div className='logo car'>
					<div className='d-flex gap-5 '>
						<div style={{ display: isSidebarOpen ? 'block' : 'none' }}>
							<img src='/assets/carlogo.png' className='img-fluid' alt='dashboard' />
						</div>
					</div>
				</div>
				<div className='side-btn mt-5 container-fluid'>
					<div to={'/monitor'} className='nav-link' activeClassName='active'>
						<button className='sidebar-btn'>
							<img src='/assets/dashboardicon.png' alt='dashboard' width='15px' />
							<span className='nav-text'>Dashboard</span>
						</button>
					</div>
					<div to='/training-data' className='nav-link' activeClassName='active'>
						<button className='sidebar-btn'>
							<img src='/assets/calendericon.png' alt='training data' width='17px' />
							<span className='nav-text'>Calender</span>
						</button>
					</div>

					<div to='/customers' className='nav-link' activeClassName='active'>
						<button className='sidebar-btn'>
							<img src='/assets/csticon.png' alt='customers' width='20px' />
							<span className='nav-text'>Customers</span>
						</button>
					</div>
					<div to='/integrations' className='nav-link' activeClassName='active'>
						<button className='sidebar-btn'>
							<img src='/assets/resicon.png' alt='integrations' width='20px' />
							<span className='nav-text'>Reservations</span>
						</button>
					</div>
					<div to='/assistant-customization' className='nav-link' activeClassName='active'>
						<button className='sidebar-btn'>
							<img src='/assets/caricon.png' alt='assistant customization' width='22px' />
							<span className='nav-text'>Vehicles</span>
						</button>
						<div />
						<div to='/help-center' className='nav-link' activeClassName='active'>
							<button className='sidebar-btn'>
								<img src='/assets/trackicon.png' alt='help center' width='20px' />
								<span className='nav-text'>Tracking</span>
							</button>
						</div>
						<div className='nav-link dropdown'>
							<div to='/inbox' className='nav-link' activeClassName='active'>
								<button className='sidebar-btn' onClick={toggleDropdown}>
									<img src='/assets/gernateicon.png' alt='inbox' width='20px' />
									<span className='nav-text'>Offer Generator</span>
								</button>
							</div>

							{isDropdownOpen && (
								<div className='dropdown-content'>
									<div to='/inbox/assistants' className='nav-link' activeClassName='active'>
										<button className='sidebar-btn dropdown-btn'>
											<img src='/assets/AI.svg' alt='inbox' width='25px' />

											<span className='nav-text'>All Offers</span>
										</button>
									</div>
									<div className='dropdown-divider'></div>
									<div to='/inbox/agents' className='nav-link' activeClassName='active'>
										<button className='sidebar-btn dropdown-btn'>
											<img src='/assets/Agents.svg' alt='inbox' width='25px' />

											<span className='nav-text'>Make New Offer</span>
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar

import React from 'react'

function Monitor() {
	const series = [
		{
			name: 'Conversations',
			data: [4, 2, 5, 10, 1, 7, 3]
		}
	]

	const options = {
		chart: {
			type: 'bar'
		},
		xaxis: {
			categories: ['19 Mar', '22 Mar', '28 Mar', '01 Apr', '04 Apr', '08 Apr', '10 Apr']
		},
		yaxis: {
			min: 0
		},
		plotOptions: {
			bar: {
				horizontal: false,
				borderRadius: 4,
				columnWidth: '30%',
				endingShape: 'rounded'
			}
		},
		fill: {
			opacity: 0.8,
			colors: ['#902BEB']
		},
		dataLabels: {
			enabled: false
		},
		colors: ['#902BEB'],
		grid: {
			borderColor: '#e7e7e7',
			strokeDashArray: 5 // Makes the grid lines dotted
		}
	}

	return (
		<div className='monitor container '>
			<div className='px-4'>
				<h3>Make New Offer</h3>
				<p>Offer Generator / Make New Offer</p>
			</div>
			<div className='p-4 main_warpper'>
				<div className='main_page '>
					<div className='performance   card p-4 '>
						<h3>General Information</h3>
						<div className='row mt-3'>
							<div className='col-md-6'>
								<h6>Customer Name</h6>
								<input type='text' placeholder='Enter Name' className='input p-2' />
							</div>
							<div className='col-md-6'>
								<h6>Current Date</h6>
								<input type='date' className='input p-2' />
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-md-6'>
								<h6>Pick Up Address</h6>
								<input type='text' placeholder='Pick Up Address' className='input p-2' />
							</div>
							<div className='col-md-4'>
								<h6>Pick Up Date</h6>
								<input type='time' className='input p-2' />
							</div>
							<div className='col-md-2'>
								<h6>Pick Up Time</h6>
								<input type='time' className='input p-2' />
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-md-6'>
								<h6>Drop Off Address</h6>
								<input type='text' placeholder='Drop Off Address' className='input p-2' />
							</div>
							<div className='col-md-4'>
								<h6>Drop Off Date</h6>
								<input type='time' className='input p-2' />
							</div>
							<div className='col-md-2'>
								<h6>Drop Off Time</h6>
								<input type='time' className='input p-2' />
							</div>
						</div>
						<div className='row mt-4'>
							<div className='col-md-6'>
								<h6>Discount</h6>
								<input type='text' placeholder='Discount Here' className='input p-2' />
							</div>
						</div>
					</div>
					<div className='performance   card p-4 mt-5 '>
						<h3>Select Vehicle</h3>
						<div className='row mt-3'>
							<div className='col-md-3'>
								<h6>Make</h6>
								<input type='text' placeholder='Enter Name' className='input p-2' />
							</div>
							<div className='col-md-3'>
								<h6>Modal</h6>
								<input type='text' placeholder='Enter Name' className='input p-2' />
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-md-12 col-lg-6   '>
								<div className='card'>
									<div className='d-flex car_responsive align-items-center gap-2'>
										<div className='p-2 '>
											<img src='/assets/car.png' alt='' />
										</div>
										<div>
											<h5 className='mb-0'>Suzuki Swift</h5>
											<h6 className='mb-0'>LEM 1234</h6>
											<div className='d-flex'>
												<h6 className='mb-0'>Year: 2002</h6>
												&nbsp; &nbsp;
												<h6 className='mb-0'>Type: Sedan</h6>
											</div>
											<div className='d-flex'>
												<h6 className='d-flex gap-2'>
													Color: <div className='clr mt-1'></div>
												</h6>
												&nbsp; &nbsp;
												<h6>City: New York</h6>
											</div>
											<button className='available_btn '>Available</button>
										</div>
										<div>
											<button className='select_btn '>Select</button>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-12 col-lg-6  '>
								<div className='card'>
									<div className='d-flex car_responsive align-items-center gap-2'>
										<div className='p-2 '>
											<img src='/assets/car.png' alt='' />
										</div>
										<div>
											<h5 className='mb-0'>Suzuki Swift</h5>
											<h6 className='mb-0'>LEM 1234</h6>
											<div className='d-flex'>
												<h6 className='mb-0'>Year: 2002</h6>
												&nbsp; &nbsp;
												<h6 className='mb-0'>Type: Sedan</h6>
											</div>
											<div className='d-flex'>
												<h6 className='d-flex gap-2'>
													Color: <div className='clr mt-1'></div>
												</h6>
												&nbsp; &nbsp;
												<h6>City: New York</h6>
											</div>
											<button className='available_btn '>Available</button>
										</div>
										<div>
											<button className='select_btn '>Select</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-md-12 col-lg-6   '>
								<div className='card'>
									<div className='d-flex car_responsive  align-items-center gap-2'>
										<div className='p-2 '>
											<img src='/assets/car.png' alt='' />
										</div>
										<div>
											<h5 className='mb-0'>Suzuki Swift</h5>
											<h6 className='mb-0'>LEM 1234</h6>
											<div className='d-flex'>
												<h6 className='mb-0'>Year: 2002</h6>
												&nbsp; &nbsp;
												<h6 className='mb-0'>Type: Sedan</h6>
											</div>
											<div className='d-flex '>
												<h6 className='d-flex gap-2'>
													Color: <div className='clr mt-1'></div>
												</h6>
												&nbsp; &nbsp;
												<h6>City: New York</h6>
											</div>
											<button className='available_btn '>Available</button>
										</div>
										<div>
											<button className='select_btn '>Select</button>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-12 col-lg-6   '>
								<div className='card'>
									<div className='d-flex car_responsive align-items-center gap-2'>
										<div className='p-2 '>
											<img src='/assets/car.png' alt='' />
										</div>
										<div>
											<h5 className='mb-0'>Suzuki Swift</h5>
											<h6 className='mb-0'>LEM 1234</h6>
											<div className='d-flex'>
												<h6 className='mb-0'>Year: 2002</h6>
												&nbsp; &nbsp;
												<h6 className='mb-0'>Type: Sedan</h6>
											</div>
											<div className='d-flex'>
												<h6 className='d-flex gap-2'>
													Color: <div className='clr mt-1'></div>
												</h6>
												&nbsp; &nbsp;
												<h6>City: New York</h6>
											</div>
											<button className='available_btn '>Available</button>
										</div>
										<div>
											<button className='select_btn '>Select</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='performance   card p-4 mt-5 '>
						<h3>Select Chauffeur</h3>
						<div className='row mt-3'>
							<div className='col-md-3  '>
								<div className='d-flex align-items-center btnradio p-2'>
									<input type='radio' placeholder='Enter Name' className='p-2 radio-input' />
									&nbsp;&nbsp;
									<label>Search Chauffeur</label>
								</div>
							</div>
							<div className='col-md-3  '>
								<div className='d-flex align-items-center btnradio p-2'>
									<input type='radio' placeholder='Enter Name' className='p-2 radio-input' />
									&nbsp;&nbsp;
									<label>Search Chauffeur</label>
								</div>
							</div>
						</div>
						<div className='row mt-3'>
							<div className='col-md-6'>
								<h6>Search Chauffeur</h6>
								<input type='Search' placeholder='Enter Name' className='input p-2' />
							</div>
						</div>

						<div className='row mt-3'>
							<div className='col-md-12 col-lg-6 '>
								<div className='card'>
									<div className='d-flex car_responsive align-items-center gap-2'>
										<div className='p-2 '>
											<img src='/assets/driver.png' alt='' />
										</div>
										<div>
											<h5 className='mb-0'>Glenn Jean</h5>
											<h6 className='mb-0'>757-947-5015</h6>

											<h6 className='mb-1'>City: Brentwood</h6>

											<h6 className='mt-1'>Country: Australia</h6>

											<button className='available_btn '>Available</button>
										</div>
										<div>
											<button className='select_btn '>Select</button>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-12 col-lg-6 '>
								<div className='card'>
									<div className='d-flex car_responsive align-items-center gap-2'>
										<div className='p-2 '>
											<img src='/assets/driver.png' alt='' />
										</div>
										<div>
											<h5 className='mb-0'>Glenn Jean</h5>
											<h6 className='mb-0'>757-947-5015</h6>

											<h6 className='mb-1'>City: Brentwood</h6>

											<h6 className='mt-1'>Country: Australia</h6>

											<button className='available_btn '>Available</button>
										</div>
										<div>
											<button className='select_btn '>Select</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='performance   card p-4 mt-5 '>
						<h3>Terms & Conditions</h3>
						<div className='row mt-3'>
							<div className='col-md-12 '>
								<h6>Please specify terms and conditions.</h6>

								<textarea class='form-control input' placeholder='Terms & Conditions here' id='exampleFormControlTextarea1' rows='3'></textarea>
							</div>
						</div>
					</div>
					<div className='text-end mt-3'>
						<button className='offer_btn pt-2 pb-2 '>Generate Offer</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Monitor

import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		const { data, selectedBuilding } = this.props;

		const selected = data
			.filter(directory => {
				return directory.id === selectedBuilding
			})
			.map(directory => {
				if(typeof(directory.coordinates) !== "undefined") {
					return (
						<div>
							<p>
								Code: {directory.code}
							</p>
							<p>
								Name: {directory.name}
							</p>
							<p>
								Coordinates: 
							</p>
							<p>
								&nbsp;&nbsp;&nbsp;&nbsp; Latitude: {directory.coordinates.latitude}
							</p>
							<p>
								&nbsp;&nbsp;&nbsp;&nbsp; Longitude: {directory.coordinates.longitude}
							</p>
							<p>
								Address: {directory.address} 
							</p>
						</div>
					);
				}
				return (
					<div>
						<p>
							Code: {directory.code}
						</p>
						<p>
							Name: {directory.name}
						</p>
					</div>
				);
			});
		if (selectedBuilding === 0) {
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		}
		return (
			<div>
				{selected}
			</div>
		);
	}
}
export default ViewBuilding;

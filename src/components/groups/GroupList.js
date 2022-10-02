import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GroupList = ({ groups, onDeleteClick }) => (

	<div className="card">
		< table className="table table-hover" >
			<thead>
				<tr>
					<th>Group name</th>
					<th>Group description</th>
					<th>Status</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{groups.map((group) => {
					return (
						<tr key={group.id}>
							<td>
								{group.name}
							</td>
							<td>{group.description}</td>
							<td>{group.isActive ? "Active" : "Not active"}</td>
							<td>
								<Link to={"/group/" + group.id} className="btn btn-outline-primary">Edit</Link>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	</div>
);

GroupList.prototype = {
	groups: PropTypes.array.isRequired,
	onDeleteClick: PropTypes.func.isRequired
};

export default GroupList;

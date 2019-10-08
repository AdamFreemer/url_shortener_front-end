import React from "react";
import Row from './Row';

function Table(props) {
  if (!props.rows) { return <div>Loading....</div> }
	return (
		<table className="table">
			<thead>Top 100 URLs
			<tr>
        <th scope="col">Views</th>
        <th scope="col">Title</th>
        <th scope="col">Short URL</th>
			</tr>
			</thead>
			<tbody>
				{props.rows.map((row, index) => {
					return (
            <Row key={index} row={row} />
          );
        })}
			</tbody>
		</table>    
	)
}

export default Table;
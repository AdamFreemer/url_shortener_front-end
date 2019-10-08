import React from "react";

function Row(props) {
	return (  
    <tr>
      <td>{props.row.views}</td>
      <td>{props.row.title}</td>
      <td><a href={props.row.short_url} target="_blank" rel="noopener noreferrer">Short Link</a></td>
    </tr>
	)
}

export default Row;
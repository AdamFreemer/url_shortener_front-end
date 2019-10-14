import React, { useContext, useEffect } from "react"
import { LinkContext } from "../../contexts/LinkContext";
import Row from './Row';

function Table() {
  const linkContext = useContext(LinkContext);
  const rows = linkContext.rows;

  useEffect(() => {
    linkContext.setLoad();
    linkContext.fetchRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!rows || linkContext.loading) { 
    return (
      <div className="text-center">Loading...</div> 
    )
  }

	return (
		<table className="table table-bordered">
			<thead>
        <tr>
          <th scope="col">Views</th>
          <th scope="col">Title / URL</th>
          <th scope="col">Short URL</th>
        </tr>
			</thead>
			<tbody>
				{rows.map((row, index) => {
					return (
            <Row key={index} row={row} />
          );
        })}
			</tbody>
		</table>    
	)
}

export default Table;
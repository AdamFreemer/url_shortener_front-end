import React, { useContext, useEffect } from "react"
import { LinkContext } from "../../contexts/LinkContext";
import Row from './Row';

function Table() {
  const linkContext = useContext(LinkContext);
  const rows = linkContext.rows;
  let retry = 0;
  
  useEffect(() => {
    linkContext.fetchRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!rows || linkContext.loading) { // This is the case when awaiting data or loading from the API
    return (
      <div className="text-center">Loading...</div> 
    )
  } else if (rows.length === 0) { // This is the case when the database has zero records
    return (
      <div className="text-center">No Data</div> 
    ) 
  } else {
    if (!rows[rows.length - 1].title) { // This is the case awaiting for the background job to fetch the title
      while (retry <= 5) {
        linkContext.fetchRows();
        retry += 1;
      }
    }
  }

  return (  
    <div className="table-responsive">
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
    </div>
  )
}

export default Table;

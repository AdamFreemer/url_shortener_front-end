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

  console.log('== rows in Table.js: ', rows)

  if (!rows || linkContext.loading) { 
    return (
      <div className="text-center">Loading...</div> 
    )
  }
  
  if (!rows[rows.length - 1].title) { 
    while (retry <= 3) {
      linkContext.fetchRows();
      retry += 1;
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

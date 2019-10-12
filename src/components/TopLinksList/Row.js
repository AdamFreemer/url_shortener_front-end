
import React from "react"

function Row(props) {
  function formatTitle(title) {
    if (!title) { return '' }
    if (title.length > 100) {
      return `${title.substring(0,100)}...`
    } else {
      return title
    }
  }

  function formatViews(views) {
    if ( views === 0 ) {
      return '-'
    } else {
      return views
    }
  }

	return (  
    <tr>
      <td>{formatViews(props.row.views)}</td>
      <td>{formatTitle(props.row.title)}</td>
      <td><a href={props.row.short_url} target="_blank" rel="noopener noreferrer">{props.row.short_url}</a>
      </td>
    </tr>
	)
}

export default Row;


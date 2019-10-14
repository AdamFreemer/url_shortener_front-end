import React from "react"

function Row(props) {
  function itemLengthLimiter(item) {
    if (!item) { return '' }
    if (item.length > 75) {
      return `${item.substring(0,75)}...`
    } else {
      return item
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
      <td className="text-right">{formatViews(props.row.views)}</td>
      <td>
        <b>{itemLengthLimiter(props.row.title)}</b><br/>
        <i><a href={props.row.url} target="_blank" rel="noopener noreferrer">{itemLengthLimiter(props.row.url)}</a></i>
      </td>
      <td>
        <a href={props.row.short_url} target="_blank" rel="noopener noreferrer">{props.row.short_url}</a>
      </td>
    </tr>
	)
}

export default Row;

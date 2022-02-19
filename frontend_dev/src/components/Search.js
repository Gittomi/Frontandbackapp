import React from 'react'

export default function Search(props) {
  return (
    <div className="search"><input type="text" value ={ props.searchValue }placeholder="Search/filter by name" onChange={props.onSearchChange }/></div>
  )
}

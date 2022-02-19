import React from 'react'

export default function ProductItem(props) {
  return (
<div className="productItem">
    <img className="image" src={ props.image } alt="" height="220px"/>
    <div className="title">{props.name}</div>
    <div className="price"><div className="priceSmaller">$</div>{ props.priceW}<div className="priceSmaller">{props.priceP}</div></div>
    <div className="ships">{ props.ships }</div>
</div>
  )
}

import React from 'react'
import ProductItem from './ProductItem';

export default function ProductListView(props) {
  return (
    <div className="productContainer" >
        {props.products.filter(product =>product.name.toLowerCase().includes(props.searchTerm.toLowerCase())).map(p => 
        <ProductItem key={p.id} image={p.thumbnail} name={p.name} priceW={p.priceWhole} priceP={p.pricePart} ships={p.shipsTo}/>)}
   </div>
  )
}

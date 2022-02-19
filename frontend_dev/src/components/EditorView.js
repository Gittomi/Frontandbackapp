import React from 'react'


export default function EditorView(props) {
  return (
      <div>
          <form className="form" action="/products" method="POST">
          <div>Tuotteen Kuva: <input type="text" id="thumbnail" name="thumbnail" />Syötä tähän tuotteen kuvan URL</div>
              <div>Tuotteen Nimi: <input type="text" id="name" name="name" />Syötä tähän tuotteen nimi</div>
              <div>Hinta Kokonaiset Eurot: <input type="text" id="priceWhole" name="priceWhole" />Syötä hinta kokonaiset eurot esim. 59</div>
              <div>Hinta Kokonaiset Sentit: <input type="text" id="pricePart" name="pricePart" />Syota hinta kokonaiset sentit esim. 89</div>
              <div>Lähetysmaa: <input type="text" id="shipsTo" name="shipsTo" />Syötä tähän maan nimi minne lähetys onnistuu</div>
            <button type="submit">Tallenna</button>
          </form>
  <div className="productContainer">
    { props.products.map(p => <div key={ p.key } className="productItem"><img src={ p.thumbnail }alt="" height="220px"/><div className="title">{ p.name }</div><div className="price"><div className="priceSmaller">$</div>{ p.priceWhole }<div className="priceSmaller">{ p.pricePart }</div></div><button onClick={ () => props.onItemDelete(p) }>DEL</button></div>)}
 </div> 
 </div>
 )
}


    
 

    

import React from 'react'

/**
 * Implement a simple function component that accepts "products" in props
 * Each product has an id, name and price.
 * and renders a list of li tags with "{product.name} {product.price}"
 * if no price provided for a product (0 is a valid price), present the text "N/A" instead of the price
 * the list should be nested in ul tag
 * Do not forget to add key to each property (use the id as the key, as it is unique)
 */
export default function ListOfProducts(props) {
    const {products} = props;

    const newLis = products.map((product) => {
      if(product.price === undefined){
        return(<li key={product.id}>{product.name} N/A</li>)
      } else {
        return(<li key={product.id}>{product.name} {product.price}</li>)
      }
    })

    return(<ul>{newLis}</ul>)

}
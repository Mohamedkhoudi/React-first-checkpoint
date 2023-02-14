import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'

const ProductList = () => {
    const data =[{
        id : Math.random(), name :"Balance de cuisine électronique - 10 kg - Blanc ", pic : "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/3514/1.jpg?0007",
        price: "250 dinars"},
        { id : Math.random(), name : "Biolux Plaque - Encastrable à Gaz - Noir - 60 Cm - 4 Feux - Garantie 1 ans", pic : "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/4356/1.jpg?5587",
            price: "3600 dinars"}, 
            { id : Math.random(), name: "LG Machine à Laver 8KG/5KG Séchage - SILVER- 1400T - Garantie 3 ans", pic : "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/3056/1.jpg?2551",
                price : "1470 dinars" }]
  return (
    <div>
      {data.map(el=> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.pic} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          The price of this item is about {el.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>)

      }
    </div>
  )
}

export default ProductList

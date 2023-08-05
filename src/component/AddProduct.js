import React from 'react'
import Rating from './Rating'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
let masterList=[
    {
        produtname:'Mouse',
        url:'image/mouse.jpg',
        price:500,
        disc:"HP mouse ,best quality",
        rating:"4"
},
{
    produtname:'Laptop',
    url:'image/th.jpeg',
    price:50000,
    disc:"HP laptop ,best quality",
    rating:"3"
},
{
produtname:'Keyboard',
url:'image/mouse.jpg',
price:500,
disc:"Logitech K480 Wireless Multi-Device Keyboard For Windows, Macos, Ipados, Android Or Chrome Os",
rating:"5"
},
]
export default function AddProduct() {
   
   return( masterList.map(
        (obj)=>
        {
            return (
                <div className='col-md-4'>
                <div className="card">
                <img src={obj.url} className="cardImgTop" alt="..." height={250}/>
                <div className="cardBody" style={{textAlign:"center"}}>
                  <h5 className="cardTitle">{obj.produtname}</h5>
                  <h6 className='cardTitle'>{obj.price}</h6>
                  <p className="cardText">{obj.disc}</p>
                  <p><Rating rating= {obj.rating}/></p>
                  </div>
                </div>
              </div>
                )
        }
    )
   )
}

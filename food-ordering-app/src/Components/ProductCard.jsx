import React from 'react'
import './Style.css'

const ResCard = ({item}) => {

  return (
    <>
        <div id="resCard">
            <img src={item.thumbnail} alt='' />
            <p className='title'>{item.title}</p>
            <p className='category'>{item.category}</p>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <p className='price'>₹ {item.price}</p>
                <p className='rating'>Rating: {item.rating}</p>
            </div>
            <button>Add to cart</button>
        </div>
    </>
  )
}

export default ResCard

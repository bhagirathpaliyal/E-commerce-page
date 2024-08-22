import React from 'react'

const OrderCard = (prop) => {
  return (
    <div className='border p-5 rounded-[10px]'>
        <h4>OrderId : <span>{prop.data.orderId}</span></h4> 
        <p>Product Name : <span>{prop.data.orderedProducts.name}</span></p>
        <p>Product Price : <span>{prop.data.orderedProducts.Price}</span></p>
        <p>Merchant Name : <span>{prop.data.merchant?.name}</span></p>

    </div>
  )
}

export default OrderCard
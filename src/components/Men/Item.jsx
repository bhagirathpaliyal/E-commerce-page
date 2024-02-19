import man from './../../assets/Man.jpg'

function Item(prop){

    return(
        <div className="border-[2px] border-solid border-brown-900 w-[200px] bg-[#F1F1F1] rounded-[6px] overflow-hidden">
            <div><img src={prop.image} alt="Image"  className='bg-cover w-full h-[200px]'/></div>
            <div className='pl-[5px]'>
                <h2>Name Of Product</h2>
            <h2>Price</h2>
            <p>Description</p>
            </div>
            
            
        </div>
    )
}

export default Item;


function Item(prop){

    return(
        <div key={prop.index} className="flex flex-col gap-[10px] border-[2px] border-solid border-brown-900 w-[100px] md:w-[200px] bg-[#F1F1F1] rounded-[6px] overflow-hidden bg-white p-[5px]">
            <div><img src={prop.data.image} alt="Image"  className='bg-cover w-full h-[100px] md:h-[200px]'/></div>
            <div className='pl-[5px]  flex flex-col gap-[10px]'>
                <h2 className='text-[8px] md:text-[12px] font-medium'>{prop.data.title}</h2>
            <h2 className='text-[12px] font-bold'>Price : {prop.data.price *80}</h2>
           

          
            </div>
            
            
        </div>
    )
}

export default Item;
import React from 'react'

const Furnit = ({item, handleClick}) => {
    const {id, title, price, img} = item;
    return ( 
        <>
            <div className="cards">
                <img src={img} alt="" className='h-72 contain'/>
                <div className="details mb-8">
                    <p className='text-black'>{title}</p>
                    <p className='font-bold text-gray-500'>${price}</p>
                    <button
                        data-item-id={item.id}
                        data-item-price= {item.price}
                        data-item-image={item.img}
                        data-item-name={item.title}
                        className='snipcart-add-item px-6 py-2 bg-black text-white hover:bg-transparent hover:border-2 hover:text-black hover:border-current hover:py-1'>
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default Furnit;
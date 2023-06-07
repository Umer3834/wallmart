import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
const Carddetail = (props) => {
    // console.log(props.data,"dispatchprops");
   const dispatch=useDispatch()
    const[cart,setcart]=useState("")
  
const [price,setprice]=useState()
const handlecart=()=>{
setcart(props.data)
setprice(props.data.price)
dispatch({type:"add",payload:{item:props.data}})


}
// ================
const[image,setimage]=useState("")
const handleimage=(obj)=>{
setimage(obj)
}


    return (
        <>
       <div className='flex h-full w-[100%] mt-[50px] justify-around '>
                <div className='h-[100vh] flex   w-[50%]'>
                    {
                        image?<div>
                        <img className='h-[80vh]   ' src={image} />
                        </div>:
                        <div>
                        <img className='h-[80vh]   ' src={props.data.images?.front} alt=''/>
                        </div>

                    }
                    
                    <div className='flex flex-col'>
                    {
                    props.data.pic.map((obj)=>{
                        return(
                            <div className=""onClick={()=>{handleimage(obj)}}>
                                
                    <img className='h-[20vh]' src={obj}/>
                    </div>
                        
                        )
                 
                    })
                   }
                    </div>
               
                </div>
                <div className='border-2 border-grey-400 px-4 w-[30%] py-6'>
                    <p className='font-bold w-[70%] text-xl'>{props.data.name}</p>
                    <p className='text-green-500 text-2xl font-medium py-5'>${props.data.price}</p>
                    <p className='text-sm mt-2'>Price when purchased online</p>
                    <button className='bg-[rgb(0,113,220)] text-white py-2 px-3 rounded-full mt-5'onClick={handlecart}>Add to Cart</button>
                </div>

            </div>
            
    {/* <Cartlocal mycart={cart}/> */}

        </>
    )
}
export default Carddetail

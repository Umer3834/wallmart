import React, { useEffect, useState } from 'react'

import Data from '../Data'
import Carddetail from './carddetail'
export default function Landing(props) {
  

    const [daata, setdaata] = useState("")
    const [catgry, setcatgry] = useState(Data.Kid)

    useEffect(() => {
        switch (props.data) {
            case "Kid": setcatgry(Data.Kid)
                break
            case "Men": setcatgry(Data.Men)
                break
            case "Women": setcatgry(Data.Women)
                break
        }
    }, [props.data])
    const handledata = (obj) => {

        setdaata(obj)
        
    }
 
    return (
        <>
            {/* <marquee className="mt-2" behavior="scroll" direction="right">{catgry.detail.promo}</marquee>  */}

        
            {
                daata ? <Carddetail data={daata}/>:<div className='flex flex-wrap px-5 py-4  ' >
                {catgry.products.map(obj => 
                
                
                <div onClick={() => { handledata(obj) }} class="max-w-[280px] bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-4 flex flex-col items-center text-center mt-4">



                    <a href="#">
                        <img className="rounded-t-lg h-[40vh]" src={obj.images.front} alt=""  onClick={() => { handledata(obj) }}/>
                    </a>
                    <div class="p-5">
                       <p className='font-medium'>${obj.price}</p>
                            <p class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {obj.name}
                            </p>
                     
                      
                    </div>
                </div>
                )}

            </div>
            }
        </>

    )
}

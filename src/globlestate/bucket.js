import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { FiShoppingCart } from "react-icons/fi"


export default function Bucket() {
  const dispatch = useDispatch()
  const Store = useSelector(store => store)
  const handledel = (index) => {
    dispatch({ type: 'Del_ITEM', payload: { index } });

  }
 

  return (

    <>


      {Store.items[0] == undefined ?
        <div className='absolute z-20 h-[100vh] w-[100%] bg-white'>
          <h1 className='font-bold text-2xl mt-4 pl-4'>
            Cart item({Store.counter}items)
          </h1>
          <div className='flex flex-col items-center mt-14'>
            <FiShoppingCart style={{ fontSize: "100px" }} />
            <h1 className='font-bold text-xl mt-8'>Sign in to see your saved items.</h1>
            <button className='bg-blue-500 px-24 font-semibold py-2 rounded-full hover:bg-blue-600 text-white mt-4'>Sign in </button>
          </div>
        </div>

        :
        <div className='absolute z-20 h-[100vh] w-[100%] flex justify-around bg-white py-8'>
          <div className='flex flex-col' >
            <h1>Cart items{Store.counter}</h1>
            {
              Store.items.map((ele, index) => {
               
                return (

                  <div>
                    <div className='flex  border-2 border-black mt-4' >
                      <div className='h-[15vh] w-[15%]'>
                        <img className='h-[100%] w-[100%]' src={ele.images.front} />
                      </div>
                      <div className='pl-4'>
                        <h1>{ele.name}</h1>
                        <h1>Prise{ele.price}</h1>
                        <button className='border-2 border-black block' onClick={() => handledel(index)}>del</button>
                        {/* <div className='flex items-center w-[70px] justify-between'>
  <button className='text-2xl' onClick={handleinc}>+</button>
  <h1>{Store.counter}</h1>
  <button>-</button>

</div> */}
                      </div>
                    </div>
                  </div>


                )

              })
            }


          </div>
          <div className='w-[45%] border-2 border-black  items-center py-4'>
            <div className='flex flex-col items-center'>
              <button className='bg-blue-500 px-24 font-semibold py-2 rounded-full hover:bg-blue-600 text-white '>Continue to Checkout</button>
              <p className='mt-4 text-sm'>For the best shopping experience, sign in</p>
            </div>
            <div className='pl-3 mt-8'>
              <h1 className=''><span className='font-bold'>Subtotl</span> ({Store.counter}items)</h1>
              <div className='flex justify-between pr-4 mt-4'>
                <h1 className='font-bold'>Taxes</h1>
                <h1>Calculated at checkout</h1>
              </div>
              <div>
                <h1 className='font-bold mt-4'>Estimated Total</h1>
              </div>
            </div>


          </div>
        </div>


      }




    </>
  )
}

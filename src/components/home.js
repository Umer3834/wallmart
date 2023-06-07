import React, { useState } from 'react'
import logo1 from "../images/logo1.svg"
import { AiFillGift, AiOutlineHeart, } from "react-icons/ai"
import { RiAccountCircleLine } from "react-icons/ri"
import { FiShoppingCart } from "react-icons/fi"
import Landing from './landing'
import useToggle from '@react-hook/toggle'
import Main from './mainpage'
import Bucket from '../globlestate/bucket'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const Store = useSelector(store => store)


  const [catgry, setcatgry] = useState("")
  const handleshop = (e) => {
    setcatgry(e.target.innerText)
  }

  const [value, toggle] = useToggle(false, true)
  const [myvalue, mytoggle] = useToggle(false, true)

  // ===========================
  const [hover, sethover] = useState(false)
  const handlehover = () => {
    sethover(true)
  }



  return (
    <>

      <div className='bg-[rgb(0,113,220)] text-white flex justify-around items-center py-3 px-10'>
        <img src={logo1} alt='' onClick={handleshop} />
        <div className='flex items-center hover:bg-black py-3 px-4 rounded-full ' onClick={toggle}>
          <AiFillGift style={{ fontSize: "20px" }} />
          <h1 className='ml-2 font-semibold text-md'>Departments

            {value === true ?
              <ul className='text-black absolute   top-[86px] bg-red-500 left-[10%]  px-4 w-[20%] py-2 scrol z-10'>
                <li>Deals</li>
                <li>Mothersday</li>
                <li onMouseEnter={handlehover} >Clothing
                  {
                    hover === true ?
                      <ul className='absolute left-[100%] hide bg-green-500 pr-10 pl-4 py-5'>
                        <li onClick={handleshop}>Kid</li>
                        <li onClick={handleshop}>Men</li>

                        <li onClick={handleshop}>Women</li>
                      </ul> :
                      false
                  }


                </li>

                <li>Pets</li>
                <li>Beauty</li>
                <li>Pets</li>
                <li>Arts</li>
                <li>Gift Cards</li>
                <li>Shop with purpose</li>
                <li>Home Improvement</li>
                <li>Patio</li>
                <li>Toys</li>
                <li>Games</li>
                <li>Personal Care</li>
                <li>Gift Cards</li>
                <li>Gift Cards</li>
              </ul>

              : false}





          </h1>
        </div>

        <div className='flex items-center  hover:bg-black py-3 px-4 rounded-full'>
          <AiFillGift style={{ fontSize: "20px" }} />
          <h1 className='ml-2 font-semibold text-md'>Services</h1>
        </div>
        <input className='w-[35%] rounded-3xl py-2' />
        <div className='flex items-center  hover:bg-black py-2 px-4 rounded-full'>
          <AiOutlineHeart style={{ fontSize: "20px" }} />
          <p className='leading-[20px] ml-2'><span className='text-xs'>Reorder</span> <br></br> <span className='text-sm font-bold'>My Items</span></p>
        </div>
        <div className='flex items-center  hover:bg-black py-2 px-4 rounded-full'>
          <RiAccountCircleLine style={{ fontSize: "20px" }} />
          <p className='leading-[20px] ml-2'><span className='text-xs'>Sign in </span> <br></br> <span className='text-sm font-bold'>Accounts</span></p>
        </div>

        <div onClick={mytoggle}>
          <sup>{Store.counter}</sup>
          <FiShoppingCart style={{ fontSize: "23px" }} />
          <p className='text-xs'>${Store.Price}</p>

        </div>

      </div>
      {
        myvalue === true ?
          <Bucket /> : false
      }
      {
        catgry ? <Landing data={catgry} /> : <Main />
      }


    </>

  )
}
export default Navbar

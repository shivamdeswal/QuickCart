import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import {add,remove} from "../redux/Slices/CartSlice";


export default function Product({item}) {

  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(add(item));
    toast.success("Added to Cart");
  }
  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.error("Removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between w-full gap-3 p-4 rounded-xl 
    border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03]
    md:hover:scale-[1.05] transition ease-in">
      <div className="text-[#1d783e] font-semibold text-lg text-left truncate w-40 mt-1">
        <p>{item.title.substring(0,11)+ "..."}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]" >
        <img src={item.image} className= "h-full w-full"/>
      </div>
      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${item.price}</p>
        <button>
          {
            cart.some((p)=> p.id===item.id) ?
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>
              Remove Item
            </button>):
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in" onClick={addToCart}>
              Add to Cart
            </button>)
          }
        </button>
      </div>
    </div>
  ) 
}

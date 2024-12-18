import React from 'react'

function Card({username,text}) {
  console.log(username);
  return (
    <>
    <img src="https://images.pexels.com/photos/29773887/pexels-photo-29773887/free-photo-of-charming-getreidegasse-in-salzburg-austria.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" class="object-cover object-center w-full rounded-md h-72 bg-gray-500"></img>
     <div class="mt-6 mb-2"><span class="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">{username}</span><h2 class="text-xl font-semibold tracking-wide">{text || "just welcome"}</h2></div>
     <p class="text-black-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta amet</p>
  </>
  )
}

export default Card
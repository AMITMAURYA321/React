import React from "react";
function Card({username,btntext="Visit Me"}){
    console.log({username});
    return(
        <div class="relative h-[400px] w-[300px] rounded-md">
        <img
  src="https://images.unsplash.com/photo-1560932684-5e552e2894e9?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="AirMax Pro"
  class="z-0 h-full w-full rounded-md object-cover"
/>
<div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
<div class="absolute bottom-4 left-4 text-left">
  <h1 class="text-lg font-semibold text-white">{username}</h1>
  <p class="mt-2 text-sm text-gray-300">
  This epic line was a heavy part of Endgame's marketing, reminding fans that this was the biggest fight that the Avengers had ever endured
  </p>
  <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
     {btntext}
  </button>
</div>
</div>
    )
}
export default Card
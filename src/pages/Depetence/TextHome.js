import React from 'react'
import { Link } from 'react-router-dom'

function TextHome(props) {
  return (
    <div class="relative px-6 lg:px-8 w-full h-auto flex items-center justify-center">
    <div class="min-x-md max-w-2xl">
      {/* <div class="hidden sm:mb-5 sm:flex sm:justify-center">
        <div class='relative flex rounded-full py-1 px-3 text-sm leading-6 text-white ring-2  ring-green-900/40 hover:ring-green-900/60'>
           Admission open for the academic 2023-24<p class="font-semibold cursor-pointer text-indigo-600 pl-2">
            <Link to='/Contact'>
            <span class="absolute inset-0" aria-hidden="true"></span>Apply here <span aria-hidden="true">&rarr;</span>
            </Link>
            </p>
        </div>
      </div> */}
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white sm:text-5xl backdrop-shadow-lg tracking-wide  text-shadow-lg uppercase" >{props.con}</h1>
        {/* <p class="mt-6 text-base md:text-lg lg:leading-8 text-shadow-lg font-thin text-white brightness-75">Ahlussuffa deals with many activities to build up high qualified Islamic scholars under Ahlussunnah wal Jama’a. Our intention is to keep up the way of Prophet Muhammed (S.A.W).</p> */}
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link to='/gallery'>
          <p class="rounded-md bg-indigo-600 px-3.5 cursor-pointer py-2.5 text-md font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Explore world</p>
          </Link>
          {/* <p class="text-sm font-medium leading-6 text-white cursor-pointer">View more <span aria-hidden="true">→</span></p> */}
        </div>
      </div>
    </div>
    {/* <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
        <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        <defs>
          <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div> */}
  </div>
  )
}

export default TextHome
